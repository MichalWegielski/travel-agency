document.addEventListener('DOMContentLoaded', () => {
    const offersDetails = document.getElementById("offers-details");
    const offersArea = document.querySelector(".image-slider");
    const closeArea = document.getElementById("offers-details");

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
});