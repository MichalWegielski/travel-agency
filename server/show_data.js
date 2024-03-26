document.addEventListener('DOMContentLoaded', function () {
    fetch('../server/show_opinions.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Błąd sieciowy');
            }
            return response.json();
        })
        .then(data => {
            const opinionContainer = document.getElementById('comment');
            data.forEach(opinia => {
                const opinionElement = document.createElement('div');
                opinionElement.classList.add('opinion');

                const dateWithoutTime = new Date(opinia['data_opublikowania']).toLocaleDateString('pl-PL');

                opinionElement.innerHTML =
                    `<span class="user-name">${opinia['autor']}</span>
                     <span class="add-date">Dodano: ${dateWithoutTime}</span>
                     <p class="user-opinion">${opinia['opinia']}</p>
                     <div class="opinion-separator"></div>`;
                opinionContainer.appendChild(opinionElement);
            });
        })
        .catch(error => {
            console.error('Błąd:', error);
        });
});
