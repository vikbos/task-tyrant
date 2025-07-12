import React from 'react';
import styled from 'styled-components';
import { space, layout, SpaceProps, LayoutProps } from 'styled-system';

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
}

const StyledFlexBox = styled.div<FlexBoxProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'initial'};
  align-items: ${({ alignItems }) => alignItems || 'initial'};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'nowrap'};
  gap: ${({ gap }) => gap || '0'};
  align-content: ${({ alignContent }) => alignContent || 'initial'};

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
