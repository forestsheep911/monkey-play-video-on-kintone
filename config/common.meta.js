const pj = require('../package.json')
module.exports = {
  name: pj.name,
  namespace: pj.homepage,
  version: pj.version,
  description: pj.description,
  author: pj.author,
  copyright: pj.author,
  license: pj.license,
  match: [
    'https://*.cybozu.cn/k/*',
    'https://*.s.cybozu.cn/k/*',
    'https://*.cybozu.com/k/*',
    'https://*.s.cybozu.com/k/*',
  ],
  require: ['https://cdn.plyr.io/3.7.8/plyr.js', 'https://cdn.jsdelivr.net/npm/sweetalert2@11'],
  resource: ['plyrcss https://cdn.plyr.io/3.7.8/plyr.css'],
  'run-at': 'document-end',
  supportURL: pj.bugs.url,
  homepage: pj.homepage,
  grant: ['GM_getResourceText', 'GM_addStyle'],
  icon: 'https://img.icons8.com/emoji/96/000000/jar-emoji.png',
}
