document.addEventListener('DOMContentLoaded', () => {

    const navItems = document.querySelectorAll('.nav-item');
    const cardItems = document.querySelectorAll('.navcontent');
    const navLinks = document.querySelectorAll('.nav-link');
    const navLinksMobile = document.querySelectorAll('.nav-link-mobile');
    const navMobile = document.querySelector('.mobile-nav');

    const setDefaultActiveTab = () => {
        navLinks.forEach(navLink => {
            if (navLink.getAttribute('data-box') === 'home') {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        });
    };

    setDefaultActiveTab();

    //FOR DESKTOP NAVBAR

    navItems.forEach(navItem => {
        navItem.addEventListener('click', () => {
            const navDataBox = navItem.getAttribute('data-box');
            cardItems.forEach(cardItem => {
                const cardDataBox = cardItem.getAttribute('data-box');
                if (navDataBox === cardDataBox && navDataBox === 'home') {
                    cardItem.scrollIntoView({ behavior: 'smooth' });
                    window.scrollBy(0, -9999);
                } else if (navDataBox === cardDataBox) {
                    cardItem.scrollIntoView({ behavior: 'smooth' });
                }
            });
            navLinks.forEach(item => item.blur());
        });
    });

    //FOR MOBILE NAVBAR

    navLinksMobile.forEach(navLinkMobile => {
        navLinkMobile.addEventListener('click', () => {
            const navMobileDataBox = navLinkMobile.getAttribute('data-box');
            cardItems.forEach(cardItem => {
                const cardDataBox = cardItem.getAttribute('data-box');
                if (navMobileDataBox === cardDataBox && navMobileDataBox === 'home') {
                    cardItem.scrollIntoView({ behavior: 'smooth' });
                    window.scrollBy(0, -9999);
                    navMobile.classList.remove('is-active');
                } else if (navMobileDataBox === cardDataBox) {
                    cardItem.scrollIntoView({ behavior: 'smooth' });
                    navMobile.classList.remove('is-active');
                }
            });
        });
    });

    //FOR DESKTOP NAVBAR COLOR AUTOMATION

    window.onscroll = () => {
        let isHome = false;
        cardItems.forEach(cardItem => {
            const cardDataBox = cardItem.getAttribute('data-box');
            const top = window.scrollY;
            const offset = cardItem.offsetTop - 170;
            const height = cardItem.offsetHeight;

            if ((top >= offset && top < offset + height) || (top >= 0 && cardDataBox === 'home' && top < 500) || ((top + window.innerHeight) >= document.body.offsetHeight && cardDataBox === 'contact')) {
                navLinks.forEach(navLink => {
                    const navDataBox = navLink.getAttribute('data-box');
                    if (cardDataBox === navDataBox) {
                        navLink.classList.add('active');
                        if (cardDataBox === 'home') {
                            isHome = true;
                        }
                    } else {
                        navLink.classList.remove('active');
                    }
                });
            }
        });

        if (isHome) {
            navLinks.forEach(navLink => {
                if (navLink.getAttribute('data-box') === 'home') {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            });
        }

        navLinks.forEach(item => item.blur());
    };

    //scroll from button

    const scrollButton = document.querySelector('.show-offerts');

    scrollButton.addEventListener('click', () => {
        const targetSection = document.querySelector('section[data-box="offers"]');
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});