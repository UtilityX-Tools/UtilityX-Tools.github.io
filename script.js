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

// Create flashing stars
function createStars(numStars) {
    const starsContainer = document.createElement('div');
    starsContainer.id = 'stars';
    document.body.appendChild(starsContainer);

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        // Random position
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;

        // Randomize size and flicker speed
        const size = Math.random() * 2 + 1; // 1px to 3px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        const animationDuration = Math.random() * 2 + 1; // 1s to 3s
        star.style.animationDuration = `${animationDuration}s`;

        starsContainer.appendChild(star);
    }
}

// Call the function to generate 100 flashing stars
createStars(100);
