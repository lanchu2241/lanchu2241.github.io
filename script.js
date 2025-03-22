document.addEventListener('DOMContentLoaded', function() {
    const blanks = document.querySelectorAll('.blank');
    const words = document.querySelectorAll('.word');

    let currentBlankIndex = 0;

    words.forEach(word => {
        word.addEventListener('click', function() {
            if (currentBlankIndex < blanks.length) {
                blanks[currentBlankIndex].textContent = this.getAttribute('data-word');
                currentBlankIndex++;
            }
        });
    });
});
