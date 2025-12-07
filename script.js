let N = 32;
let sz = 5;
let mode = 'sketch';
const sketchpad = document.querySelector('#sketchpad');
const resizeButton = document.querySelector('#resize');
const resetButton = document.querySelector('#reset');
const modeButton = document.querySelector('#mode');

function createSketchPad() {
    sketchpad.innerHTML = '';
    
    let rows = [];
    for (let i = 0; i < N; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < N; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener(
                'mouseover', 
                (e) => {
                    cell.style.backgroundColor = mode === 'sketch' ? 'black' : 'white';
                }
            );
            cell.style.height = `${Math.round(sz * 100 / N)}px`;
            cell.style.width = cell.style.height;
            row.appendChild(cell);
        }

        rows.push(row);
    }

    sketchpad.append(...rows);
}

function reset() {
    createSketchPad();
}

function resize() {
    while (true) {
        N = prompt('Please input a number between 1 and 200');
        if (!isNaN(N) && N >= 1 && N <= 200) break;
    }
    createSketchPad();
}

function changeMode() {
    mode = (mode === 'sketch') ? 'erase' : 'sketch';
    modeButton.textContent = (mode === 'sketch') ? 'erase' : 'sketch';
}

createSketchPad();