let pictures = ['img/melon.avif','img/dog.avif','img/eagle.avif','img/elephan.avif','img/flag.avif','img/home.avif','img/lion.avif','img/monkey.avif','img/panda.avif','img/phone.avif','img/pingvin.avif','img/shark.avif','img/snake.avif','img/tv.avif'];
let picIndex = 0;
let picture = document.querySelector('img');
let count = 0;
picture.src = pictures[picIndex];
let outerBoard = document.querySelector('.outer-board')
for(let i = 0; i < 25;i++){
    let innerBoard = document.createElement('div');
    outerBoard.appendChild(innerBoard);
    innerBoard.className = 'inner-board';
    innerBoard.onclick = () =>{
        count++;
        if(count > 5){
            return false;
        }
        else{
            innerBoard.style.opacity = 0;
        }
    }
}
let letterContainer = document.querySelector('#letterContainer')
let names = ['MELON','DOG','EAGLE','ELEPHAT','FLAG','HOME','LION','MONKEY','PANDA','PHONE','PENGUIN','SHARK','SNAKE','TV'];
let nameIndex = 0;

function createNames(){
    for(let i = 0;i < names[nameIndex].length;i++){
        let letter = document.createElement('div');
        letter.className = 'letter';
        letterContainer.appendChild(letter);
        letter.innerText = names[nameIndex][i]
    }
}

createNames()

