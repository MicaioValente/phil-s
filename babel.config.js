module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        alias: {
          '@app': './app.json',
          '@core': './src/core',
          '@dls': './src/dls',
          '@infra': './src/infra',
          '@modules': './src/modules',
          '@shared': './src/shared',
          '@src': './src',
        },
      },
    ],
  ],
};
