var figura = document.getElementById("figura");


function circulo() {
    figura.classList.toggle("circulo");
    var figuraText = document.getElementById("figura-show");
    figuraText.innerText = "circulo";
}

function rectangulo() {
    figura.classList.toggle("rectangulo");
    var figuraText = document.getElementById("figura-show");
    figuraText.innerText = "rectangulo";
}

function rombo() {
    figura.classList.toggle("rombo");
    var figuraText = document.getElementById("figura-show");
    figuraText.innerText = "rombo";
}

function imagen() {
    figura.classList.toggle("imagen");
    var figuraText = document.getElementById("figura-show");
    figuraText.innerText = "imagen";
}

function gif() {
    figura.classList.toggle("gif");
    var figuraText = document.getElementById("figura-show");
    figuraText.innerText = "gif";
}

function triangulo() {
    figura.classList.toggle("triangulo");
    var figuraText = document.getElementById("figura-show");
    figuraText.innerText = "triangulo";
}

function hoja() {
    figura.classList.toggle("hoja");
    var figuraText = document.getElementById("figura-show");
    figuraText.innerText = "hoja";
}

function pacman() {
    figura.classList.toggle("pacman");
    var figuraText = document.getElementById("figura-show");
    figuraText.innerText = "pacman";
}

function huevo() {
    figura.classList.toggle("huevo");
    var figuraText = document.getElementById("figura-show");
    figuraText.innerText = "huevo";
}

function trapecio() {
    figura.classList.toggle("trapecio");
    var figuraText = document.getElementById("figura-show");
    figuraText.innerText = "trapecio";
}

function moveTop(){
    figura.classList.toggle("moveTop")
    var figuraText = document.getElementById("figura-show");
    figuraText.innerText = "moveTop";
}

function moveLeft(){
    figura.classList.toggle("moveLeft")
    var figuraText = document.getElementById("figura-show");
    figuraText.innerText = "moveLeft";
}

function moveBottom(){
    figura.classList.toggle("moveBottom")
    var figuraText = document.getElementById("figura-show");
    figuraText.innerText = "moveBottom";
}

function moveRight(){
    figura.classList.toggle("moveRight")
    var figuraText = document.getElementById("figura-show");
    figuraText.innerText = "moveRight";
}

function panelLateral(){
    const panel = document.querySelector(".panel-lateral");
    panel.classList.toggle("active");
    var figuraText = document.getElementById("figura-show");
    figuraText.innerText = "panel lateral";
}

function panelSuperior(){
    const panel = document.querySelector(".panel-superior");
    panel.classList.toggle("active");
    var figuraText = document.getElementById("figura-show");
    figuraText.innerText = "panel superior";
}

function imagenFondo() {
    cuerpo.classList.toggle("imagenfondo");
}

function colorFondo() {
    cuerpo.classList.toggle("colorfondo");
}