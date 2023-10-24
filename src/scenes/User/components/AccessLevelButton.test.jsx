import React from 'react';
import { render,fireEvent  } from '@testing-library/react';
import AccessLevelButton from './AccessLevelButton';
import '@testing-library/jest-dom'

describe('AccessLevelButton', ()=> {
    it('it renders without crashing', () => {
        const {container} = render(<AccessLevelButton id="1" access="admin"/>)

        expect(container).toBeInTheDocument();
    }),

    it('calls changeAccessLevel function when clicked', () => {
        const mockChangeAccessLevel = jest.fn();
        const { getByRole } = render(
          <AccessLevelButton id="1" access="admin" changeAccessLevel={mockChangeAccessLevel} />
        );
    
        const button = getByRole('button');

        fireEvent.click(button);
    
        // Assert that the mock function has been called once
        expect(mockChangeAccessLevel).toHaveBeenCalledTimes(1);
    });
})
