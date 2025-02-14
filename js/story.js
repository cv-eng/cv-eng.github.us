let currentIndex = 0;
let numBlobs = 9;

const blobs = document.querySelectorAll('.blob');
const dots = document.querySelectorAll('.dot');
const videoElement = document.getElementById('background-video');
function updateContent() {
    const video = document.getElementById('background-video');
    video.playbackRate = 0.7;
    blobs.forEach(blob => blob.style.display = 'none');
    blobs[currentIndex].style.display = 'block';
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
    if (currentIndex === numBlobs - 1) {
        videoElement.style.display = 'block';
        document.getElementById('next-btn').style.display = 'none';
        document.getElementById('prev-btn').style.display = 'block';
    } else if(currentIndex === 0) {
        videoElement.style.display = 'none';
        document.getElementById('next-btn').style.display = 'block';
        document.getElementById('prev-btn').style.display = 'none';
    } else {
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

updateContent();
