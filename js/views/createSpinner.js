export function createSpinner() {
    // Create the spinner overlay and spinner
    const spinnerOverlay = document.createElement('div');
    spinnerOverlay.className = 'spinner-overlay';
    
    spinnerOverlay.innerHTML = `
        <div>compiling circuit</div>
        <div class="spinner"></div>
    `

    document.body.appendChild(spinnerOverlay);

    function removeSpinner() {
        if (spinnerOverlay) {
            spinnerOverlay.remove();  // Remove the spinner overlay from the body
        }
    }

    return {
        remove: removeSpinner
    }
}
