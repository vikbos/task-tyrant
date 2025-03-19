import React from 'react';
import { FlexBox } from '../../../../ui/Flexbox';
import { StyledText } from '../../../../ui/Text';
import { StyledButton } from '../../../../ui/StyledButton';

export type BannerCardProps = {
  title: string;
  subtitle: string;
  buttonText: string;
  onCTAClick: () => void;
};

const containerStyle = {
  maxWidth: '500px',
  backgroundColor: 'white',
  margin: '40px',
  borderRadius: 20,
  padding: '30px 20px',
};

const textStyle = { marginBottom: '20px' };

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
      style={containerStyle}
    >
      <StyledText textAlign="center" variant="title" style={textStyle}>
        {title}
      </StyledText>
      <StyledText textAlign="center" variant="subtitle" style={textStyle}>
        {subtitle}
      </StyledText>
      <StyledButton variant="primary" onClick={onCTAClick}>
        {buttonText}
      </StyledButton>
    </FlexBox>
  );
};
