import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LanguageSelect } from './LanguageSelect';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../src/theme';
import i18n from '../../locales/i18n';

// Mock the useDefaultLanguage hook to always return "en"
jest.mock('../../hooks/useDefaultLanguage', () => ({
  useDefaultLanguage: () => 'en',
}));

describe('LanguageSelect', () => {
  beforeEach(() => {
    // Clear localStorage before each test.
    localStorage.clear();
  });

  test('renders with default language and updates on selection', async () => {
    // Spy on i18n.changeLanguage
    const changeLanguageSpy = jest.spyOn(i18n, 'changeLanguage');

    // Spy on localStorage.setItem. We use the prototype so that calls inside the component are caught.
    const localStorageSetItemSpy = jest.spyOn(
      window.localStorage.__proto__,
      'setItem'
    );

    // Render the LanguageSelect component.
    render(
      <ThemeProvider theme={lightTheme}>
        <LanguageSelect />
      </ThemeProvider>
    );

    // Expect the select to initially show "English" (since our mock returns "en")
    expect(screen.getByRole('button')).toHaveTextContent(/en/i);

    // Simulate clicking the button to open the dropdown.
    userEvent.click(screen.getByRole('button'));

    // Now, assume that one of the options is "Español". Wait for it to appear.
    const optionEs = await screen.findByText(/es/i);
    expect(optionEs).toBeInTheDocument();

    // Simulate selecting the "Español" option.
    userEvent.click(optionEs);

    // Wait for localStorage and i18n.changeLanguage to be called.
    await waitFor(() => {
      expect(localStorageSetItemSpy).toHaveBeenCalledWith('language', 'es');
      expect(changeLanguageSpy).toHaveBeenCalledWith('es');
    });

    // Optionally, verify that the button now shows the selected option ("Español").
    expect(screen.getByRole('button')).toHaveTextContent(/es/i);
  });
});
