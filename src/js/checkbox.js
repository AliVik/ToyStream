const checkbox = document.querySelector('#checkbox');
const checkboxIcon = document.querySelector('.policy__svg');


if (checkbox) {
    checkbox.addEventListener('change', onCheckboxChange);
}


function onCheckboxChange() {
    checkboxIcon.classList.toggle('visually-hidden');
}