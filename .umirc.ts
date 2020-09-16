export default {
  mode: 'site',
  title: 'react-admin',
  description: 'A magical react admin',
  favicon: 'https://react-admin-site.vercel.app/logo.svg',
  logo: 'https://react-admin-site.vercel.app/logo.svg',
  resolve: {
    includes: ['src']
  },
  navs: [
    null,
    {
      title: '预览',
      path: 'https://react-admin-plus.vercel.app'
    },
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
