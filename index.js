
//typed animation
let typed = new Typed(" .typing", {
    strings: [" Web Developer.", "App Developer.", "UI/UX Designer.", "Software enginner U.G"],
    typespeed: 100,
    backSpeed: 60,
    loop: true
})

// form email input validate
// function validateForm() {
//     let emailInput = document.getElementById('email');
//     let emailError = document.getElementById('emailError');

//     let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailRegex.test(emailInput.value)) {
//         emailError.innerHTML = 'Please enter a valid email address.';
//     } else {
//         emailError.innerHTML = '';
//     }
// }

document.getElementById('menu').addEventListener('click', function (activelink) {
    activelink.preventDefault();
    // Remove the "active" class from all links
    let links = document.querySelectorAll('#menu a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });
    // Add the "active" class to the clicked link
    activelink.target.classList.add('active');


    let targetId = activelink.target.getAttribute('href').substring(1);
    //  add go to top of the page when click Home
    if (targetId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    }
});
//****************************footer link with navigation bar***********************
document.getElementById('footer-menu').addEventListener('click', function (activeLinkFooter) {
    activeLinkFooter.preventDefault();

    // Remove the "active" class from all links in  the navigation bar and footer
    let allLinks = document.querySelectorAll('#menu a, #footer-menu a');
    allLinks.forEach(function (link) {
        link.classList.remove('active');
    });
    // Add the "active" class
    activeLinkFooter.target.classList.add('active');

    let targetId = activeLinkFooter.target.getAttribute('href').substring(1);

    // Add the "active" class to the similer link in the navigation bar
    let navLinkWithFooter = document.querySelector('#menu a[href="#' + targetId + '"]');
    if (navLinkWithFooter) {
        navLinkWithFooter.classList.add('active');
    }

    // go to the relevant section
    if (targetId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    }
});

// animation in each section
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('show');

            // Add a permanent visibility class
            entry.target.classList.add('visible');

            // Stop observing the element after it has been shown
            observer.unobserve(entry.target);
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => {
    observer.observe(el);
});

// progress bar
const progressbar = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('progress-line-after');
        } else {
            entry.target.classList.remove('progress-line-after');
        }
    });
});

const progressbarLines = document.querySelectorAll('.progress-line');

progressbarLines.forEach((el) => {
    progressbar.observe(el);
});
