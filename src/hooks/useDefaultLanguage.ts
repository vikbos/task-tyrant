import { useMemo } from 'react';
import { DropdownOption } from '../ui/StyledSelect';
import { EN } from '../locales/types';

export function useDefaultLanguage(options: DropdownOption[]): string {
  return useMemo(() => {
    const cachedLanguage = localStorage.getItem('language');
    const systemLanguage = navigator.language.split('-')[0];

    if (
      cachedLanguage &&
      options.some((option) => option.value === cachedLanguage)
    ) {
      return cachedLanguage;
    } else if (options.some((option) => option.value === systemLanguage)) {
      return systemLanguage;
    } else {
      return EN;
    }
  }, [options]);
}
