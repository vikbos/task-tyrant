import React from 'react';
import styled, { css } from 'styled-components';
import { layout, LayoutProps, space, SpaceProps } from 'styled-system';

interface TextProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    SpaceProps,
    LayoutProps {
  variant?: 'body' | 'title' | 'subtitle' | 'caption' | 'link';
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  textAlign?: string;
}

const variantStyles = {
  title: css`
    font-size: 2rem;
    font-weight: bold;
  `,
  subtitle: css`
    font-size: 1.5rem;
    font-weight: bold;
  `,
  caption: css`
    font-size: 0.75rem;
    font-weight: normal;
  `,
  body: css`
    font-size: 1rem;
    font-weight: normal;
  `,
  link: css`
    font-size: 1rem;
    font-weight: normal;
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  `,
};

export const Text = styled.span<TextProps>`
  color: ${({ color }) => color || 'inherit'};
  font-size: ${({ fontSize, variant }) =>
    fontSize || (variant && variantStyles[variant] ? undefined : '1rem')};
  font-weight: ${({ fontWeight, variant }) =>
    fontWeight || (variant && variantStyles[variant] ? undefined : 'normal')};
  line-height: ${({ lineHeight }) => lineHeight || 'normal'};
  text-align: ${({ textAlign }) => textAlign || 'inherit'};
  ${({ variant }) => variant && variantStyles[variant]};

  ${space}
  ${layout}
`;

export const StyledText: React.FC<TextProps> = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
};
