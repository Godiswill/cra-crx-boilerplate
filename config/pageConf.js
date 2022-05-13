module.exports = {
  index: {
    entry: 'src/pages/index',
    template: 'public/index.html',
  },
  background: {
    entry: 'src/pages/background/index',
  },
  content: {
    entry: 'src/pages/content/index',
  },
  devTools: {
    entry: 'src/pages/devTools/index',
    template: 'public/index.html',
  },
  // newTab: {
  //   entry: 'src/pages/newTab/index',
  //   template: 'public/index.html',
  // },
  // options: {
  //   entry: 'src/pages/options/index',
  //   template: 'public/index.html',
  // },
  // panel: {
  //   entry: 'src/pages/panel/index',
  //   template: 'public/index.html',
  // },
  popup: {
    entry: 'src/pages/popup/index',
    template: 'public/index.html',
  },
};
