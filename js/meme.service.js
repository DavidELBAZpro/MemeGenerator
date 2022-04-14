'use strict'
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
let gImgs = []
let gCtx
let gElCanvas

let gMeme = {
    selectedImgId: 9,
    selectedLineIdx: 0,
    lines: [{
            txt: 'insert top-text',
            size: 30,
            align: 'left',
            color: '',
            height: 50,
            loc: 40,
            font: 'Verdana'
        },
        {
            txt: 'insert bottom-text',
            size: 30,
            align: 'left',
            color: '',
            height: 550,
            loc: 40,
            font: 'Verdana'
        }
    ]
}

createImages()

function _createMeme(selectedImgId, selectedLineIdx, lines) {
    gMeme = {
        selectedImgId,
        selectedLineIdx,
        lines
    }
}

function createImages() {
    for (let i = 1; i < 19; i++) {
        gImgs.push(_createImage(i, `img-square/${i}.jpg`, ['funny', 'cat']))

    }
}

function _createImage(id, url, keyWords) {
    return {
        id,
        url,
        keyWords
    }
}

function setImgSelect(imgId) {
    gMeme.selectedImgId = imgId
}

function getImages() {
    return gImgs
}

function getMeme() {
    return gMeme
}

function setLineTxt(text, lineIdx) {
    gMeme.lines[lineIdx].txt = text
}

function setRange(range, lineIdx) {
    gMeme.lines[lineIdx].size = range
}

function setColor(color, lineIdx) {
    gMeme.lines[lineIdx].color = color
}


function setSwitchLine() {
    gMeme.selectedLineIdx = (gMeme.selectedLineIdx === 0) ? 1 : 0
}

function resizeFont(sizeChange) {
    console.log('sizeChange', sizeChange)
    gMeme.lines[gMeme.selectedLineIdx].size += sizeChange === '+' ? 1 : -1
}

function moveFont(sizeChange) {
    console.log('sizeChange', sizeChange)
    gMeme.lines[gMeme.selectedLineIdx].loc += sizeChange === '+' ? 1 : -1
}

function setFont(font) {
    gMeme.lines[gMeme.selectedLineIdx].font = font
}

function deleteMemes() {
    gMeme.lines[gMeme.selectedLineIdx].txt = ''
}

function setNewLine(txt = 'Type your text') {
    const { x, y } = getCoords()
    gMeme.lines.push({
        x,
        y,
        txt,
        size: 40,
        align: 'center',
        color: getRandomColor(),
        font: 'Verdana',
    })
}

function getCoords() {
    const lineCount = gMeme.lines.length
    if (lineCount === 0 || lineCount > 2) {
        return { x: 300, y: 300 }
    } else if (lineCount === 1) {
        return { x: gElCanvas.width / 2, y: gElCanvas.height / 3.5 }
    } else {
        return { x: gElCanvas.width / 2, y: gElCanvas.height / 1.5 }
    }
}