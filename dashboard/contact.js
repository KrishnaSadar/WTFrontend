function sendFeedback(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create a mailto link
    const mailtoLink = `mailto:krishna.sadar23@vit.edu?subject=Feedback from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0D%0AFrom: ${encodeURIComponent(email)}`;

    // Open the mail client
    window.location.href = mailtoLink;

    // Clear the form
    document.getElementById('contactForm').reset();
}
