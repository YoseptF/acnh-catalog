import { render, screen } from '@testing-library/react';
import React from 'react';
import Title from '../../components/presentationals/Title';
import '@testing-library/jest-dom/extend-expect';

describe('<Title />', () => {
  test('Recieves an image link and an item to create the title component', () => {
    render(<Title image="https://via.placeholder.com/100" item="placeholder" />);

    expect(screen.getByText('placeholder')).toBeInTheDocument();
  });
});
