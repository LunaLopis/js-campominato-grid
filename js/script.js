

function createSquareElement(){
    let square = document.createElement('div');
    square.classList.add('square');
    return square;

}

function generateGrid() {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    for(let i= 0; i < 100; i++) {
        // i quadratini dentro funzione
        let square = createSquareElement();
        grid.append(square);
        square.innerText= i +1;
        square.addEventListener('click', function(){
            this.classList.toggle('clicked');
            console.log(i + 1);
        })
    }
}
const generateButton = document.getElementById('generateButton');
generateButton.addEventListener('click', generateGrid);

