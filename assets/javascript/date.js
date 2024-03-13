document.addEventListener("DOMContentLoaded", function() {
    let currentDateElement = document.getElementById('current-date');
    let currentDate = new Date();

    let polishDaysOfWeek = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
    let polishMonths = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];

    let dayOfWeek = polishDaysOfWeek[currentDate.getDay()];
    let dayOfMonth = currentDate.getDate();
    let month = polishMonths[currentDate.getMonth()];
    let year = currentDate.getFullYear();

    let polishDate = dayOfWeek + ', ' + dayOfMonth + ' ' + month + ' ' + year;

    currentDateElement.innerHTML = "Dziś jest: " + polishDate;
});