import React from "react";
import { SocialLink } from "../types";
import {
  TwitterIcon,
  LinkedinIcon,
  EmailIcon,
  WhatsappIcon,
  TiktokIcon,
} from "./Icons";

interface SocialIconsProps {
  socials: SocialLink[];
}

const ICON_WRAPPER = "w-8 h-8 flex items-center justify-center";

const SocialIcons: React.FC<SocialIconsProps> = ({ socials }) => {
  const renderIcon = (platform: string) => {
    const key = platform.toLowerCase();

    switch (key) {
      case "facebook":
        return (
          <div className={ICON_WRAPPER}>
            <img
              src="/fb.png"
              alt="Facebook"
              className="w-7 h-7 object-contain"
            />
          </div>
        );

      case "instagram":
        return (
          <div className={ICON_WRAPPER}>
            <img
              src="/ig.png"
              alt="Instagram"
              className="w-7 h-7 object-contain"
            />
          </div>
        );

      case "twitter":
        return <div className={ICON_WRAPPER}><TwitterIcon /></div>;

      case "linkedin":
        return <div className={ICON_WRAPPER}><LinkedinIcon /></div>;

      case "email":
        return <div className={ICON_WRAPPER}><EmailIcon /></div>;

      case "whatsapp":
        return <div className={ICON_WRAPPER}><WhatsappIcon /></div>;

      case "tiktok":
        return <div className={ICON_WRAPPER}><TiktokIcon /></div>;

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-12 pb-8">
      {socials.map((social) => (
        <a
          key={social.platform}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.platform}
          className="transition-transform duration-300 hover:scale-110 active:scale-95"
        >
          {renderIcon(social.platform)}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
