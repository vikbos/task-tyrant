import React from 'react';
import styled, { css } from 'styled-components';

export interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  imagePath: string;
  overlayContent?: React.ReactNode;
  overlayPosition?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'center-left'
    | 'center'
    | 'center-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';
}

const BannerContainer = styled.div<{ imagePath: string }>`
  width: 100vw;
  height: 100vh;
  background-image: url(${({ imagePath }) => imagePath});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Overlay = styled.div<{
  $overlayPosition: BannerProps['overlayPosition'];
}>`
  position: absolute;
  ${({ $overlayPosition }) => {
    switch ($overlayPosition) {
      case 'top-left':
        return css`
          top: 0;
          left: 0;
        `;
      case 'top-center':
        return css`
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        `;
      case 'top-right':
        return css`
          top: 0;
          right: 0;
        `;
      case 'center-left':
        return css`
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        `;
      case 'center':
        return css`
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        `;
      case 'center-right':
        return css`
          top: 50%;
          right: 0;
          transform: translateY(-50%);
        `;
      case 'bottom-left':
        return css`
          bottom: 0;
          left: 0;
        `;
      case 'bottom-center':
        return css`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        `;
      case 'bottom-right':
        return css`
          bottom: 0;
          right: 0;
        `;
      default:
        return css`
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        `;
    }
  }}
`;

export const Banner: React.FC<BannerProps> = ({
  imagePath,
  overlayContent,
  overlayPosition = 'center',
  ...rest
}) => {
  return (
    <BannerContainer imagePath={imagePath} {...rest}>
      {overlayContent && (
        <Overlay $overlayPosition={overlayPosition}>{overlayContent}</Overlay>
      )}
    </BannerContainer>
  );
};
