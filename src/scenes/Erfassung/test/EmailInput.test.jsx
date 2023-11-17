import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import EmailInput from "../components/EmailInput";

describe('EmailInput', () => {
  test('renders Email Input component', () => {
    // Mock handleChange function
    const handleChange = jest.fn();

    // Render EmailInput with mock props
    render(<EmailInput email="" handleChange={handleChange} />);

    // Check if the email input is rendered
    const inputElement = screen.getByLabelText(/email address/i);
    expect(inputElement).toBeInTheDocument();

    // Simulate user typing into the input
    fireEvent.change(inputElement, { target: { value: 'test@example.com' } });

    // Check if handleChange was called on change of input
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});

