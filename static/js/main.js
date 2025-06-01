const originalTitleElement = document.querySelector('.dynamic-title');
const title = originalTitleElement.innerHTML;
originalTitleElement.innerHTML = ' ';

let titleIndex = 0;
function typeTitle() {
    if (titleIndex < title.length) {
        originalTitleElement.innerHTML += title.charAt(titleIndex);
        titleIndex++;
        setTimeout(typeTitle, 400);
    }
    else {
        originalTitleElement.innerHTML = ' ';
        titleIndex = 0;
        setTimeout(typeTitle, 400);
    }
}

typeTitle();