document.addEventListener('DOMContentLoaded', () => {
    const offersDetails = document.getElementById("offers-details");
    const offersArea = document.querySelector(".image-slider");
    const closeArea = document.getElementById("offers-details");
    const closeOpinionArea = document.getElementById("opinion-details");
    const opinionsArea = document.getElementById("add-opinion");
    const opinionDetails = document.getElementById("opinion-details");

    offersArea.addEventListener('click', (event) => {
        if (event.target.closest('.arrow-left') || event.target.closest('.arrow-right')) {
            return;
        }
        offersDetails.classList.add('active-details');
    });

    closeArea.addEventListener('click', (event) => {
        if (event.target.closest('.modal-section')) {
            return;
        }
        offersDetails.classList.remove('active-details');
    });

    //for opinion button

    opinionsArea.addEventListener('click', () => {
        opinionDetails.classList.add('active-details2');
    });

    closeOpinionArea.addEventListener('click', (event) => {
        if (event.target.closest('.modal-section2')) {
            return;
        }
        opinionDetails.classList.remove('active-details2');
    });
});