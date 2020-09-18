import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
} from '@testing-library/react';
import CoffeeBeansCard from '../components/CoffeeBeansCard';

describe('<CoffeeBeansCard />', () => {
  let getByTestId;

  afterEach(cleanup);

  describe('clicking the purchase button', () => {
    beforeEach(() => {
      ({ getByTestId } = render(<CoffeeBeansCard />));

      fireEvent.click(getByTestId('purchaseButton'));
    });

    it('changes the button text to Purchased', () => {
      expect(getByTestId('purchaseButton')).toHaveTextContent('Purchased');
    });
  });
});
