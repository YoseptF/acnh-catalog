import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Grid from '../../components/Grid';
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

// beforeEach(cleanup);

describe('<Grid />', () => {
  test('Renders the given list of items', () => {
    const items = [
      {
        name: 'Api',
        image: `https://acnhapi.com/v1/icons/fish/${(Math.floor(Math.random() * 79) + 1)}`,
      },
    ];

    renderWithRouter(<Grid items={items} />);
    expect(screen.getByTitle('Api')).toBeInTheDocument();
  });
  test('Accepts items with external links', () => {
    const items = [
      {
        name: 'Game',
        image: 'https://i.imgur.com/2Ac4f9y.png',
        external: 'https://animal-crossing.com/',
      },
    ];

    renderWithRouter(<Grid items={items} external />);
    expect(screen.getByTestId('externalLink')).toHaveAttribute('href', 'https://animal-crossing.com/');
  });
  test('You can assign a pre to the url in the grid items', () => {
    const items = [
      {
        name: 'Villagers',
        image: 'https://acnhapi.com/v1/images/villagers/100',
      },
    ];

    renderWithRouter(<Grid items={items} url="extra" />);
    expect(screen.getByTestId('internalLinkVillagers')).toHaveAttribute('href', '/extra/Villagers');
  });
});
