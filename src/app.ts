import Plyr from 'plyr'
const Swal = require('sweetalert2')

function playVideo() {
  // find video element
  // const fileImageElements = document.querySelectorAll('li.file-image-container-gaia > a')
  const fileImageElements = document.querySelectorAll('a')
  // loop fileImageElement
  for (const i in fileImageElements) {
    // prevent loop prototype
    if (Object.prototype.hasOwnProperty.call(fileImageElements, i)) {
      console.log(fileImageElements[i])
      const anchorEle = fileImageElements[i] as HTMLAnchorElement
      console.log(anchorEle.href)
      // support video type
      const regex = /\.mov|\.mp4|\.mkv|\.webm$/gi
      if (regex.test(anchorEle.href)) {
        // play button
        const playButton = document.createElement('button')
        playButton.textContent = 'Play'
        playButton.style.marginLeft = '8px'
        if (anchorEle.parentElement) {
          anchorEle.parentElement.insertBefore(playButton, anchorEle.nextSibling)
          playButton.addEventListener('click', function () {
            Swal.fire({
              showConfirmButton: false,
              showCancelButton: true,
              cancelButtonText: 'close',
              allowOutsideClick: false,
              width: 720,
              html: `<div><video id="player${i}" playsinline controls><source src="${anchorEle.href}" /></video></div>`,
              didOpen: () => {
                new Plyr(`#player${i}`)
              },
            })
          })
        }
      }
    }
  }
}

const app = () => {
  const css = GM_getResourceText('plyrcss')
  GM_addStyle(css)

  // maybe a safety wait time
  setTimeout(() => {
    playVideo()
  }, 5000)
}

export default app
