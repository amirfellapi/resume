document.addEventListener("DOMContentLoaded", function() {
    const moreInfoButtons = document.querySelectorAll(".more-info");

    moreInfoButtons.forEach(button => {
        button.addEventListener("click", function() {
            const details = button.nextElementSibling;
            if (details.style.display === "none") {
                details.style.display = "block";
                button.textContent = "Close";
            } else {
                details.style.display = "none";
                button.textContent = "More Info";
            }
        });
    });
});
