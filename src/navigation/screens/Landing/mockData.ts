import { TranslateKey } from "../../../locales/types";
import { BannerProps } from "../../../ui/Banner";
import { ABOUT, STATISTICS } from "../../navigators/types";
import { BannerCardProps } from "./components/BannerCard";
import StatisticsWoman from "../../../assets/images/StatisticsWoman.png";
import Businessman from "../../../assets/images/Businessman.png";

type ListItemProps = {
  feature: TranslateKey;
  description: TranslateKey;
};

export const featureList: ListItemProps[] = [
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

type BannerNBannerCardProps = Pick<
  BannerCardProps,
  "title" | "subtitle" | "buttonText"
> &
  Pick<BannerProps, "imagePath" | "overlayPosition"> & { navPath: string };

export const banners: BannerNBannerCardProps[] = [
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