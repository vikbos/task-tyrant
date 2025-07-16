import React from 'react';
import { FlexBox } from '../../../../ui/FlexBox/FlexBox';
import { StyledText } from '../../../../ui/Styledtext/StyledText';
import { StyledButton } from '../../../../ui/StyledButton/StyledButton';

export type BannerCardProps = {
  title: string;
  subtitle: string;
  buttonText: string;
  onCTAClick: () => void;
};

export const BannerCard: React.FC<BannerCardProps> = ({
  title,
  subtitle,
  onCTAClick,
  buttonText,
}) => {
  return (
    <FlexBox
      flexDirection="column"
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      maxWidth="500px"
      borderRadius="lg"
      margin="40px"
      padding="30px 20px"
    >
      <StyledText textAlign="center" variant="title" mb={4}>
        {title}
      </StyledText>
      <StyledText textAlign="center" variant="subtitle" mb={4}>
        {subtitle}
      </StyledText>
      <StyledButton variant="primary" onClick={onCTAClick}>
        {buttonText}
      </StyledButton>
    </FlexBox>
  );
};
