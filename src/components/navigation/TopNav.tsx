import React from 'react';
import { FlexBox } from '../../ui/FlexBox/FlexBox';
import { useNavigate } from 'react-router-dom';
import {
  ABOUT,
  LOGIN_PATH,
  STATISTICS,
} from '../../navigation/navigators/types';
import { StyledText } from '../../ui/Styledtext/StyledText';
import { useAuth } from '../../contexts/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useTranslation } from 'react-i18next';
import { LanguageSelect } from '../LanguageSelect/LanguageSelect';
import { StyledLink } from '../../ui/StyledTopNavLink/StyledTopNavLink';

const AuthNav: React.FC = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate(LOGIN_PATH);
    } catch (err: any) {
      console.error('Error logging out:', err);
    }
  };

  return (
    <FlexBox alignItems="center" justifyContent="space-between" minHeight={4}>
      <FlexBox>
        <StyledText variant="subtitle" p={3}>
          Hello, {currentUser?.displayName}
        </StyledText>
      </FlexBox>
      <FlexBox>
        <StyledLink to="/">
          <StyledText variant="title">TaskTyrant™</StyledText>
        </StyledLink>
      </FlexBox>
      <FlexBox>
        <StyledText variant="subtitle" p={3} onClick={handleLogout}>
          {t('topNav.logout')}
        </StyledText>
      </FlexBox>
    </FlexBox>
  );
};

const LandingNav: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FlexBox alignItems="center" justifyContent="space-between" minHeight={4}>
      <FlexBox>
        <StyledLink to={`${ABOUT}`} p={3}>
          {t('topNav.about')}
        </StyledLink>
        <StyledLink to={`${STATISTICS}`} p={3}>
          {t('topNav.stats')}
        </StyledLink>
        <StyledText variant="subtitle" p={3}>
          {t('topNav.language')}
        </StyledText>
        <LanguageSelect />
      </FlexBox>
      <FlexBox>
        <StyledLink to="/" p={3}>
          <StyledText variant="title">TaskTyrant™</StyledText>
        </StyledLink>
      </FlexBox>
      <FlexBox>
        <StyledLink to={LOGIN_PATH} p={3}>
          {t('topNav.login')}
        </StyledLink>
      </FlexBox>
    </FlexBox>
  );
};

export const TopNav: React.FC = () => {
  const { currentUser } = useAuth();

  if (currentUser) {
    return <AuthNav />;
  } else {
    return <LandingNav />;
  }
};
