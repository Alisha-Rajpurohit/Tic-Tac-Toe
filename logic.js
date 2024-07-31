console.log("Welcome to Tic Tac Toe game")

let audioTurn = new Audio('ting.mp3')
let gameover = new Audio('gameover.mp3')
let win = new Audio('music.mp3')
let isgameover = false

let Turn = 'X'
// Function for turn change

const turnChange = () => {
    return Turn === 'X' ? '0' : 'X'
}

// Function check winner

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135]

    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '')) {
            document.querySelector('.turninfo').innerText = boxtext[e[0]].innerText + '  Won'
            isgameover = true

            document.getElementsByTagName('img')[0].style.width = ' 200px'
            document.querySelector('.line').style.width = '25vw'
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}

// Game logic

let boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = Turn
            Turn = turnChange()
            audioTurn.play()
            checkWin()

            if (!isgameover) {
                document.getElementsByClassName('turninfo')[0].innerText = 'Turn for ' + Turn
            }
        }
    })
})

// logic for resetting the game

reset.addEventListener('click', () => {
    let boxtext = document.getElementsByClassName('boxtext')
    Array.from(boxtext).forEach(element => {
        element.innerText = ''
    })
    isgameover = false
    Turn = 'X'
    document.getElementsByTagName('img')[0].style.width = '0px'
    document.getElementsByClassName('turninfo')[0].innerText = 'Turn for ' + Turn
    document.querySelector('.line').style.width = '0'
})