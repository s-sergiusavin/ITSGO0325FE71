const addCelebrityIcons = document.querySelectorAll('.addCelebrity');

addCelebrityIcons.forEach(icon => {
    icon.addEventListener('click', function () {
        if (icon.classList.contains('bi-plus-circle')) {
            icon.classList.remove('bi-plus-circle');
            icon.classList.add('bi-person-check-fill');
        } else if (icon.classList.contains('bi-person-check-fill')) {
            icon.classList.remove('bi-person-check-fill');
            icon.classList.add('bi-plus-circle');
        }
    });
});