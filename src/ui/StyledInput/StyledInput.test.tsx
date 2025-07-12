import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { StyledInput } from './StyledInput';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../theme';

describe('StyledInput Component', () => {
  test('renders label, placeholder and error message', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <StyledInput
          label="Email"
          placeholder="Enter your email"
          errorMessage="Invalid email"
        />
      </ThemeProvider>
    );
    // Check if the label is rendered
    expect(screen.getByText('Email')).toBeInTheDocument();
    // Check if the error message is rendered
    expect(screen.getByText('Invalid email')).toBeInTheDocument();
    // Check if the input is rendered with the correct placeholder
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
  });

  test('calls onChange when user types', () => {
    const handleChange = jest.fn();
    render(
      <ThemeProvider theme={lightTheme}>
        <StyledInput placeholder="Enter your email" onChange={handleChange} />
      </ThemeProvider>
    );
    const input = screen.getByPlaceholderText('Enter your email');
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    expect(handleChange).toHaveBeenCalled();
  });
});
