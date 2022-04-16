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
        lines.forEach(line => {
            gCtx.font = `${line.size}px  ${line.font}`;
            gCtx.fillStyle = line.color
            gCtx.textAlign = line.align
            gCtx.fillText(line.txt, line.loc, line.height)
            gCtx.strokeText(line.txt, line.loc, line.height)
        })
    }
}

function onSetLine(txt) {
    // if (txt.length > 28) return
    var selectedLine = getMeme().selectedLineIdx
    setLineTxt(txt, selectedLine)
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

function onMoveFont(sizeChange) {
    console.log(sizeChange);
    moveFont(sizeChange)
    renderMemes()
}

function onSetFont(font) {
    setFont(font)
    renderMemes()
}

function onAddLine(ev) {
    addLine(ev)
    renderInputPlaceholder()
    onSetLine(ev)
    document.querySelector('.input-text').value = ''
}

function onDeleteMeme() {
    deleteMemes()
    renderMemes()
    document.querySelector('.input-text').value = ''
}

function renderInputPlaceholder() {
    let meme = getMeme()
    document.querySelector('.input-text').placeholder = `Type line num: ${meme.selectedLineIdx + 1}`
}

function onDownloadCanvas(elLink) {
    console.log('elLink', elLink);
    elLink.href = gElCanvas.toDataURL()
    elLink.download = 'New-Meme.jpg'
}

// function onSetNewLine() {
//     setNewLine()
//     renderMemes()
// }