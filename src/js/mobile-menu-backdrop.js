
export const refs = {
    burgerMenu: document.querySelector('.burger-menu_button'),
    mobileMenu:document.querySelector('.mobile-menu'),
    crossIcon: document.querySelector('.cross-button'),
    pageHeader: document.querySelector('.flex-header'),

}

refs.burgerMenu.addEventListener('click', onBurgerMenuClick);
refs.crossIcon.addEventListener('click',onIconCrossClick)

function onBurgerMenuClick() {
    refs.burgerMenu.classList.add('visually-hidden');
    refs.mobileMenu.classList.remove('visually-hidden');
}

function onIconCrossClick() {
    refs.burgerMenu.classList.remove('visually-hidden');
    refs.mobileMenu.classList.add('visually-hidden');
}