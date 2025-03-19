import React from 'react';
import styled, { css } from 'styled-components';

export interface StyledButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';

  color?: string;
  backgroundColor?: string;
  padding?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: string;
}

const variantStyles = {
  primary: css`
    background-color: #007bff;
    color: #ffffff;
    border: none;
  `,
  secondary: css`
    background-color: #6c757d;
    color: #ffffff;
    border: none;
  `,
  tertiary: css`
    background-color: transparent;
    color: #007bff;
    border: 1px solid #007bff;
  `,
};

const StyledButtonWrapper = styled.button<StyledButtonProps>`
  cursor: pointer;
  padding: ${({ padding }) => padding || '0.5rem 1rem'};
  border-radius: ${({ borderRadius }) => borderRadius || '4px'};
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  ${({ variant, backgroundColor, color }) =>
    variant
      ? variantStyles[variant]
      : css`
          background-color: ${backgroundColor || 'gray'};
          color: ${color || 'white'};
          border: none;
        `}

  &:hover {
    opacity: 0.85;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    `}
`;

export const StyledButton: React.FC<StyledButtonProps> = ({
  children,
  ...props
}) => {
  return <StyledButtonWrapper {...props}>{children}</StyledButtonWrapper>;
};
