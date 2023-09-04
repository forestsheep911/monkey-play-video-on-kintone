import Plyr from 'plyr'

const app = () => {
  console.log('monkey jumping on the bed.')
  const css = GM_getResourceText('plyrcss')
  GM_addStyle(css)
  kintone.events.on('app.record.detail.show', function (event) {
    window.alert('记录详情页面已打开')
    const htmlTemplate = `
    <video id="player" playsinline controls>
    <source src="/k/api/record/download.do/-/%E5%8D%97%E4%BA%AC%E5%BC%82%E8%A7%86%E7%95%8C%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8.mp4?app=3156&field=6673173&detectType=true&record=52&row=3158728&id=226753&hash=9a2b4620b35de324ee9553f4f07d96cc50b3a8b8&revision=3&.mp4" />
    </video>`
    const videoHtml = document.createElement('div')
    videoHtml.innerHTML = htmlTemplate
    // videoHtml.style.width = '800px'
    document.body.appendChild(videoHtml)
    const player = new Plyr('#player')
    return event
  })
}

export default app
