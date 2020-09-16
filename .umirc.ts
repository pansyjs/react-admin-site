export default {
  mode: 'site',
  title: 'react-admin',
  description: 'A magical react admin',
  favicon: './logo.svg',
  logo: './logo.svg',
  resolve: {
    includes: ['src']
  },
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/pansyjs/react-admin'
    }
  ],
  dynamicImport: {},
  hash: true,
  nodeModulesTransform: {
    type: 'none',
    exclude: []
  },
  theme: {
    '@primary-color': '#2B6DE5'
  }
};
