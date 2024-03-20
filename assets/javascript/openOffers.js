document.addEventListener('DOMContentLoaded', () => {
    const offersDetails = document.getElementById("offers-details");
    const offersArea = document.querySelector(".image-slider");

    offersArea.addEventListener('click', (event) => {
        if (event.target.closest('.arrow-left') || event.target.closest('.arrow-right')) {
            return;
        }
        offersDetails.classList.add('active-details');
    });
});