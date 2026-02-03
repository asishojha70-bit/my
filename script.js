document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const mainContainer = document.getElementById('mainContainer');
    const successContainer = document.getElementById('successContainer');
    const restartBtn = document.getElementById('restartBtn');

    // Yes button click handler
    yesBtn.addEventListener('click', function() {
        mainContainer.classList.add('hidden');
        successContainer.classList.remove('hidden');
    });

    // Function to move button to random position
    function moveButtonAway() {
        const randomX = (Math.random() - 0.5) * 500;
        const randomY = (Math.random() - 0.5) * 400;
        const randomRotation = (Math.random() - 0.5) * 20;
        
        noBtn.style.position = 'relative';
        noBtn.style.transition = 'all 0.2s ease-out';
        noBtn.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg)`;
    }

    // No button hover - move away
    noBtn.addEventListener('mouseenter', moveButtonAway);

    // No button click - also move away (don't let them click it)
    noBtn.addEventListener('click', function(e) {
        e.preventDefault();
        moveButtonAway();
    });

    // Mobile touch support - move away
    noBtn.addEventListener('touchstart', function(e) {
        e.preventDefault();
        moveButtonAway();
    });

    // Extra: Move on focus too
    noBtn.addEventListener('focus', function() {
        moveButtonAway();
    });

    // Restart button to go back to main page
    restartBtn.addEventListener('click', function() {
        mainContainer.classList.remove('hidden');
        successContainer.classList.add('hidden');
        // Reset No button position
        noBtn.style.transform = 'translate(0, 0) rotate(0deg)';
    });
});
