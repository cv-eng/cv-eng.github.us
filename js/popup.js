function openImagePopup(imageUrl) {
    const popup = document.getElementById('image-popup');
    const popupImage = document.getElementById('popup-image');
    const rawImageUrl = imageUrl + '?raw=true';
    popupImage.src = rawImageUrl;
    popup.style.display = 'block';
}

document.querySelector('.close-button').addEventListener('click', closePopup);

document.getElementById('popup-image').addEventListener('click', (e) => {
        closePopup();
});

function closePopup() {
    document.getElementById('image-popup').style.display = 'none';
}
