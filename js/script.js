// favicon ivent
// const favicon = document.querySelector("link[rel='icon']");
// document.addEventListener("visibilitychange", () => {
//     favicon.href = `../img/logo${document.hidden ? "-deactive" : ""}.png`;
//     console.log(favicon.href);
// });

//stars animatiion
document.addEventListener("DOMContentLoaded", function() {
    const starsContainer = document.getElementById('stars-container');
    const starCount = 100;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        const x = Math.random() * 100;
        const y = Math.random() * 100;

        const duration = 2 + Math.random() * 3;

        const delay = Math.random() * 5;

        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.animationDuration = `${duration}s`;
        star.style.animationDelay = `${delay}s`;

        starsContainer.appendChild(star);
    }
});
