document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-music');

    const playAudio = () => {
        audio.play().catch(error => {
            console.log('Reprodução automática bloqueada:', error);
        });
    };
    
    playAudio();

    document.body.addEventListener('click', () => {
        playAudio();
    });

    const apiUrl = 'https://api.kanye.rest/';
    const quoteElement = document.getElementById('quote');
    const newQuoteButton = document.getElementById('new-quote');

    function fetchQuote() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                quoteElement.textContent = data.quote;
            })
            .catch(error => {
                console.error('Erro ao consumir a API:', error);
                quoteElement.textContent = 'Erro ao carregar a citação.';
            });
    }

    newQuoteButton.addEventListener('click', fetchQuote);

    fetchQuote();
});
