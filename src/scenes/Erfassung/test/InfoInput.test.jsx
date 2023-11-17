import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import InfoInput from '../components/InfoInput';

describe('InfoInput', () => {
  test('renders Info Input component and handles changes', () => {
    // Mock handleChange function
    const handleChange = jest.fn();

    // Render InfoInput with mock props
    render(<InfoInput info="" handleChange={handleChange} />);

    // Check if the info input is rendered
    const inputElement = screen.getByLabelText(/info/i);
    expect(inputElement).toBeInTheDocument();

    // Simulate user typing into the input
    fireEvent.change(inputElement, { target: { value: 'New Information' } });

    // Check if handleChange was called on change of input
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});