"use strict";

const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");

const body = document.querySelector("body");
const currentBackground = document.querySelector(".current-bg");

function updateScreen() {
    const style = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    body.style.background = style;
    currentBackground.innerText = style;
}

color1.addEventListener("input", updateScreen)
color2.addEventListener("input", updateScreen)