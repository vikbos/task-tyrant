import React from "react";
import { FlexBox } from "../../ui/Flexbox";
import { Link, useNavigate } from "react-router-dom";
import {
  ABOUT,
  LOGIN_PATH,
  STATISTICS,
} from "../../navigation/navigators/types";
import { StyledText } from "../../ui/Text";
import { useAuth } from "../../contexts/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useTranslation } from "react-i18next";
import { LanguageSelect } from "../LanguageSelect";

const linkStyle = {
  padding: "1rem",
  color: "black",
  textDecoration: "none",
  fontSize: "1.5rem",
  fontWeight: 600,
};

const AuthNav: React.FC = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate(LOGIN_PATH);
    } catch (err: any) {
      console.error("Error logging out:", err);
    }
  };

  return (
    <FlexBox alignItems="center" justifyContent="space-between" minHeight={4}>
      <FlexBox>
        <StyledText variant="subtitle" style={linkStyle}>
          Hello, {currentUser?.displayName}
        </StyledText>
      </FlexBox>
      <FlexBox>
        <Link to="/" style={linkStyle}>
          <StyledText variant="title">TaskTyrant™</StyledText>
        </Link>
      </FlexBox>
      <FlexBox>
        <StyledText variant="subtitle" style={linkStyle} onClick={handleLogout}>
          Logout
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
        <Link to={`${ABOUT}`} style={linkStyle}>
          {t("landing.topNav.about")}
        </Link>
        <Link to={`${STATISTICS}`} style={linkStyle}>
          {t("landing.topNav.stats")}
        </Link>
        <StyledText variant="subtitle" style={linkStyle}>
          {t("landing.topNav.language")}
        </StyledText>
        <LanguageSelect />
      </FlexBox>
      <FlexBox>
        <Link to="/" style={linkStyle}>
          <StyledText variant="title">TaskTyrant™</StyledText>
        </Link>
      </FlexBox>
      <FlexBox>
        <Link to={LOGIN_PATH} style={linkStyle}>
          {t("landing.topNav.login")}
        </Link>
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
