document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();

        let name1 = document.getElementById('name1').value.trim();
        let name2 = document.getElementById('name2').value.trim();
        let email = document.getElementById('email').value.trim();
        let message = document.getElementById('message').value.trim();

        if (name1 === '' || name2 === '' || email === '' || message === '') {
            alert('Proszę wypełnić wszystkie pola formularza.');
            return;
        }

        let namePattern = /^[A-ZŁŚĆŹŻ][a-ząćęłńóśźż]*$/;
        if (!namePattern.test(name1) || !namePattern.test(name2)) {
            alert('Imię i nazwisko powinny zaczynać się od dużej litery i zawierać jedynie litery.');
            return;
        }

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Proszę podać poprawny adres email.');
            return;
        }

        let alertMessage = "Formularz wysłany, dane to:\n"
        alertMessage += 'Imię: ' + name1 + '\n';
        alertMessage += 'Nazwisko: ' + name2 + '\n';
        alertMessage += 'Email: ' + email + '\n';
        alertMessage += 'Wiadomość: ' + message;
        alert(alertMessage);

        document.getElementById('name1').value = '';
        document.getElementById('name2').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    });
});