document.addEventListener('DOMContentLoaded', function() {
    const countDisplay = document.getElementById('count-display');
    const incrementBtn = document.getElementById('increment-btn');
    const decrementBtn = document.getElementById('decrement-btn');
    let count = 0;

    function updateCountDisplay() {
        countDisplay.textContent = `Count: ${count}`;
    }

    incrementBtn.addEventListener('click', function() {
        count++;
        updateCountDisplay();
    });

    decrementBtn.addEventListener('click', function() {
        if (count > 0) {
            count--;
            updateCountDisplay();
        } else {
            alert("You've reached the limit (0)!");
        }
    });

    // Initial display
    updateCountDisplay();
});
