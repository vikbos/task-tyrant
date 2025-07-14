import React from 'react';
import styled, { css } from 'styled-components';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import { layout, space, SpaceProps, LayoutProps } from 'styled-system';

type StyledLinkProps = RouterLinkProps &
  SpaceProps &
  LayoutProps & {
    onClick?: () => void;
  };

const StyledLinkWrapper = styled(RouterLink)<StyledLinkProps>`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.thick};
  text-decoration: none;
  cursor: pointer;

  ${space}
  ${layout}
`;

export const StyledLink: React.FC<StyledLinkProps> = ({
  children,
  ...props
}) => {
  return <StyledLinkWrapper {...props}>{children}</StyledLinkWrapper>;
};
