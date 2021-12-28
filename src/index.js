import './sass/main.scss';
import './js/mobile-menu-backdrop';
import './js/checkbox';
import './js/vacations';


const refs = {
    mainSocialIcons: document.querySelector('.social-icons'),
}

let widthMatch = window.matchMedia("(min-width: 1023px)");
widthMatch.addEventListener('change', removeInvisibility);


function removeInvisibility() {
    if (widthMatch.matches) {
   return refs.mainSocialIcons.classList.remove('visually-hidden');
}
   return refs.mainSocialIcons.classList.add('visually-hidden');
}


