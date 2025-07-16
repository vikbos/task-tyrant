import React from 'react';
import { render, screen } from '@testing-library/react';
import { StyledText } from './StyledText';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../theme';

describe('StyledText', () => {
  it('renders children', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <StyledText>Test Text</StyledText>
      </ThemeProvider>
    );
    expect(screen.getByText('Test Text')).toBeInTheDocument();
  });

  it('applies variant styles', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <StyledText variant="errorMessage">Error!</StyledText>
      </ThemeProvider>
    );
    expect(screen.getByText('Error!')).toBeInTheDocument();
  });

  it('applies custom color', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <StyledText color="red">Colored Text</StyledText>
      </ThemeProvider>
    );
    expect(screen.getByText('Colored Text')).toBeInTheDocument();
  });

  it('applies fontSize and fontWeight', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <StyledText fontSize="xl" fontWeight="thick">
          Big Bold Text
        </StyledText>
      </ThemeProvider>
    );
    expect(screen.getByText('Big Bold Text')).toBeInTheDocument();
  });
});
