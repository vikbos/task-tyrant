import React, { useState, FormEvent } from "react";
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FlexBox } from "../../../ui/Flexbox";
import { useForm } from "react-hook-form";
import { FormInput, StyledInput } from "../../../ui/StyledInput";
import { authErrors, LoginFieldNames, LoginFields } from "./types";
import { StyledButton } from "../../../ui/StyledButton";
import { emailRules } from "../../../components/form/validations";
import { StyledText } from "../../../ui/Text";
import { AUTH, DASHBOARD, SIGNUP } from "../../navigators/types";
import { useTranslation } from "react-i18next";

export const Login: React.FC = () => {
  const { control, handleSubmit } = useForm<LoginFields>({ mode: "onBlur" });
  const [authError, setAuthError] = useState<string | null>(null);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFields) => {
    const { email, password } = data;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate(`/${DASHBOARD}`);
    } catch (err: any) {
      console.error("Error logging in:", err);
      const wrongCredentials = (err.code = authErrors.invalidCredentials);
      if (wrongCredentials) {
        setAuthError(t("landing.auth.loginError"));
      }
    }
  };

  const navSignup = () => navigate(`/${AUTH}/${SIGNUP}`);

  return (
    <FlexBox justifyContent="center" alignItems="center" flexDirection="column">
      <FlexBox flexDirection="column">
        <FormInput<LoginFields>
          label={t("landing.auth.emailLabel")}
          id={LoginFieldNames.email}
          control={control}
          placeholder={t("landing.auth.emailPlaceholder")}
          rules={emailRules(t)}
          name={LoginFieldNames.email}
        />
        <FormInput<LoginFields>
          label={t("landing.auth.passwordLabel")}
          id={LoginFieldNames.password}
          control={control}
          placeholder={t("landing.auth.passwordPlaceholder")}
          type="password"
          name={LoginFieldNames.password}
        />
      </FlexBox>
      <FlexBox flexDirection="column">
        <StyledButton variant="primary" onClick={handleSubmit(onSubmit)}>
          {t("landing.auth.login")}
        </StyledButton>
        {authError && (
          <StyledText color="red" style={{ marginTop: "1rem" }}>
            {authError}
          </StyledText>
        )}
      </FlexBox>
      <FlexBox>
        <StyledText>
          {t("landing.auth.noAcc")}&nbsp;
          <StyledText variant="link" onClick={navSignup}>
            {t("landing.auth.signUp")}
          </StyledText>
        </StyledText>
      </FlexBox>
    </FlexBox>
  );
};
