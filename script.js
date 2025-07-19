const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('nav ul li').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
             Swal.fire({
                title: 'Success!',
                text: 'Your message has been sent successfully!',
                icon: 'success',
                background: '#333',
                color: '#e0e0e0ff',
                confirmButtonText: 'OK',
                confirmButtonColor: '#005353ff'
            });
            form.reset();
        } else {
            throw new Error('Network response was not ok');
        }
    })
    .catch(error => {
        Swal.fire({
            title: 'Error!',
            text: 'There was a problem sending your message. Please try again later.',
            icon: 'error',
            background: '#333',
            color: '#e0e0e0ff',
            confirmButtonText: 'OK',
            confirmButtonColor: '#005353ff'
        });
        console.error('Error:', error);
    })
});
