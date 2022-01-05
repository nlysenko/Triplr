module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: [
          '.ts',
          '.tsx',
          '.js',
          '.ios.js',
          '.android.js',
          '.svg',
          '.png',
          'jpeg',
        ],
        alias: {
          '@': './src',
          assets: './assets',
        },
      },
    ],
    'jest-hoist',
  ],
};
