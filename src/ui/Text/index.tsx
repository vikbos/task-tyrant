import React from "react";
import styled, { css } from "styled-components";

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Defines the text style variant.
   * Default is "body".
   */
  variant?: "body" | "title" | "subtitle" | "caption" | "link";

  /** Custom text color */
  color?: string;
  /** Custom font size */
  fontSize?: string;
  /** Custom font weight */
  fontWeight?: string;
  /** Custom line height */
  lineHeight?: string;
  /** Custom text alignment */
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
  color: ${({ color }) => color || "inherit"};
  font-size: ${({ fontSize, variant }) =>
    fontSize || (variant && variantStyles[variant] ? undefined : "1rem")};
  font-weight: ${({ fontWeight, variant }) =>
    fontWeight || (variant && variantStyles[variant] ? undefined : "normal")};
  line-height: ${({ lineHeight }) => lineHeight || "normal"};
  text-align: ${({ textAlign }) => textAlign || "inherit"};
  ${({ variant }) => variant && variantStyles[variant]};
`;

export const StyledText: React.FC<TextProps> = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
};
