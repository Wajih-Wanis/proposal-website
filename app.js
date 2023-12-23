document.addEventListener('DOMContentLoaded', function () {
    const noButton = document.querySelector('.No');
    const yesButton = document.querySelector('.Yes');

    noButton.addEventListener('mouseenter', function () {
        moveButtonRandomly(noButton);
    });

    yesButton.addEventListener('click', function () {
        // Replace 'your-media.mp4' with the path to your media file
        window.location.href = 'your-media.mp4';
    });
});

function moveButtonRandomly(button) {
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}
