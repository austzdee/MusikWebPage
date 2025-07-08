// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

//import { Scripts } from "react-router-dom";

// Write your JavaScript code.

window.onload = function () {
    // Musical note animation
    const note = document.getElementById("note");
    let position = 80;
    let opacity = 0;

    const animate = setInterval(() => {
        if (position <= 20) {
            clearInterval(animate);
            note.style.display = "none";
            return;
        }
        position -= 0.9;
        opacity += 0.02;
        note.style.top = position + "%";
        note.style.opacity = opacity;
    }, 80);

    // Time-based greeting
    const greeting = document.getElementById("greeting");
    const hour = new Date().getHours();
    let message = "";

    if (hour < 12) {
        message = "🌞 Good Morning!";
    } else if (hour < 18) {
        message = "🌤️ Good Afternoon!";
    } else {
        message = "🌙 Good Evening!";
    }

    greeting.textContent = message;
    greeting.style.fontSize = "2em";
    greeting.style.opacity = "0";
    greeting.style.transition = "opacity 2s";

    setTimeout(() => {
        greeting.style.opacity = "1";
    }, 500);
};

