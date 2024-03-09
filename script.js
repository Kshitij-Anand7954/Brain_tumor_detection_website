document.getElementById('submitBtn').addEventListener('click', function() {
    const fileInput = document.getElementById('imageInput');
    if (fileInput.files.length === 0) {
        alert('Please select an image to classify.');
        return;
    }

    // Placeholder for backend call
    // Simulate result
    const result = 'Result: Image classified successfully.';

    // Show result in dialog
    const resultDialog = document.getElementById('resultDialog');
    const resultText = document.getElementById('resultText');
    resultText.textContent = result;
    resultDialog.style.visibility = 'visible';
});

document.querySelector('.close-button').addEventListener('click', function() {
    document.getElementById('resultDialog').style.visibility = 'hidden';
});
