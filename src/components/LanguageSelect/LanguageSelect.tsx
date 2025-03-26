import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { DropdownOption, FormSelect } from '../../ui/StyledSelect';
import i18n from '../../locales/i18n';
import { useDefaultLanguage } from '../../hooks/useDefaultLanguage';
import { EN, ES } from '../../locales/types';

const languageOptions: DropdownOption[] = [
  { label: EN, value: EN },
  { label: ES, value: ES },
];

interface LanguageForm {
  language: string;
}

export const LanguageSelect: React.FC = () => {
  const defaultLanguage = useDefaultLanguage(languageOptions);

  const { control, watch } = useForm<LanguageForm>({
    defaultValues: { language: defaultLanguage },
  });

  const selectedLanguage = watch('language');

  useEffect(() => {
    localStorage.setItem('language', selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  return (
    <FormSelect<LanguageForm>
      control={control}
      name="language"
      options={languageOptions}
    />
  );
};
