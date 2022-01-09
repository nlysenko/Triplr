module.exports = {
  presets: [
    [
      'module:metro-react-native-babel-preset',
      {
        useTransformReactJSXExperimental: true,
      },
    ],
  ],

  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': './src',
          assets: './assets',
        },
        extensions: ['.json', '.js', '.ts', '.tsx'],
      },
    ],
    ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }],
  ],
}
