let currentIndex = 0; // Keep track of the current story section
let numBlobs = 9;

const blobs = document.querySelectorAll('.blob');
const dots = document.querySelectorAll('.dot');
const videoElement = document.getElementById('background-video'); // Get the video element

function updateContent() {
    const video = document.getElementById('background-video');
    // Slow down the video to 50% speed
    video.playbackRate = 0.7;

    // Hide all blobs
    blobs.forEach(blob => blob.style.display = 'none');
    // Show the current blob
    blobs[currentIndex].style.display = 'block';

    // Remove the active class from all dots
    dots.forEach(dot => dot.classList.remove('active'));
    // Add the active class to the current dot
    dots[currentIndex].classList.add('active');

    if (currentIndex === numBlobs - 1) {
        // Show video on last blob
        videoElement.style.display = 'block';
        document.getElementById('next-btn').style.display = 'none';
        document.getElementById('prev-btn').style.display = 'block';
    } else if(currentIndex === 0) {
        videoElement.style.display = 'none';
        document.getElementById('next-btn').style.display = 'block';
        document.getElementById('prev-btn').style.display = 'none';
    } else {
        // Hide video on other sections
        videoElement.style.display = 'none';
        document.getElementById('next-btn').style.display = 'block';
        document.getElementById('prev-btn').style.display = 'block';
    }
}

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentIndex < blobs.length - 1) {
        currentIndex++;
        updateContent();
    }
});

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateContent();
    }
});

// Initialize the page by showing the first section
updateContent();
