const pj = require('../package.json')
const { resolve } = require('path')
module.exports = {
  name: `${pj.name}`,
  namespace: `https://github.com/${pj.author}/monkey-${pj.name}`,
  match: ['https://cndevqpofif.cybozu.cn/k/94/show*'],
  grant: ['GM_getValue', 'GM_setValue', 'GM_addValueChangeListener', 'GM_getResourceText', 'GM_addStyle'],
  require: [
    'https://cdn.plyr.io/3.7.8/plyr.js',
    `file://${resolve(__dirname, '../dist/dev').replaceAll('\\', '/')}/${pj.name}.script.js`,
  ],
}
