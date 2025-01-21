$(document).ready(function () {
    $.getJSON('../images/images.json', function (data) {
        var imageList = $('#image-list');
        console.log(data);
        $.each(data, function (index, imageFile) {
            // Construct the raw GitHub URL to access the image
            const imageUrl = `/images/${imageFile}`;  // Adjust the path as necessary
            console.log('Fetching image:', imageUrl);
            // Create the list item and image tag
            var listItem = $('<li></li>');
            var imgTag = $('<img>').attr('src', imageUrl).addClass('thumbnail');
            listItem.append(imgTag);
            imageList.append(listItem);

            // Set up the image click handler to show the popup with the image
            imgTag.click(function () {
                $('#popup-image').attr('src', imageUrl);
                $('#image-popup').show();
            });
        });
    });
});
