// Smooth scroll for navigation links

document.querySelectorAll('.nav-links a').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

    });

});


// Section animations with IntersectionObserver

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add('animate-slideUp');

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.2
});


document.querySelectorAll('section').forEach(section => {

    observer.observe(section);

});


// Form validation and enhanced feedback

document.querySelectorAll('form').forEach(form => {

    form.addEventListener('submit', function (e) {

        e.preventDefault();

        const button = form.querySelector('button');

        if (button) {

            button.textContent = 'Processing...';

            button.disabled = true;

            setTimeout(() => {

                button.textContent = 'Success!';

                setTimeout(() => {

                    button.textContent = 'Submit';

                    button.disabled = false;

                    form.reset();

                }, 2000);

            }, 2000);

        }

    });

});