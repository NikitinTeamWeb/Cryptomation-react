const withPlugins = require('next-compose-plugins');
const webpack = require('webpack');
const withImages = require('next-images');
const withFonts = require('next-fonts');
const path = require('path');
const { parsed: localEnv } = require('dotenv').config();



module.exports = withPlugins(
  [
    [withImages, { exclude: path.join(__dirname, 'src/assets/images') }],
    withFonts,
    {reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  }}
  ],
  
);
