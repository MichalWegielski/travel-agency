function validateForm() {
    let nameInput = document.getElementById('user-name');
    let nameValue = nameInput.value.trim();

    if (nameValue === '') {
        alert('Proszę wprowadzić imię i nazwisko.');
        return false;
    }

    let nameRegex = /^[A-Za-z ]+ [A-Za-z]+$/;
    if (!nameRegex.test(nameValue)) {
        alert('Proszę wprowadzić poprawne imię i nazwisko (tylko litery i spacje).');
        return false;
    }

    let names = nameValue.split(' ');
    for (var i = 0; i < names.length; i++) {
        if (names[i] !== '' && names[i][0] !== names[i][0].toUpperCase()) {
            alert('Imię i nazwisko powinny zaczynać się od dużej litery.');
            return false;
        }
    }

    return true;
}