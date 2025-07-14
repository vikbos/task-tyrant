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
import { layout, LayoutProps, space, SpaceProps } from 'styled-system';

type InputVariant = 'primary' | 'secondary';

type ConflictingProps = 'height' | 'width' | 'size'; // Add more if needed

export interface StyledInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, ConflictingProps>,
    SpaceProps,
    LayoutProps {
  variant?: InputVariant;
  borderColor?: string;
  borderWidth?: string;
  borderRadius?: string;
  label?: string;
  errorMessage?: string;
  padding?: string;
}

const variantStyles = {
  primary: css`
    border: 1px solid ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
  `,
  secondary: css`
    border: 1px solid ${({ theme }) => theme.colors.borderDark};
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    color: ${({ theme }) => theme.colors.textPrimary};
  `,
};

const StyledInputElement = styled.input<
  StyledInputProps & { hasError?: boolean }
>`
  font-size: ${({ theme }) => theme.fontSizes.md};
  border-radius: ${({ borderRadius, theme }) => borderRadius || theme.radii.md};
  padding: ${({ theme }) => theme.space[2]};
  width: 100%;
  border-color: ${({ borderColor, variant, hasError, theme }) =>
    hasError
      ? theme.colors.error
      : borderColor ||
        (variant === 'secondary'
          ? theme.colors.borderDark
          : theme.colors.border)};
  border-width: ${({ borderWidth }) => borderWidth || '1px'};
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.shadows.sm};
    ${({ hasError, theme }) =>
      hasError ? theme.colors.error : theme.colors.primary};
  }
  ${({ variant }) => variant && variantStyles[variant]};

  ${space}
  ${layout}
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
          <StyledText variant="errorMessage">{errorMessage}</StyledText>
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
