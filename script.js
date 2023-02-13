let pictures = ['img/melon.avif', 'img/dog.avif', 'img/eagle.avif', 'img/elephan.avif', 'img/flag.avif', 'img/home.avif', 'img/lion.avif', 'img/monkey.avif', 'img/panda.avif', 'img/phone.avif', 'img/pingvin.avif', 'img/shark.avif', 'img/snake.avif', 'img/tv.avif'];
let names = ['MELON', 'DOG', 'EAGLE', 'ELEPHANT', 'FLAG', 'HOME', 'LION', 'MONKEY', 'PANDA', 'PHONE', 'PENGUIN', 'SHARK', 'SNAKE', 'TV'];
let picIndex = 0;
let picture = document.querySelector('img');
let count = 5;
let nameIndex = 0;
let step = -1;
let coinPoint = 6;
coin.innerText = coinPoint;
let background = document.querySelector('.full_img');
let innerBoardAll, letter, letterAll, letterBox, checkAll;
let nameTest = [];
let board = document.querySelector('.board');
let outerBoard = document.querySelector('.outer-board');
let letterContainer = document.querySelector('#letterContainer')

play.onclick = () => background.style = 'opacity:0;visibility:hidden';

for (let i = 0; i < 25; i++) {
    let innerBoard = document.createElement('div');
    innerBoard.setAttribute('style', `--time:${i+1}`);
    outerBoard.appendChild(innerBoard);
    innerBoard.className = 'inner-board';
    innerBoard.onclick = () => {
        innerBoard.style.pointerEvents = 'none';
        if (count <= 0) {
            return false;
        } else {
            innerBoard.style.opacity = 0;
        }
        count--;
        heart.innerText = count;
    }
    innerBoardAll = document.querySelectorAll('.inner-board')
}




function createNames() {
    for (let i = 0; i < names[nameIndex].length; i++) {
        letter = document.createElement('div');
        letter.className = 'letter';
        let letterText = document.createElement('span');
        letterText.className = 'letterText';
        letter.appendChild(letterText);
        letterContainer.appendChild(letter);
    }
    letterAll = document.querySelectorAll('.letterText')
    letterBox = document.querySelectorAll('.letter');
    picture.src = pictures[picIndex];
    for (let i = 0; i < innerBoardAll.length; i++) {
        innerBoardAll[i].style.transition = 'none'
        innerBoardAll[i].style.pointerEvents = 'unset'
    }
    count = 5;
    heart.innerText = count;
}






for (let i = 65; i <= 90; i++) {
    let check = document.createElement('div');
    check.className = 'check';
    checkContainer.appendChild(check);
    check.innerText = String.fromCharCode(i);
    checkAll = document.querySelectorAll('.check');
    check.onclick = function () {
        step++;
        nameTest.push(check.innerText);
        for (let i = 0; i <= step; i++) {
            letterAll[step].innerText = check.innerText;
        }
        if (step == names[nameIndex].length - 1 && nameTest.join('') == names[nameIndex]) {
            for (let i = 0; i < innerBoardAll.length; i++) {
                innerBoardAll[i].style.opacity = 0;
                innerBoardAll[i].style.transition = '1s'
                innerBoardAll[i].style.pointerEvents = 'none'
            }
            setTimeout(() => {
                for (let i = 0; i < innerBoardAll.length; i++) {
                    innerBoardAll[i].style.opacity = 1;
                    innerBoardAll[i].style.transition = '.4s'
                    innerBoardAll[i].style.transitionDelay = 'calc(var(--time) * .1s)'
                }
                letterContainer.style.opacity = 0;
            }, 2000)
            setTimeout(() => {
                coinPoint+=4;
            coin.innerText = coinPoint;
                letterContainer.innerHTML = ''
                step = -1;
                nameTest = [];
                nameIndex++;
                picIndex++;
                createNames();
                letterContainer.style.opacity = 1;
                innerBoardAll[i].style.pointerEvents = 'unset'
            }, 5000);

        } 
        else if (step == names[nameIndex].length - 1 && nameTest.join('') !== names[nameIndex]) {
            step = -1;
            nameTest = [];
            coinPoint-=2;
            coin.innerText = coinPoint;
            for (let i = 0; i < checkAll.length; i++) {
                checkAll[i].style.pointerEvents = 'none';
                setTimeout(() => {
                    checkAll[i].style.pointerEvents = 'unset'
                }, 1000)
            }

            for (let i = 0; i < letterAll.length; i++) {
                letterBox[i].classList.add('shake')
                setTimeout(() => {
                    letterAll[i].innerText = '';
                    letterBox[i].classList.remove('shake')
                }, 1000)
            }
        }
    }
}

createNames()

