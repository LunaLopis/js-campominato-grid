function createSquareElement() {
    let square = document.createElement('div');
    square.classList.add('square');
    return square;
}

function generateGrid() {
    const gridSizeSelect = document.getElementById('gridSizeSelect');
    const gridSize = parseInt(gridSizeSelect.value);

    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    // per lo stile css
    grid.className = 'grid-' + gridSize;
    for (let i = 0; i < gridSize; i++) {
        let square = createSquareElement();
        grid.append(square);
        square.innerText = i + 1;

        square.addEventListener('click', function () {
            this.classList.toggle('clicked');
            console.log(i + 1);
        });
    }
}

const generateButton = document.getElementById('generateButton');
generateButton.addEventListener('click', generateGrid);

