import {
  render, screen, fireEvent, waitFor, cleanup,
} from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import App from '../../components/App';
import '../globals';

afterAll(() => {
  global.console.error.mockRestore();
});

describe('When the app starts', () => {
  test('the user sees 6 categories', () => {
    render(<App />);
    const categories = screen.getAllByTestId('category');

    expect(categories).toHaveLength(6);
  });
  test('after clicking a category the user sees a list of the avaliable items', async () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('internalLinkVillagers'));
    await waitFor(() => {
      const categories = screen.getAllByTestId('category');
      expect(categories).toHaveLength(2);
    });
  });
  test('after clicking a category see all elements in the category', () => {
    render(<App />);
    const categoriesBefore = screen.getAllByTestId('category');
    expect(categoriesBefore).toHaveLength(2);
  });
  test('the user can filter elements', async () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('search'), { target: { value: 'ben' } });
    await waitFor(() => {
      const categoriesAfter = screen.getAllByTestId('category');
      expect(categoriesAfter).toHaveLength(1);
    });
  });
  test('After clicking on one of the avaliable items the user can see the clicked item', async () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('internalLinkBenjamin'));
    await waitFor(() => {
      expect(screen.getByTestId('title-Benjamin')).toBeInTheDocument();
    });
  });
});
