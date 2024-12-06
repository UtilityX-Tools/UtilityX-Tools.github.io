// Smooth Scroll Effect on Button Click
document.querySelector(".download-btn").addEventListener("click", function(event) {
    // Adding a smooth scroll effect when the button is clicked
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });

    // Optional: You can also log something or do other animations here.
    console.log("Downloading UtilityX...");
});

function toggleEULA() {
    const eulaBox = document.getElementById('EULA-box');
    if (eulaBox.style.display === 'block') {
        eulaBox.style.display = 'none';
    } else {
        eulaBox.style.display = 'block';
    }
}
