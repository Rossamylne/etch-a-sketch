const globalContainer = document.querySelector('.global-container');
for (let i = 1; i <= 16*16; i++) {
    const square = document.createElement('div');
    console.log(i);
    square.classList.add('square');
    square.textContent = i;
    globalContainer.appendChild(square);
}

const changeSquareNb = document.querySelector("button")
changeSquareNb.addEventListener('click', () => {
    let newSquareNb = parseInt(prompt("Choose a grid parameter"));
    while (globalContainer.firstChild) {
        globalContainer.removeChild(globalContainer.firstChild);
    }
    let flexBasis = parseFloat((100 / newSquareNb), 2);
    console.log(flexBasis);
    for (let i = 1; i <= newSquareNb**2; i++) {
        const square = document.createElement('div');
        console.log(i);
        square.classList.add('square');
        square.style.flex = `1 0 ${flexBasis}%`;
        square.textContent = i;
        globalContainer.appendChild(square);
    }
}
)