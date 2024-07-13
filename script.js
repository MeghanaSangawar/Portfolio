document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1); // Get target section ID
            const targetSection = document.getElementById(targetId); // Get target section element

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Simulate form submission (replace this with actual form submission logic)
        // For demonstration purposes, we'll simulate a delay and then show a success message
        setTimeout(function() {
            // Clear the form inputs (optional)
            contactForm.reset();

            // Remove any existing success message if it exists
            const existingMessage = contactForm.querySelector('.success-message');
            if (existingMessage) {
                existingMessage.remove();
            }

            // Create success message element
            const successMessage = document.createElement('p');
            successMessage.textContent = 'Form submitted successfully!';
            successMessage.classList.add('success-message'); // Add a class for styling

            // Append success message to the form
            contactForm.insertAdjacentElement('afterend', successMessage);

            // Scroll to the success message
            successMessage.scrollIntoView({ behavior: 'smooth' });

            // Show alert message
            window.alert('Form submitted successfully!');
        }, 1000); // Simulate delay of 1 second (1000 milliseconds)
    });
});
