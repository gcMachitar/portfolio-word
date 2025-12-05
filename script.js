@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

html { font-size: 62.5%; scroll-behavior: smooth; }

body {
    background: #000;
    color: #fff;
    overflow-x: hidden;
    transition: 0.4s;
}

body.light-mode {
    background: #f5f5f5;
    color: #111;
}

/* Header */
header {
    position: fixed;
    top: 0; left: 0; width: 100%;
    padding: 2rem 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
    background: rgba(0,0,0,0.7);
    backdrop-filter: blur(10px);
    transition: transform 0.4s ease;
}

body.light-mode header { background: rgba(255,255,255,0.9); }

header.scroll-down {
    transform: translateY(-100%);
}

.logo {
    font-size: 2.8rem;
    font-weight: 700;
    color: #b74b4b;
}

nav a {
    font-size: 1.7rem;
    color: white;
    margin-left: 3.5rem;
    font-weight: 500;
    transition: 0.3s;
}

body.light-mode nav a { color: #111; }
nav a:hover, nav a.active { color: #b74b4b; }

.theme-btn {
    background: transparent;
    border: 2px solid #b74b4b;
    width: 46px; height: 46px;
    border-radius: 50%;
    color: #b74b4b;
    font-size: 2.2rem;
    cursor: pointer;
    transition: 0.3s;
}

.theme-btn:hover { transform: scale(1.1); }

/* Home Section */
.home {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12rem 5% 5rem;
    gap: 4rem;
    flex-wrap: wrap;
}

.home-img img {
    width: 32vw;
    min-width: 280px;
    max-width: 380px;
    border-radius: 50%;
    border: 6px solid #b74b4b;
    box-shadow: 0 0 30px rgba(183, 75, 75, 0.6);
    object-fit: cover;
}

.home-content {
    max-width: 600px;
}

.home-content h1 {
    font-size: 5.6rem;
    font-weight: 700;
}

.home-content h3 {
    font-size: 3.6rem;
    margin: 1rem 0;
}

.home-content p {
    font-size: 1.7rem;
    line-height: 1.7;
    margin: 2rem 0;
}

span { color: #b74b4b; }

.social-icons {
    margin: 3rem 0;
    display: flex;
    gap: 1.8rem;
}

.social-icons a {
    width: 50px; height: 50px;
    border: 2px solid #b74b4b;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #b74b4b;
    font-size: 2.2rem;
    transition: 0.3s;
}

.social-icons a:hover {
    background: #b74b4b;
    color: #000;
    transform: translateY(-8px);
    box-shadow: 0 0 25px #b74b4b;
}

.btn {
    display: inline-block;
    padding: 1.3rem 3.2rem;
    background: transparent;
    border: 2px solid #b74b4b;
    border-radius: 50px;
    color: #b74b4b;
    font-size: 1.7rem;
    font-weight: 600;
    transition: 0.4s;
    margin-top: 1rem;
}

.btn:hover {
    background: #b74b4b;
    color: #000;
    box-shadow: 0 0 25px #b74b4b;
    transform: translateY(-4px);
}

/* About Sections - Side by Side */
.about-sections {
    padding: 8rem 5%;
    display: flex;
    justify-content: center;
    gap: 8rem;
    flex-wrap: wrap;
}

.experience, .skills {
    flex: 1;
    min-width: 300px;
    max-width: 500px;
}

h2 {
    font-size: 3.4rem;
    color: #b74b4b;
    text-align: center;
    margin-bottom: 3rem;
}

.experience-list {
    font-size: 1.8rem;
    line-height: 2.8rem;
    list-style: none;
}

.experience-list strong {
    color: #b74b4b;
}

.skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1.4rem;
    justify-content: center;
    list-style: none;
}

.skills-list li {
    padding: 1rem 2.2rem;
    background: #111;
    border: 2px solid #b74b4b;
    border-radius: 50px;
    font-size: 1.6rem;
    transition: 0.3s;
}

.skills-list li:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px #b74b4b;
}

body.light-mode .skills-list li {
    background: #fff;
    color: #111;
}

/* Projects */
.projects {
    padding: 8rem 5%;
    text-align: center;
}

.projects-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: center;
    margin-top: 3rem;
}

.project-card {
    background: #111;
    border: 2px solid #b74b4b;
    border-radius: 1.6rem;
    padding: 2rem;
    width: 100%;
    max-width: 400px;
    cursor: pointer;
    transition: 0.4s;
}

.project-card img {
    width: 100%;
    border-radius: 1rem;
    margin-bottom: 1.5rem;
}

.project-card h3 {
    font-size: 2.4rem;
    color: #b74b4b;
    margin: 1rem 0;
}

.project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 30px rgba(183, 75, 75, 0.6);
}

body.light-mode .project-card {
    background: #fff;
    color: #111;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
    header { padding: 1.8rem 4%; }
    .logo { font-size: 2.4rem; }
    nav a { font-size: 1.5rem; margin-left: 2rem; }

    .home {
        flex-direction: column;
        text-align: center;
        padding-top: 14rem;
    }

    .home-img img {
        width: 75vw;
        max-width: 320px;
    }

    .home-content h1 { font-size: 4.5rem; }
    .home-content h3 { font-size: 3rem; }

    .about-sections {
        flex-direction: column;
        align-items: center;
        gap: 5rem;
    }

    .social-icons { justify-content: center; }
}

@media (max-width: 480px) {
    nav a { margin-left: 1.5rem; font-size: 1.4rem; }
    .home-content h1 { font-size: 4rem; }
    .home-content h3 { font-size: 2.6rem; }
    .btn { padding: 1.2rem 2.8rem; font-size: 1.6rem; }
}
