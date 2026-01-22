import React from 'react';
import { ProfileData } from './types';
import vintecLogo from '/public/vinteclogo.jpeg';

export const SITE_DATA: ProfileData = {
  name: "Vintec",
  role: "Digital AI Products & Tech Education",
  bio: "Vintec | Machine Learning & AI\nBelajar ML dari nol sampai kepake\nModul • Project • E-Course",
  // This is the logo URL provided in your previous context
  avatarUrl: vintecLogo, 
  theme: 'light',
  links: [
    {
      id: '1',
      title: 'Akses koleksi belajar Vintec',
      url: 'https://shopee.co.id/shop/1725090121',
      icon: 'shopee',
      variant: 'orange',
      highlighted: true
    },
    {
      id: '2',
      title: 'AI | Data Science | Machine Learning',
      url: 'https://lynk.id/bantucoding',
      icon: 'lynkid',
      variant: 'green'
    },
    {
      id: '4',
      title: 'Vintec AI Public Grup',
      url: 'https://chat.whatsapp.com/ITETy5Vri8F5d7nUVytby0',
      icon: 'whatsapp',
      variant: 'light-green'
    },
//    {
//      id: '5',
//      title: 'Tentang kami',
//      url: 'https://youtube.com/@vintec',
//      variant: 'light-blue'
//      }
  ],
  socials: [
    { platform: 'instagram', url: 'https://www.instagram.com/vintectechnology/' },
    { platform: 'facebook', url: 'https://www.facebook.com/profile.php?id=61585274431811&locale=id_ID' },
    { platform: 'tiktok', url: 'https://www.tiktok.com/@vintec_technology' },
    { platform: 'whatsapp', url: 'https://wa.me/+6285947094014' }
  ]
};