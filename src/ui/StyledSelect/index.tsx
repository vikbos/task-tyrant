import React from 'react';
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { SpaceProps, LayoutProps } from 'styled-system';
import {
  Control,
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import { styled } from 'styled-components';
import { FlexBox } from '../Flexbox';
import { useTranslation } from 'react-i18next';

export interface DropdownOption {
  value: string;
  label: string;
}

export interface SelectProps extends SpaceProps, LayoutProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const StyledOptions = styled(FlexBox)`
  flex-direction: column;
  min-width: 100px;
  margin: 4px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const StyledOption = styled.p`
  margin: 5px;
  cursor: pointer;
`;

export const StyledSelect: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
}) => {
  const { t } = useTranslation();
  const innerPlaceholder = placeholder ? placeholder : t('common.selectOption');
  const selectedOption = options.find((option) => option.value === value);
  const buttonText = selectedOption ? selectedOption.label : innerPlaceholder;

  return (
    <Listbox value={value} onChange={onChange}>
      {/* TODO: do a nicer button with chevron indicator */}
      <ListboxButton>{buttonText}</ListboxButton>
      <ListboxOptions anchor="bottom" transition as={StyledOptions}>
        {options.map((option) => (
          <ListboxOption
            key={option.value}
            value={option.value}
            as={StyledOption}
          >
            {option.label}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
};

export interface FormSelectProps<TFormValues extends FieldValues>
  extends Omit<SelectProps, 'value' | 'onChange'> {
  name: Path<TFormValues>;
  control: Control<TFormValues>;
  rules?: Omit<
    RegisterOptions<TFormValues, Path<TFormValues>>,
    'setValueAs' | 'disabled' | 'valueAsNumber' | 'valueAsDate' | 'deps'
  >;
  defaultValue?: string;
}

export function FormSelect<TFormValues extends FieldValues>({
  control,
  name,
  rules,
  defaultValue = '',
  ...rest
}: FormSelectProps<TFormValues>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue as any}
      render={({ field }) => <StyledSelect {...rest} {...field} />}
    />
  );
}
