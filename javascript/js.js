window.onload = function() {
    document.querySelector("#load").style.display = "none";
}

window.addEventListener('scroll', function() {
    var s_right = document.getElementById("section-right");
    var s_left = document.getElementById("section-left");
    var sections = document.getElementById("sections");
    var px = window.pageYOffset;
    console.log(px + "px");
    if (px > 250) {
        s_right.style.display = "flex";
        s_left.style.display = "flex";
    }
    if (px > 300) {
        sections.style.display = "flex";
    }
})










// const myTimeout = setTimeout(display, 2000);s

// function display() {
//     var s_right = document.getElementById("section-right");
//     var s_left = document.getElementById("section-left");
//     s_right.style.display = "block";
//     s_left.style.display = "block";

// }