'use strict'

function onImgSelect(imgId) {
    console.log('imgId', imgId);
    document.querySelector('.editor-modal').classList.remove('close-modal')
    document.querySelector('.editor-modal').classList.add('editor-modal-open')
    document.querySelector('.gallery').classList.add('gallery-close')
    setImgSelect(imgId)
    renderMemes()
}

