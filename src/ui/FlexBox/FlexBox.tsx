import React from 'react';
import styled from 'styled-components';
import { space, layout, SpaceProps, LayoutProps, Theme } from 'styled-system';

type BackgroundKey =
  | 'background'
  | 'backgroundSecondary'
  | 'backgroundElevated';

type RadiiKey = 'none' | 'sm' | 'md' | 'lg' | 'pill';

interface FlexBoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    SpaceProps,
    LayoutProps {
  flexDirection?: React.CSSProperties['flexDirection'];
  justifyContent?: React.CSSProperties['justifyContent'];
  alignItems?: React.CSSProperties['alignItems'];
  flexWrap?: React.CSSProperties['flexWrap'];
  gap?: React.CSSProperties['gap'];
  alignContent?: React.CSSProperties['alignContent'];
  backgroundColor?: BackgroundKey;
  borderRadius?: RadiiKey;
}

const StyledFlexBox = styled.div<FlexBoxProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'initial'};
  align-items: ${({ alignItems }) => alignItems || 'initial'};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'nowrap'};
  gap: ${({ gap }) => gap || '0'};
  align-content: ${({ alignContent }) => alignContent || 'initial'};
  background-color: ${({ backgroundColor, theme }) => {
    if (backgroundColor) {
      return theme.colors[backgroundColor];
    }
    return theme.colors.background;
  }};
  border-radius: ${({ theme, borderRadius }) => {
    if (borderRadius) {
      return theme.radii[borderRadius];
    }
    return theme.radii.none;
  }};

  ${space}
  ${layout}
`;

export const FlexBox = React.forwardRef<HTMLDivElement, FlexBoxProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledFlexBox ref={ref} {...props}>
        {children}
      </StyledFlexBox>
    );
  }
);
