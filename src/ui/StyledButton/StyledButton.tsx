import React from 'react';
import styled, { css } from 'styled-components';
import { layout, LayoutProps, space, SpaceProps } from 'styled-system';

export interface StyledButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    SpaceProps,
    LayoutProps {
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
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textOnPrimary};
    border: none;
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    color: ${({ theme }) => theme.colors.textOnPrimary};
    border: none;
  `,
  tertiary: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
  `,
};

const StyledButtonWrapper = styled.button<StyledButtonProps>`
  cursor: pointer;
  padding: ${({ padding, theme }) => padding || theme.space[2]};
  border-radius: ${({ borderRadius, theme }) => borderRadius || theme.radii.md};
  font-size: ${({ fontSize, theme }) => fontSize || theme.fontSizes.md};
  font-weight: ${({ fontWeight, theme }) =>
    fontWeight || theme.fontWeights.normal};
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

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
  ${({ variant }) => variant && variantStyles[variant]}

  ${space}
  ${layout}
`;

export const StyledButton: React.FC<StyledButtonProps> = ({
  children,
  ...props
}) => {
  return <StyledButtonWrapper {...props}>{children}</StyledButtonWrapper>;
};
