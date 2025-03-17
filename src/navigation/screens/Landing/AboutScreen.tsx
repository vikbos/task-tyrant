import React from "react";
import { FlexBox } from "../../../ui/Flexbox";
import { StyledText } from "../../../ui/Text";
import { useTranslation } from "react-i18next";
import { featureList } from "./mockData";

const MAX_WIDTH = "75%";

export const AboutScreen: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FlexBox justifyContent="center" mt={5}>
      <FlexBox flexDirection="column" maxWidth={MAX_WIDTH}>
        <FlexBox flexDirection="column" mt={4}>
          <StyledText variant="title">{t("landing.about.aboutUs")}</StyledText>
          <StyledText variant="subtitle">
            {t("landing.about.description")}
          </StyledText>
        </FlexBox>
        <FlexBox flexDirection="column" mt={4}>
          <StyledText variant="title">{t("landing.about.features")}</StyledText>
          {featureList.map((item) => (
            <FlexBox>
              <StyledText variant="subtitle" style={{ color: "limegreen" }}>
                {t(item.feature)} -&nbsp;
              </StyledText>
              <StyledText variant="subtitle">{t(item.description)}</StyledText>
            </FlexBox>
          ))}
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};
