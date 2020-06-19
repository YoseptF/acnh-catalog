import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import GridItem from '../../components/presentationals/GridItem';
import store from '../../store';
import '@testing-library/jest-dom/extend-expect';

const renderWithRouter = children => {
  render(
    <Provider store={store}>
      <Router>
        {children}
      </Router>
    </Provider>,
  );
};

describe('<GridItem />', () => {
  test('Renders a single item with the given parameters', () => {
    renderWithRouter(<GridItem
      title="Item"
      url="/item"
      background="red"
      pattern="pattern"
      colors={['#fff', '#000']}

    />);
    expect(screen.getByTitle('Item')).toBeInTheDocument();
  });
  test('Accepts an external attribute to generate <a/> instead of <Link />', () => {
    renderWithRouter(<GridItem
      title="Item2"
      url="/item2"
      background="red"
      pattern="pattern"
      colors={['#fff', '#000']}
      external="https://google.com/"
    />);
    expect(screen.getByTestId('externalLink')).toHaveAttribute('href', 'https://google.com/');
  });
});
