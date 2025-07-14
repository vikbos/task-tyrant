import React from 'react';
import styled, { css } from 'styled-components';
import { layout, LayoutProps, space, SpaceProps } from 'styled-system';

type FontSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type Variant =
  | 'body'
  | 'title'
  | 'subtitle'
  | 'label'
  | 'link'
  | 'errorMessage';
type FontWeight = 'slim' | 'normal' | 'thick';

export interface TextProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    SpaceProps,
    LayoutProps {
  variant?: Variant;
  color?: string;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  lineHeight?: string;
  textAlign?: React.CSSProperties['textAlign'];
}

const variantStyles = {
  title: css`
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    font-weight: ${({ theme }) => theme.fontWeights.thick};
  `,
  subtitle: css`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.thick};
  `,
  label: css`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
  `,
  body: css`
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
  `,
  link: css`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    color: ${({ theme }) => theme.colors.textLink};
    text-decoration: underline;
    cursor: pointer;
  `,
  errorMessage: css`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    color: ${({ theme }) => theme.colors.error};
  `,
};

export const Text = styled.span<TextProps>`
  color: ${({ color, theme }) => color || theme.colors.textPrimary};
  font-size: ${({ fontSize, theme, variant }) => {
    if (fontSize) return theme.fontSizes[fontSize];
    if (variant && variantStyles[variant]) return undefined;
    return theme.fontSizes.md;
  }};
  font-weight: ${({ fontWeight, theme, variant }) => {
    if (fontWeight) return theme.fontWeights[fontWeight];
    if (variant && variantStyles[variant]) return undefined;
    return theme.fontSizes.md;
  }};
  line-height: ${({ lineHeight }) => lineHeight || 'normal'};
  text-align: ${({ textAlign }) => textAlign || 'inherit'};
  ${({ variant }) => variant && variantStyles[variant]};

  ${space}
  ${layout}
`;

export const StyledText: React.FC<TextProps> = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
};
