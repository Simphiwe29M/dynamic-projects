function openFullscreen(imageElement) {
    const fullscreenOverlay = document.getElementById('fullscreen-overlay');
    const fullscreenImage = document.getElementById('fullscreen-image');

    fullscreenImage.src = imageElement.src;
    fullscreenOverlay.classList.add('active'); // Add 'active' class to show the overlay
}

function closeFullscreen() {
    const fullscreenOverlay = document.getElementById('fullscreen-overlay');
    fullscreenOverlay.classList.remove('active'); // Remove 'active' class to hide the overlay
}