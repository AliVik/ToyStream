
const refs = {
    gameAnalystLink:document.querySelector('#game-analyst'),
    gameAnalystPage: document.querySelector('.game-analyst'),
    userManagerLink: document.querySelector("#user-manager"),
    userManagerPage: document.querySelector('.user-manager'),
    gameDesignerPage: document.querySelector('.game-designer'),
    gameDesignerLink: document.querySelector('#game-designer'),
    backBtn: document.querySelector('.back-btn'),
    motionDesignerLink: document.querySelector(".motion-designer"),
    motionDesignerPage: document.querySelector('#motion-designer'),
    technicalArtistPage: document.querySelector(".technical-artist"),
    technicalArtistLink: document.querySelector('#technical-artist'),
    hrManagersLinks: document.querySelectorAll('.js-hr-manager'),
    hrManagersPage:document.querySelector(".hr-manager"),
}


if (refs.gameAnalystLink) {
    refs.gameAnalystLink.addEventListener("click", () => localStorage.setItem("vacancy", "Game Analyst"));
}
if (refs.userManagerLink) {
    refs.userManagerLink.addEventListener("click", () => localStorage.setItem("vacancy", "User Manager"));
}
if (refs.gameDesignerLink) {
    refs.gameDesignerLink.addEventListener("click", () => localStorage.setItem("vacancy", "Game Designer"));
}
if (refs.motionDesignerLink) {
    refs.motionDesignerLink.addEventListener("click", () => localStorage.setItem("vacancy", "Motion Designer"));
}
if (refs.backBtn) {
    refs.backBtn.addEventListener("click", () => localStorage.removeItem("vacancy"));
}
if (refs.technicalArtistLink) {
    refs.technicalArtistLink.addEventListener("click", () => localStorage.setItem("vacancy", "Technical Artist"));
}
// if (refs.hrManagersLinks) {
//     refs.hrManagersLinks.map(link => {
//         return link.addEventListener("click", () => localStorage.setItem("vacancy", "HR Manager"));
//     })
    
// }

console.log(localStorage)


if (localStorage.getItem("vacancy") === "Game Analyst") {
    return showVacancy(refs.gameAnalystPage);
}
if (localStorage.getItem("vacancy") === "User Manager") {
    return showVacancy(refs.userManagerPage);
}
if (localStorage.getItem("vacancy") === "Game Designer") {
    return showVacancy(refs.gameDesignerPage);
}
if (localStorage.getItem("vacancy") === "Motion Designer") {
    return showVacancy(refs.motionDesignerPage);
}
if (localStorage.getItem("vacancy") === "Technical Artist") {
    return showVacancy(refs.technicalArtistPage);
}
if (localStorage.getItem("vacancy") === "HR Manager") {
    return showVacancy(refs.hrManagersPage);
}


function showVacancy(vacancy) {
    vacancy.classList.remove('visually-hidden');
}

