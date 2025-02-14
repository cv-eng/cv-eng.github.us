$(document).ready(function () {
    $.getJSON('../images/images.json', function (data) {
        var imageList = $('#image-list');
        console.log(data);
        $.each(data, function (index, imageFile) {
            const imageUrl = `/images/${imageFile}`;
            console.log('Fetching image:', imageUrl);
            var listItem = $('<li></li>');
            var imgTag = $('<img>').attr('src', imageUrl).addClass('thumbnail');
            listItem.append(imgTag);
            imageList.append(listItem);
            imgTag.click(function () {
                $('#popup-image').attr('src', imageUrl);
                $('#image-popup').show();
            });
        });
    });
});
