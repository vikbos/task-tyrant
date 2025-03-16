import React from "react";
import { FlexBox } from "../../../ui/Flexbox";
import { StyledText } from "../../../ui/Text";
import { useTranslation } from "react-i18next";
import { TranslateKey } from "../../../locales/types";

type ListItemProps = {
  feature: TranslateKey;
  description: TranslateKey;
};

const featureList: ListItemProps[] = [
  {
    feature: "landing.about.featureName1",
    description: "landing.about.featureDescription1",
  },
  {
    feature: "landing.about.featureName2",
    description: "landing.about.featureDescription2",
  },
  {
    feature: "landing.about.featureName3",
    description: "landing.about.featureDescription3",
  },
  {
    feature: "landing.about.featureName4",
    description: "landing.about.featureDescription4",
  },
  {
    feature: "landing.about.featureName5",
    description: "landing.about.featureDescription5",
  },
  {
    feature: "landing.about.featureName6",
    description: "landing.about.featureDescription6",
  },
];

const sectionStyle = { marginTop: "30px" };

export const AboutScreen: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FlexBox justifyContent="center" style={{ marginTop: "50px" }}>
      <FlexBox flexDirection="column" style={{ maxWidth: "75%" }}>
        <FlexBox flexDirection="column" style={sectionStyle}>
          <StyledText variant="title">{t("landing.about.aboutUs")}</StyledText>
          <StyledText variant="subtitle">
            {t("landing.about.description")}
          </StyledText>
        </FlexBox>
        <FlexBox flexDirection="column" style={sectionStyle}>
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
