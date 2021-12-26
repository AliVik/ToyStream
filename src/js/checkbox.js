const checkbox = document.querySelector('#checkbox');
const checkboxIcon = document.querySelector('.policy__svg');


checkbox.addEventListener('change', onCheckboxChange);

function onCheckboxChange() {
    checkboxIcon.classList.toggle('visually-hidden');
}