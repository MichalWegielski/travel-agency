document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.image-slider');
    const arrLeft = document.querySelector('.arrow-left');
    const arrRight = document.querySelector('.arrow-right');
    const heading = document.querySelector('.caption h1');
    const description = document.querySelector('.caption p');

    const images = ["zdjecie1.jpg", "zdjecie2.jpg", "zdjecie3.jpg", "zdjecie4.jpg", "zdjecie5.jpg"];

    const headings = ["Turcja", "Chorwacja", "Grecja", "Malediwy", "Seszele"];

    const descriptions = ["Piękne widoki", "Zabytkowe starówki", "Sródziemnomorskie klimaty", "Piaszczyste plaże", "Dziki, równikowy klimat"];

    let id = 0;

    function slide(id) {
        slider.style.backgroundImage = 
        `url(../assets/images/${images[id]})`;
        slider.classList.add('image-fade');
        setTimeout(() => {
            slider.classList.remove('image-fade');
        }, 550);

        heading.innerText = headings[id];
        description.innerText=descriptions[id];
    }

    arrLeft.addEventListener('click', () => {
        id--;

        if(id < 0){
            id = images.length - 1;
        }

        slide(id);
    });

    arrRight.addEventListener('click', () => {
        id++;

        if(id > images.length - 1) {
            id = 0;
        }

        slide(id);
    });
});