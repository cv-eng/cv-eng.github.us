function openImagePopup(imageUrl) {
    const popup = document.getElementById('image-popup');
    const popupImage = document.getElementById('popup-image');
    const rawImageUrl = imageUrl + '?raw=true';  // Ensure raw=true is appended
    popupImage.src = rawImageUrl;
    popup.style.display = 'block';  // Make the popup visible
}

// Close popup when clicking on the close button
document.querySelector('.close-button').addEventListener('click', closePopup);

// Close popup when clicking outside the image (on the overlay background)
document.getElementById('popup-image').addEventListener('click', (e) => {
        closePopup();
});

function closePopup() {
    document.getElementById('image-popup').style.display = 'none';
}
