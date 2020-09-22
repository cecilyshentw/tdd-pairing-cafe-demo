import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
} from '@testing-library/react';
import CoffeeBeansCard from '../components/CoffeeBeansCard';

describe('<CoffeeBeansCard />', () => {
    let getByTestId;
    let addHandler;
    afterEach(cleanup);

    describe('clicking the add button', () => {
        beforeEach(() => {
            addHandler=jest.fn();
            ({ getByTestId } = render(<CoffeeBeansCard onAdd={addHandler}/>));

            fireEvent.click(getByTestId('addButton'));
        });

        it('calls the addHandler', () => {
            expect(addHandler).toHaveBeenCalled();
        });
    });
});
