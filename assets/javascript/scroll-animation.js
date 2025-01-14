const menuLinks = document.querySelectorAll('.menu li a');
const mobileMenuLinks = document.querySelectorAll('.menu-mobile li a');
const backToTopButton = document.querySelector('.back-to-top-button');

function scrollBackToTop (button) {
    button.addEventListener('click', () => {
        window.scrollTo(0, 0);
    });
}

function showBackToTopButtonOnScroll (button) {
    window.addEventListener('scroll', () => {
    
        const windowPosition = window.scrollY;
    
        if (windowPosition > 50) {
            button.classList.add('show-back-to-top-button');
        } else if (windowPosition <= 50) {
            button.classList.remove('show-back-to-top-button');
            button.setAttribute('disabled', 'disabled');
        }
    
    });
}

function scrollToAnimation (linksArray) {
    linksArray.forEach((link, where) => {
        link.addEventListener ('click', (event) => {
            event.preventDefault();
    
            switch (where) {
            case 0:
                window.scrollTo(0, 50);
                break;
            case 1:
                window.scrollTo(0, 320);
                break;
            case 2:
                window.scrollTo(0, 950);
                break;
            case 3:
                window.scrollTo(0, 2000);
                break;
            }
        });
    });
}

scrollToAnimation(menuLinks);
scrollToAnimation(mobileMenuLinks);
scrollBackToTop(backToTopButton);
showBackToTopButtonOnScroll(backToTopButton);
