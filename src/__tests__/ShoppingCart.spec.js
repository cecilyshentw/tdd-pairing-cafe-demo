import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
} from '@testing-library/react';
import ShoppingCart from '../components/ShoppingCart';

describe('<ShoppingCart />', () => {
    let getByTestId;
    let clearHandler;
    afterEach(cleanup);

    describe('clicking the clear button', () => {
        beforeEach(() => {
            clearHandler=jest.fn();
            ({ getByTestId } = render(<ShoppingCart onClear={clearHandler}/>));

            fireEvent.click(getByTestId('clearButton'));
        });

        it('calls the clearHandler', () => {
            expect(clearHandler).toHaveBeenCalled();
        });
    });
});
