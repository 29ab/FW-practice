let button = document.getElementById("click_button");
let modal = document.getElementById("normal_modal");
button.onclick = function () {
    modal.style.display = "block";
}
let close_cross = document.querySelector('#close');
close_cross.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let slide_open_button = document.getElementById("Open-Right-Model");
let slide_modal = document.getElementById("slide-modal");

slide_open_button.onclick = function () {
    slide_modal.style.display = "block";
}

let slide_close_cross = document.querySelector('#close-rightModel');
slide_close_cross.onclick = function () {
    slide_modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == slide_modal) {
        slide_modal.style.display = "none";
    }
}