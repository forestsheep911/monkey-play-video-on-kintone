const pj = require('../package.json')
const { resolve } = require('path')
module.exports = {
  name: `${pj.name}`,
  namespace: `https://github.com/${pj.author}/monkey-${pj.name}`,
  match: [
    'https://*.cybozu.cn/k/*',
    'https://*.s.cybozu.cn/k/*',
    'https://*.cybozu.com/k/*',
    'https://*.s.cybozu.com/k/*',
  ],
  grant: ['GM_getValue', 'GM_setValue', 'GM_addValueChangeListener', 'GM_getResourceText', 'GM_addStyle'],
  require: [
    'https://cdn.plyr.io/3.7.8/plyr.js',
    'https://cdn.jsdelivr.net/npm/sweetalert2@11',
    `file://${resolve(__dirname, '../dist/dev').replaceAll('\\', '/')}/${pj.name}.script.js`,
  ],
}
