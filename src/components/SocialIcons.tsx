import React from 'react';
import { SocialLink } from '../types';
import { TwitterIcon, LinkedinIcon, EmailIcon, WhatsappIcon, TiktokIcon } from './Icons';

interface SocialIconsProps {
  socials: SocialLink[];
}

const SocialIcons: React.FC<SocialIconsProps> = ({ socials }) => {
  const renderIcon = (platform: string) => {
    // Luasin wrapper dikit biar gak kepotong pas di-scale
    const iconWrapper = "w-8 h-8 flex items-center justify-center";

    switch (platform) {
      case 'facebook':
        return (
          <div className={iconWrapper}>
            {/* Naik ke w-8 dan scale biar bulatannya nutup area */}
            <img src="/fb.png" alt="Facebook" className="w-7 h-7 object-contain" />
          </div>
        );

      case 'instagram':
        return (
          <div className={iconWrapper}>
            {/* w-7 biasanya udah cukup buat IG biar gak nabrak */}
            <img src="/ig.png" alt="Instagram" className="w-7 h-7 object-contain" />
          </div>
        );

      case 'twitter': return <div className={iconWrapper}><TwitterIcon /></div>;
      case 'linkedin': return <div className={iconWrapper}><LinkedinIcon /></div>;
      case 'email': return <div className={iconWrapper}><EmailIcon /></div>;
      case 'whatsapp': return <div className={iconWrapper}><WhatsappIcon /></div>;
      case 'tiktok': return <div className={iconWrapper}><TiktokIcon /></div>;
      default: return null;
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-12 pb-8 text-slate-400 dark:text-slate-500">
      {socials.map((social) => (
        <a
          key={social.platform}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          // Hapus text-slate supaya gak ganggu warna asli logo gambar lu
          className="transition-all duration-300 transform hover:scale-110 active:scale-95 active:brightness-75"
          aria-label={social.platform}
        >
          {renderIcon(social.platform)}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;