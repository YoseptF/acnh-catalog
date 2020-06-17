import { render, screen } from '@testing-library/react';
import React from 'react';
import Attributes from '../../components/Item/Attributes';
import '@testing-library/jest-dom/extend-expect';

// beforeAll(cleanup);

describe('<Attribute />', () => {
  describe('Creates an attribute combo with the given information', () => {
    test('From the object key generates a title <li />', () => {
      const currentData = {
        personality: 'Cranky',
      };
      render(<Attributes currentData={currentData} language="USen" />);
      expect(screen.getByText('personality')).toHaveClass('title');
    });
    describe('From the value', () => {
      test('gets the correct name based on the language', () => {
        const currentData = {
          name: {
            'name-USen': 'Joseph',
            'name-MXes': 'Jose',
          },
        };
        render(<Attributes currentData={currentData} language="USen" />);
        expect(screen.getByText('Joseph')).toHaveClass('value');
      });
      test('Creates a normal <li /> for short text', () => {
        const currentData = {
          personality: 'Cranky',
        };
        render(<Attributes currentData={currentData} language="USen" />);
        expect(screen.getByText('Cranky')).toHaveClass('value');
      });
      test('Creates a long <li /> for long text', () => {
        const longText = 'this is a long text because it has more than 15 characters';
        const currentData = { longText };
        render(<Attributes currentData={currentData} language="USen" />);
        expect(screen.getByText(longText)).toHaveClass('long');
      });
      test('Creates an <li /> without spliting the value for numeric data', () => {
        const currentData = {
          price: 100,
        };
        render(<Attributes currentData={currentData} language="USen" />);
        expect(screen.getByText('100')).toHaveClass('value');
      });
      describe('ignores', () => {
        test('file-name', () => {
          const currentData = {
            'file-name': 'something',
          };
          render(<Attributes currentData={currentData} language="USen" />);
          expect(screen.queryByText('something')).toBeNull();
        });
        test('alt-catch-phrase', () => {
          const currentData = {
            'alt-catch-phrase': 'something',
          };
          render(<Attributes currentData={currentData} language="USen" />);
          expect(screen.queryByText('something')).toBeNull();
        });
        test('id', () => {
          const currentData = {
            id: 'something',
          };
          render(<Attributes currentData={currentData} language="USen" />);
          expect(screen.queryByText('something')).toBeNull();
        });
      });
    });
  });
});
