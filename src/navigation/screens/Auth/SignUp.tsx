import React, { useState } from "react";
import { auth, db } from "../../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { FlexBox } from "../../../ui/Flexbox";
import { FormInput } from "../../../ui/StyledInput";
import { authErrors, SignUpFieldNames, SignUpFields } from "./types";
import { useForm } from "react-hook-form";
import {
  emailRules,
  nameRules,
  signupPasswordRules,
} from "../../../components/form/validations";
import { StyledButton } from "../../../ui/StyledButton";
import { StyledText } from "../../../ui/Text";
import { DASHBOARD } from "../../navigators/types";
import { useTranslation } from "react-i18next";

export const SignUp: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<SignUpFields>({ mode: "onChange" });
  const [authError, setAuthError] = useState<string | null>(null);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onSubmitSignup = async (data: SignUpFields) => {
    const { email, password, displayName } = data;
    try {
      // for Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // for Firestore database
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName });
        await setDoc(doc(db, "users", auth.currentUser.uid), {
          email,
          displayName,
        });
      }
      navigate(`/${DASHBOARD}`);
    } catch (err: any) {
      console.error("Error signing up:", err);
      const emailIsInUse = (err.code = authErrors.emailInUse);
      if (emailIsInUse) {
        setAuthError(t("landing.auth.emailInUse"));
      } else {
        setAuthError(t("landing.auth.signUpError"));
      }
    }
  };

  return (
    <FlexBox justifyContent="center" alignItems="center" flexDirection="column">
      <FlexBox flexDirection="column">
        <FormInput<SignUpFields>
          label={t("landing.auth.nameLabel")}
          id={SignUpFieldNames.displayName}
          control={control}
          placeholder={t("landing.auth.emailPlaceholder")}
          rules={nameRules(t)}
          name={SignUpFieldNames.displayName}
        />
        <FormInput<SignUpFields>
          label={t("landing.auth.emailLabel")}
          id={SignUpFieldNames.email}
          control={control}
          placeholder={t("landing.auth.emailPlaceholder")}
          rules={emailRules(t)}
          name={SignUpFieldNames.email}
        />
        <FormInput<SignUpFields>
          label={t("landing.auth.passwordLabel")}
          id={SignUpFieldNames.password}
          control={control}
          placeholder={t("landing.auth.passwordPlaceholder")}
          rules={signupPasswordRules(t)}
          name={SignUpFieldNames.password}
        />
      </FlexBox>
      <FlexBox flexDirection="column">
        <StyledButton
          variant="primary"
          disabled={!isValid}
          onClick={handleSubmit(onSubmitSignup)}
        >
          SIGNUP
        </StyledButton>
        {authError && (
          <StyledText color="red" style={{ marginTop: "1rem" }}>
            {authError}
          </StyledText>
        )}
      </FlexBox>
    </FlexBox>
  );
};
