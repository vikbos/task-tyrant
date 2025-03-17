import React from "react";
import { useNavigate } from "react-router-dom";
import { FlexBox } from "../../../ui/Flexbox";
import { Banner } from "../../../ui/Banner";
import { BannerCard } from "./components/BannerCard";
import { useTranslation } from "react-i18next";
import { banners } from "./mockData";

export const InfoScreen: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <FlexBox flexDirection="column" overflow="hidden">
      {banners.map((banner) => {
        const bannerNavigate = () => navigate(banner.navPath);
        return (
          <Banner
            key={banner.title}
            imagePath={banner.imagePath}
            overlayPosition={banner.overlayPosition}
            overlayContent={
              <BannerCard
                title={t(banner.title)}
                subtitle={t(banner.subtitle)}
                buttonText={t(banner.buttonText)}
                onCTAClick={bannerNavigate}
              />
            }
          />
        );
      })}
    </FlexBox>
  );
};
