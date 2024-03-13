document.addEventListener("DOMContentLoaded", function() {
    let targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 1); 
    targetDate.setMinutes(targetDate.getMinutes() + 37); 
    targetDate.setSeconds(targetDate.getSeconds() + 36); 

    function updateCountdown() {
        let now = new Date();
        let timeDifference = targetDate - now;

        let hours = Math.floor(timeDifference / (1000 * 60 * 60));
        let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        let countdownElement = document.getElementById('timecounter');
        countdownElement.innerHTML = "Najbliższa wycieczka: " + hours + " godz. " + minutes + " min. " + seconds + " sek.";
        
        if (timeDifference < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "Twój samolot odleciał!";
        }
    }

    updateCountdown();
    let countdownInterval = setInterval(updateCountdown, 1000);
});