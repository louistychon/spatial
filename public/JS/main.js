const titreBlack = new Array();

const two = document.querySelector('#two');
const footer = document.querySelector('footer');
titreBlack = document.getElementsByTagName('h3');

var active = false;

function toggledark() {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        two.style.backgroundColor = "black";
        footer.style.color = "white";
        footer.style.backgroundColor = "black";
        titreBlack.style.backgroundColor = "red";
}