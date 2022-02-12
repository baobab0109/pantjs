const canvas = document.querySelector('#jsCanvas');
const ctx = canvas.getContext('2d');


const colors = document.querySelectorAll('.controls__color');
const range = document.querySelector('.controls_range');

const mode = document.querySelector('#jsMode');
const saveBtn = document.querySelector('#jsSave')

let paintMode = true;

const DEFAULT_COLOR = '#2c2c2c';
const CANVAS_SIZE = 700;





canvas.height = CANVAS_SIZE;
canvas.width = CANVAS_SIZE;




let painting = false;

function stopPainting(){
    painting = false;
}

function startingPainting(){
    painting = true;
}

function onMouseMove(event){
    const x = event.offsetX
    const y = event.offsetY
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
        
    }else{
        
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function onMouseDown(){
    painting = true;
}

function colorHandle(event) {
    const color = event.target.style.backgroundColor
    ctx.strokeStyle = color
    ctx.fillStyle = color
}

function rangeInput(event){
    const size = event.target.value;
    ctx.lineWidth = size;
}

function modeChangeClick(){
    if(paintMode){
        paintMode = false;
        mode.innerText = 'Fill';
    }else{
        paintMode = true;
        mode.innerText = 'Paint';
    }
}

function canvasClick(){
    if(!paintMode){
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)
    } 
}

function controlCM(event){
    event.preventDefault()
}

function saveBtnClick(){
    const a = document.createElement('a');
    const image = canvas.toDataURL();
    a.download = 'Painting🖌'
    a.href = image
    a.click()
}





if(canvas){
    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mousedown', onMouseDown)
    canvas.addEventListener('mouseup', stopPainting)
    canvas.addEventListener('mouseleave', stopPainting)
    canvas.addEventListener('click', canvasClick)
    canvas.addEventListener('contextmenu', controlCM)

    colors.forEach(color => color.addEventListener('click', colorHandle))

    range.addEventListener('input', rangeInput)
}

if(mode){
    mode.addEventListener('click', modeChangeClick)
}

if(saveBtn){
    saveBtn.addEventListener('click', saveBtnClick)
}

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)


ctx.lineWidth = 2.5;
ctx.strokeStyle = DEFAULT_COLOR;
ctx.fillStyle = DEFAULT_COLOR;


