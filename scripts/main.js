var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.querySelector('body');
var cssInfo = document.querySelector('.cssInfo');

changeBG();

color1.addEventListener('input', changeBG);

color2.addEventListener('input', changeBG);

function changeBG() {
    body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
    cssInfo.textContent = body.style.background;
}