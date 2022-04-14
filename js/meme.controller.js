'use strict'


function onInit() {
    renderImages()
    gElCanvas = document.querySelector('#canvas')
    gCtx = gElCanvas.getContext('2d')
    renderMemes()
}

function renderImages() {
    const imgs = getImages()
    console.log('hey', imgs);
    let strHTMLs = imgs.map(img =>
        `<img onclick="onImgSelect(${img.id})" src="${img.url}" alt="">`
    )
    document.querySelector('.gallery').innerHTML = strHTMLs.join('')
}

function renderMemes() {
    let meme = getMeme()
    let img = new Image()
    img.src = `img-square/${meme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        let lines = meme.lines
        console.log('line', lines);
        lines.forEach(line => {
            gCtx.font = `bold ${line.size}px  Verdana`;
            gCtx.fillStyle = line.color
            gCtx.textAlign = line.align
            gCtx.fillText(line.txt, line.loc, line.height)
        })
    }
}

function onSetLine(ev) {
    ev.preventDefault()
    let selectedLine = getMeme().selectedLineIdx
    const text = ev.target.value
    setLineTxt(text, selectedLine)
    renderMemes()
}

function onSetRange(ev) {
    ev.preventDefault()
    const range = ev.target.value
    let selectedLine = getMeme().selectedLineIdx
    setRange(range, selectedLine)
    renderMemes()
}

function onSetColor(ev) {
    ev.preventDefault()
    const color = ev.target.value
    let selectedLine = getMeme().selectedLineIdx
    setColor(color, selectedLine)
    renderMemes()
}

function onCloseModal() {
    setLineTxt('', 0)
    document.querySelector('.input-text').value = ''
    document.querySelector('.gallery').classList.remove('gallery-close')
    document.querySelector('.editor-modal').classList.remove('editor-modal-open')
    document.querySelector('.editor-modal').classList.add('close-modal')
}

function onSwitchLine() {
    setSwitchLine()
    document.querySelector('.input-text').value = ''
        // document.querySelector('.color-picker').value = '#000000'
    renderMemes()
}

function onResizeFont(sizeChange) {
    console.log('meme i want', sizeChange);
    resizeFont(sizeChange)
    renderMemes()
}