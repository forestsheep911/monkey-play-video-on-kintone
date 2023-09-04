const pj = require('../package.json')
module.exports = {
  name: pj.name,
  namespace: pj.homepage,
  version: pj.version,
  description: pj.description,
  author: pj.author,
  copyright: pj.author,
  license: pj.license,
  match: ['https://cndevqpofif.cybozu.cn/k/94/show*'],
  require: ['https://cdn.plyr.io/3.7.8/plyr.js'],
  resource: ['plyrcss https://cdn.plyr.io/3.7.8/plyr.css'],
  'run-at': 'document-end',
  supportURL: pj.bugs.url,
  homepage: pj.homepage,
  grant: ['GM_getResourceText', 'GM_addStyle'],
  icon: 'https://img.icons8.com/ios/50/000000/happy-eyes.png',
}
