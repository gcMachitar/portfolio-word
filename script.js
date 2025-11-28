// Typing animation
var typed = new Typed(".text", {
    strings: ["Web Developer", "Designer", "Programmer", "Student"],
    typeSpeed: 70,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});

// Dark/Light mode toggle
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
if(localStorage.getItem("theme") === "light"){
    body.classList.add("light-mode");
    toggleBtn.innerHTML = `<i class="fa-solid fa-sun icon"></i>`;
}

toggleBtn.addEventListener("click", ()=>{
    body.classList.toggle("light-mode");
    if(body.classList.contains("light-mode")){
        toggleBtn.innerHTML = `<i class="fa-solid fa-sun icon"></i>`;
        localStorage.setItem("theme","light");
    } else {
        toggleBtn.innerHTML = `<i class="fa-solid fa-moon icon"></i>`;
        localStorage.setItem("theme","dark");
    }
});
