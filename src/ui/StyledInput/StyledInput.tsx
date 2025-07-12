import React, { forwardRef, InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { FlexBox } from '../FlexBox/FlexBox';
import { StyledText } from '../Styledtext/StyledText';
import {
  Controller,
  Control,
  Path,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';

type InputVariant = 'primary' | 'secondary';

export interface StyledInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariant;
  borderColor?: string;
  borderWidth?: string;
  borderRadius?: string;
  padding?: string;
  label?: string;
  errorMessage?: string;
}

const variantStyles = {
  primary: css`
    border: 1px solid #007bff;
    background-color: #fff;
    color: #333;
  `,
  secondary: css`
    border: 1px solid #6c757d;
    background-color: #f8f9fa;
    color: #333;
  `,
};

const StyledInputElement = styled.input<
  StyledInputProps & { hasError?: boolean }
>`
  font-size: 1rem;
  padding: ${({ padding }) => padding || '0.5rem 0.75rem'};
  border-radius: ${({ borderRadius }) => borderRadius || '4px'};
  width: 100%;

  ${({ variant }) => variant && variantStyles[variant || 'primary']};

  border-color: ${({ borderColor, variant, hasError }) =>
    hasError
      ? '#dc3545'
      : borderColor || (variant === 'secondary' ? '#6c757d' : '#007bff')};
  border-width: ${({ borderWidth }) => borderWidth || '1px'};

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem
      ${({ hasError }) =>
        hasError ? 'rgba(220, 53, 69, 0.25)' : 'rgba(0, 123, 255, 0.25)'};
  }
`;

export const StyledInput = forwardRef<HTMLInputElement, StyledInputProps>(
  (
    {
      variant = 'primary',
      borderColor,
      borderWidth,
      borderRadius,
      padding,
      label,
      errorMessage,
      ...rest
    },
    ref
  ) => {
    const hasError = !!errorMessage;

    return (
      <FlexBox flexDirection="column">
        {label && <StyledText variant="body">{label}</StyledText>}
        <StyledInputElement
          ref={ref}
          variant={variant}
          borderColor={borderColor}
          borderWidth={borderWidth}
          borderRadius={borderRadius}
          padding={padding}
          hasError={hasError}
          {...rest}
        />
        {errorMessage && (
          <StyledText variant="body" color="red">
            {errorMessage}
          </StyledText>
        )}
      </FlexBox>
    );
  }
);

export interface FormInputProps<TFormValues extends FieldValues>
  extends Omit<
    StyledInputProps,
    'value' | 'onChange' | 'onBlur' | 'ref' | 'errorMessage'
  > {
  name: Path<TFormValues>;
  control: Control<TFormValues>;
  rules?: Omit<
    RegisterOptions<TFormValues, Path<TFormValues>>,
    'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'deps'
  >;
  defaultValue?: string;
}

export function FormInput<TFormValues extends FieldValues>({
  control,
  name,
  rules,
  defaultValue = '',
  label,
  ...rest
}: FormInputProps<TFormValues>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue as any}
      render={({ field, fieldState }) => (
        <StyledInput
          {...field}
          label={label}
          errorMessage={fieldState.error?.message}
          {...rest}
        />
      )}
    />
  );
}
