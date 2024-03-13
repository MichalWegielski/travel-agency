document.addEventListener("DOMContentLoaded", function() {
    const progressLabel = document.getElementById('count-progress1');
    const progressLabel2 = document.getElementById('count-progress2');
    let percent = 0;
    const targetPercent = 95;
    const duration = 3000; 
    const increment = 1;
    
    let countJourneys = 0;
    const targetJourneys = 78;

    function updateProgress() {
        progressLabel.textContent = "Poziom zadowolenia: " + percent + '%';
        if (percent < targetPercent) {
            percent += increment;
        } else {
            clearInterval(progressInterval);
        }  
    }

    function updateProgress2() {
        progressLabel2.textContent = "Liczba dostepnych wycieczek: " + countJourneys;
            if (countJourneys < targetJourneys) {
                countJourneys += increment;
            } else {
                clearInterval(progressInterval2);
            }
    }
    const progressInterval = setInterval(updateProgress, duration / (targetPercent / increment));
    const progressInterval2 = setInterval(updateProgress2, duration / (targetJourneys / increment));

    updateProgress();
    updateProgress2();
});