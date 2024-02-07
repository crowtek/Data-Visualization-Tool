import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CustomerNameInput from '../components/CustomerNameInput'; // Adjust the import path as necessary

describe('CustomerNameInput', () => {
  test('renders Customer Name Input component and calls handleChange on input', () => {
    // Mock the handleChange function
    const handleChange = jest.fn();

    // Render the CustomerNameInput component with props
    render(<CustomerNameInput kunde="" handleChange={handleChange} />);

    // Get the input element by its label
    const inputElement = screen.getByLabelText(/costumer/i);

    // Check that the input element is rendered
    expect(inputElement).toBeInTheDocument();

    // Simulate a user typing into the input
    fireEvent.change(inputElement, { target: { value: 'John Doe' } });

    // Check that handleChange has been called
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
