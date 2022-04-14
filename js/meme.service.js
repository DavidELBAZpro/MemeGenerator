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
            loc: 40
        },
        {
            txt: 'insert bottom-text',
            size: 30,
            align: 'left',
            color: '',
            height: 550,
            loc: 40
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
    console.log('ran1', range);
}

function setColor(color, lineIdx) {
    gMeme.lines[lineIdx].color = color
    console.log('clr1', color);
}


function setSwitchLine() {
    gMeme.selectedLineIdx = (gMeme.selectedLineIdx === 0) ? 1 : 0
    console.log('switch', gMeme.selectedLineIdx)
}

function resizeFont(sizeChange) {
    console.log('sizeChange', sizeChange)
    gMeme.lines[gMeme.selectedLineIdx].size += sizeChange === '+' ? 1 : -1
}