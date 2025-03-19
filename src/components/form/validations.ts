import { RegisterOptions } from 'react-hook-form';
import { TranslateFN } from '../../locales/types';
import { EMAIL_REGEXP, NAME_REGEXP } from './regexes';

export const signupPasswordRules = (t: TranslateFN): RegisterOptions => {
  return {
    required: t('validations.fieldRequired'),
    minLength: {
      value: 8,
      message: t('validations.passwordMinLength'),
    },
    maxLength: {
      value: 30,
      message: t('validations.passwordMaxLength'),
    },
    validate: {
      allowedSpecials: (value: string) => {
        if (/[^\w.!@#&/]/.test(value)) {
          return t('validations.allowedSpecials');
        }
        return true;
      },
      hasAllowedSpecial: (value: string) => {
        if (!/[.!@#&/]/.test(value)) {
          return t('validations.requiredSpecial');
        }
        return true;
      },
      hasNumber: (value: string) => {
        if (!/\d/.test(value)) {
          return t('validations.requiredNumber');
        }
        return true;
      },
      hasUppercase: (value: string) => {
        if (!/[A-Z]/.test(value)) {
          return t('validations.requiredUppercase');
        }
        return true;
      },
    },
  };
};

export const emailRules = (t: TranslateFN): RegisterOptions => {
  return {
    required: t('validations.fieldRequired'),
    pattern: {
      value: EMAIL_REGEXP,
      message: t('validations.emailPattern'),
    },
  };
};

export const nameRules = (t: TranslateFN): RegisterOptions => {
  return {
    required: t('validations.fieldRequired'),
    pattern: {
      value: NAME_REGEXP,
      message: t('validations.namePattern'),
    },
  };
};
