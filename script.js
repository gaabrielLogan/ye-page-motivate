document.addEventListener('DOMContentLoaded', () => {
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
