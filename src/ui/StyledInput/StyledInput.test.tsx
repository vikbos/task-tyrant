import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { FormInput, StyledInput } from './StyledInput';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../theme';
import { FormProvider, useForm } from 'react-hook-form';

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

    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Invalid email')).toBeInTheDocument();
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

describe('FormInput Component', () => {
  it('renders and integrates with react-hook-form', () => {
    const Wrapper = () => {
      const methods = useForm({ defaultValues: { email: '' } });
      return (
        <FormProvider {...methods}>
          <FormInput
            control={methods.control}
            name="email"
            label="Email"
            placeholder="Enter your email"
          />
        </FormProvider>
      );
    };
    render(
      <ThemeProvider theme={lightTheme}>
        <Wrapper />
      </ThemeProvider>
    );
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
  });

  it('shows error message from react-hook-form', async () => {
    const Wrapper = () => {
      const methods = useForm({
        defaultValues: { email: '' },
        mode: 'onSubmit',
      });
      return (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(() => {})}>
            <FormInput
              control={methods.control}
              name="email"
              label="Email"
              placeholder="Enter your email"
              rules={{ required: 'Email is required' }}
            />
            <button type="submit">Submit</button>
          </form>
        </FormProvider>
      );
    };
    render(
      <ThemeProvider theme={lightTheme}>
        <Wrapper />
      </ThemeProvider>
    );
    fireEvent.click(screen.getByText('Submit'));
    expect(await screen.findByText('Email is required')).toBeInTheDocument();
  });
});
