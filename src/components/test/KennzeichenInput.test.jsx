import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import KennzeichenInput from "../components/KennzeichenInput";

describe('KennzeichenInput', () => {
  test('renders Kennzeichen Input component', () => {
    // Mock handleChange function
    const handleChange = jest.fn();

    // Render KennzeichenInput with mock props
    render(<KennzeichenInput kennzeichen="" handleChange={handleChange} />);

    // Check if the kennzeichen input is rendered
    const inputElement = screen.getByLabelText(/Kennzeichen/i);
    expect(inputElement).toBeInTheDocument();

    // Simulate user typing into the input
    fireEvent.change(inputElement, { target: { value: 'HH 123' } });

    // Check if handleChange was called on change of input
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});

