const menuLinks = document.querySelectorAll('.menu li a');
const mobileMenuLinks = document.querySelectorAll('.menu-mobile li a');

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