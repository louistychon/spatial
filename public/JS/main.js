const two = document.querySelector('#two');
const footer = document.querySelector('footer');
var active = false;

function toggledark() {
        if (active == false) {
                document.body.style.backgroundColor = "black";
                document.body.style.color = "white";
                two.style.backgroundColor = "black";
                footer.style.color = "white";
                footer.style.backgroundColor = "black";
                active = true;
        } else {
                document.body.style.backgroundColor = "white";
                document.body.style.color = "black";
                two.style.backgroundColor = "white";
                footer.style.color = "black";
                footer.style.backgroundColor = "white";
                active = false;
        }
}