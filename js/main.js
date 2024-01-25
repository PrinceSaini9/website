
window.addEventListener('scroll', function () {
    const nav = document.getElementById('nav');
    if (window.scrollY > 100) {
        nav.classList.add('nav-sticky');
    } else {
        nav.classList.remove('nav-sticky');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    function toggleNavbarMethod() {
        const dropdowns = document.querySelectorAll('.navbar .dropdown');
        
        if (window.innerWidth > 768) {
            dropdowns.forEach(function (dropdown) {
                dropdown.addEventListener('mouseover', function () {
                    this.querySelector('.dropdown-toggle').click();
                });
                dropdown.addEventListener('mouseout', function () {
                    this.querySelector('.dropdown-toggle').click();
                });
            });
        } else {
            dropdowns.forEach(function (dropdown) {
                dropdown.removeEventListener('mouseover', null);
                dropdown.removeEventListener('mouseout', null);
            });
        }
    }
    
    toggleNavbarMethod();
    window.addEventListener('resize', toggleNavbarMethod);
});

window.addEventListener('scroll', function () {
    const backToTop = document.querySelector('.back-to-top');
    backToTop.style.display = (window.scrollY > 100) ? 'block' : 'none';
});

document.querySelector('.back-to-top').addEventListener('click', function () {
    document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

function setProgressWidth() {
    const progressBars = document.querySelectorAll('.skills .progress .progress-bar');
    progressBars.forEach(function (progressBar) {
        progressBar.style.width = progressBar.getAttribute('aria-valuenow') + '%';
    });
}

window.addEventListener('scroll', function () {
    const skillsSection = document.querySelector('.skills');
    if (skillsSection.getBoundingClientRect().top < window.innerHeight * 0.8) {
        setProgressWidth();
    }
});



