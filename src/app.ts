import Plyr from 'plyr'
const Swal = require('sweetalert2')

const app = () => {
  const css = GM_getResourceText('plyrcss')
  GM_addStyle(css)
  kintone.events.on('app.record.detail.show', function (event) {
    // find video element
    const fileImageElements = document.querySelectorAll('li.file-image-container-gaia > a')
    // loop fileImageElement
    for (let i in fileImageElements) {
      // prevent loop prototype
      if (fileImageElements.hasOwnProperty(i)) {
        console.log(fileImageElements[i])
        const aEle = fileImageElements[i] as HTMLAnchorElement
        console.log(aEle.href)
        const regex = /\.mov|\.mp4$/gi
        if (regex.test(aEle.href)) {
          // play button
          const aPlayButton = document.createElement('button')
          aPlayButton.textContent = 'Play'
          if (aEle.parentElement) {
            aEle.parentElement.appendChild(aPlayButton)
            aPlayButton.addEventListener('click', function () {
              Swal.fire({
                title: 'play it',
                showConfirmButton: false,
                showCancelButton: true,
                cancelButtonText: 'close',
                width: 640,
                html: `<div><video id="player" playsinline controls><source src="${aEle.href}" /></video></div>`,
                didOpen: () => {
                  const player = new Plyr('#player')
                },
              })
              // const htmlTemplate = `<video id="player" playsinline controls><source src="${aEle.href}" /></video>`
              // const videoHtml = document.createElement('div')
              // videoHtml.style.display
              // videoHtml.innerHTML = htmlTemplate
              // videoHtml.style.width = '800px'
              // document.body.appendChild(videoHtml)
            })
          }
        }
      }
    }

    return event
  })
}

export default app
