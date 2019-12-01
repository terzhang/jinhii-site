import React from 'react';
import * as Types from './index';

const typesObj = {
  sparkleIcons: {
    label: 'sparkle icons',
    render: <Types.SparkleIcons />
  },
  chibis: { label: 'chibis', render: <Types.Chibis /> },
  normal: { label: 'normal', render: <Types.Normal /> },
  pixels: { label: 'pixels', render: <Types.Pixels /> },
  emotesBadges: {
    label: 'emotes/badges',
    render: <Types.EmotesBadges />
  },
  kofiEmotes: {
    label: 'ko-fi emotes',
    render: <Types.KofiEmotes />
  },
  customUgc: { label: 'custom ugc', render: <Types.CustomUgc /> },
  customWallpaper: {
    label: 'custom wallpaper',
    render: <Types.CustomWallpaper />
  },
  logos: { label: 'logos', render: <Types.Logos /> }
};

export default typesObj;
