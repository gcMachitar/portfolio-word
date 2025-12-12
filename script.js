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

let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down → hide header
        header.style.top = "-100px";
    } else {
        // Scrolling up → show header
        header.style.top = "0";
    }
    lastScroll = currentScroll;
});


// Smooth scrolling for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
