let position = 0;

function moveSlide(direction) {
    const newPosition = position + direction;
    position = newPosition < -2 ? 0 : newPosition == 1 ? -2 : newPosition;

    const slides = document.getElementsByClassName('slide');
    Array.from(slides).forEach((slide) => {
        slide.style.transform = `translateX(${100*position}%)`;
    });
}