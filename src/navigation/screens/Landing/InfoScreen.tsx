import React from "react";
import { useNavigate } from "react-router-dom";
import { FlexBox } from "../../../ui/Flexbox";
import { Banner, BannerProps } from "../../../ui/Banner";
import StatisticsWoman from "../../../assets/images/StatisticsWoman.png";
import Businessman from "../../../assets/images/Businessman.png";
import { BannerCard, BannerCardProps } from "./components/BannerCard";
import { ABOUT, STATISTICS } from "../../navigators/types";
import { useTranslation } from "react-i18next";

type BannerNBannerCardProps = Pick<
  BannerCardProps,
  "title" | "subtitle" | "buttonText"
> &
  Pick<BannerProps, "imagePath" | "overlayPosition"> & { navPath: string };

const banners: BannerNBannerCardProps[] = [
  {
    imagePath: Businessman,
    overlayPosition: "center-right",
    title: "landing.banners.landingBanner1Title",
    subtitle: "landing.banners.landingBanner1Subtitle",
    buttonText: "landing.banners.landingBanner1CTA",
    navPath: `/${ABOUT}`,
  },
  {
    imagePath: StatisticsWoman,
    overlayPosition: "center-left",
    title: "landing.banners.landingBanner2Title",
    subtitle: "landing.banners.landingBanner2Subtitle",
    buttonText: "landing.banners.landingBanner2CTA",
    navPath: `/${STATISTICS}`,
  },
];

export const InfoScreen: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <FlexBox flexDirection="column" overflow="hidden">
      {banners.map((banner) => {
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
                onCTAClick={() => navigate(banner.navPath)}
              />
            }
          />
        );
      })}
    </FlexBox>
  );
};
