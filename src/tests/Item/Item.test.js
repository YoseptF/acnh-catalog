import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import {
  Router, Switch, Route,
} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import store from '../../store';
import Item from '../../components/containers/Item';
import '../globals';

const renderOnPath = (path, route) => {
  const history = createMemoryHistory();
  history.push(path);
  render(
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          {route}
        </Switch>
      </Router>
    </Provider>,
  );
};

describe('<Item />', () => {
  test('Creates an item from the current location', async () => {
    renderOnPath('/Villagers/Benjamin', <Route exact path="/:category/:item" component={Item} />);
    await waitFor(() => {
      expect(screen.getByAltText('Benjamin')).toBeInTheDocument();
    });
  });
  test('Creates lists with the information retrieved from fetch', async () => {
    renderOnPath('/Villagers/Benjamin', <Route exact path="/:category/:item" component={Item} />);
    await waitFor(() => {
      expect(screen.getByText('Lazy')).toBeInTheDocument();
    });
  });
});
