document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.image-slider');
    const arrLeft = document.querySelector('.arrow-left');
    const arrRight = document.querySelector('.arrow-right');
    const heading = document.querySelector('.caption h1');
    const description = document.querySelector('.caption p');
    const tooltip = document.querySelector('.helper');
    const header = document.querySelector('.tour-header');
    const descriptionTour = document.querySelector('.tour-description');
    const img = document.querySelector('.tour-img');

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
        changeData(id);
    });

    arrRight.addEventListener('click', () => {
        id++;

        if(id > images.length - 1) {
            id = 0;
        }

        slide(id);
        changeData(id);
    });

    slider.addEventListener('mouseenter', () => {
        tooltip.classList.add('tooltip');
    });

    slider.addEventListener('mouseleave', () => {
        tooltip.classList.remove('tooltip');
    });

    function changeData(id) {
        if(id === 0) {
            header.innerHTML = "Turcja";
            descriptionTour.innerHTML = "Ciepłe, piaszczyste wybrzeża i niesamowite krajobrazy";
            img.src ='../assets/images/zdjecie1.jpg';
        } else if (id === 1) {
            header.innerHTML = "Chorwacja";
            descriptionTour.innerHTML = "Urocze i tętniące życiem stare promenady";
            img.src ='../assets/images/zdjecie2.jpg';
        } else if (id === 2) {
            header.innerHTML = "Grecja";
            descriptionTour.innerHTML = "Spokój i cisza w śródziemnomorskim klimacie";
            img.src ='../assets/images/zdjecie3.jpg';
        } else if (id === 3) {
            header.innerHTML = "Malediwy";
            descriptionTour.innerHTML = "Odrobina raju na ziemi, u nas dla każdego";
            img.src ='../assets/images/zdjecie4.jpg';
        } else if (id === 4) {
            header.innerHTML = "Seszele";
            descriptionTour.innerHTML = "Krajobrazy nie z tego świata oraz dzikie i niezbadane zakątki";
            img.src ='../assets/images/zdjecie5.jpg';
        }
    }

    if(id === 0) {
        header.innerHTML = "Turcja";
        descriptionTour.innerHTML = "Ciepłe, piaszczyste wybrzeża i niesamowite krajobrazy";
        img.src ='../assets/images/zdjecie1.jpg';
    }
});