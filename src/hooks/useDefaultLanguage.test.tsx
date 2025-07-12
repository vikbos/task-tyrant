import { renderHook } from '@testing-library/react';
import { useDefaultLanguage } from './useDefaultLanguage';
import { DropdownOption } from '../ui/StyledSelect/StyledSelect';

describe('useDefaultLanguage', () => {
  const languageOptions: DropdownOption[] = [
    { label: 'en', value: 'en' },
    { label: 'es', value: 'es' },
  ];

  test('returns cached language if valid', () => {
    localStorage.setItem('language', 'es');
    const { result } = renderHook(() => useDefaultLanguage(languageOptions));
    expect(result.current).toBe('es');
  });

  test('returns system language if cached is invalid', () => {
    localStorage.removeItem('language');
    // Suppose the browser language is "en-US"; our hook should return "en"
    Object.defineProperty(navigator, 'language', {
      value: 'en-US',
      configurable: true,
    });
    const { result } = renderHook(() => useDefaultLanguage(languageOptions));
    expect(result.current).toBe('en');
  });
});
