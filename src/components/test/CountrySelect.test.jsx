import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CountrySelect from '../components/CountrySelect'; // Adjust the import path as necessary

describe('CountrySelect', () => {
  test('renders Country Select with options and handles selection', () => {
    const handleChange = jest.fn();

    render(<CountrySelect country="Germany" handleChange={handleChange} />);

    // Open the select dropdown
    const selectButton = screen.getByLabelText(/country/i);
    fireEvent.mouseDown(selectButton);

    // Get all the options
    const options = screen.getAllByRole('option');

    // Check if all countries are rendered
    expect(options).toHaveLength(14); // As many countries as you have in your list

    // Select the "United States" option
    fireEvent.click(options[1]);

    // Check if handleChange was called
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
