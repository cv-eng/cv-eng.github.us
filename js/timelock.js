document.addEventListener("DOMContentLoaded", function() {
    var targetDate = new Date(2025, 1, 14, 0, 0, 0);
    console.log('Target date:', targetDate);
    // Create the MutationObserver to watch for the addition of the sidenav element
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === "childList") {
                var sidenav = document.getElementById('mySidenav');
                if (sidenav) {
                    // Sidenav is found, now you can proceed with your logic
                    observer.disconnect(); // Stop observing
                    // Check if the current date is after the target date
                    if (new Date() < targetDate) {
                        updateLinks(sidenav); // Update immediately if before target date

                        var intervalId = setInterval(function() {
                            updateLinks(sidenav); // Update every second

                            if (new Date() > targetDate) {
                                clearInterval(intervalId); // Stop the interval after target date
                                updateLinks(sidenav);
                            }
                        }, 1000); // Repeat every 1000 milliseconds (1 second)
                    } else {
                        // If the target date has passed, update the links immediately and stop any further interval.
                        updateLinks(sidenav);
                    }
                }
            }
        });
    });

    // Start observing the document body for added nodes
    observer.observe(document.body, { childList: true, subtree: true });

    function updateLinks(sidenav) {
        var currentDate = new Date();
        var lockedLinks = sidenav.getElementsByClassName('locked');
        // console.log('Number of locked links:', lockedLinks.length);

        Array.prototype.forEach.call(lockedLinks, function(link) {
            var timeDifference = targetDate - currentDate;

            // Hide locked links
            link.style.display = "none";

            // If the target date has not passed, update the countdown
            if (timeDifference > 0) {
                var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
                var unlockLink = document.getElementById('unlock-link');
                if (!unlockLink) {
                    var newLink = document.createElement('a');
                    newLink.href = "#";  // Adjust the href as necessary
                    newLink.id = 'unlock-link'; // Ensure it's unique
                    newLink.classList.add('unlock-link');
                    newLink.style.pointerEvents = "none";
                    newLink.innerHTML = `Coming in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
                    newLink.style.color = "green"; // Customize the style as necessary
    
                    // Append the new link to the sidenav
                    sidenav.appendChild(newLink);
                } else {
                    unlockLink.innerHTML = `Coming in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
                }
            } else {
                // If the target date has passed, update the link
                var unlockLink = document.getElementById('unlock-link');
                if (unlockLink) {
                    unlockLink.style.display = "none";
                }
                link.style.display = "block";
            }
        });
    }
});
