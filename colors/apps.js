const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// console.log(hex.length)
const output = document.querySelector('.output');
const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    let hexColor = '#';

    for(let i = 0; i < 6; i++) {
    hexColor = hexColor + hex[ randomHEX()];
    }
    document.body.style.backgroundColor = hexColor;
    output.textContent = hexColor; 
})


    function randomHEX() {
    return Math.floor(Math.random()*hex.length );
    console.log(randomHEX());
}