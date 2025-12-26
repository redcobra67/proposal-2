document.getElementById('revealBtn').addEventListener('click', function() {
    document.getElementById('proposal').classList.remove('hidden');
    this.style.display = 'none'; // Hide the button after clicking
});