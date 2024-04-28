const searchButton = document.getElementById('searchButton');
const errorDiv = document.getElementById('error');
const loadingDiv = document.getElementById('loading');
const resultDiv = document.getElementById('result');

searchButton.addEventListener('click', async () => {
    const entity = document.getElementById('entity').value;
    const id = document.getElementById('id').value;
    const finallyResult = document.getElementById('finally');

    errorDiv.textContent = '';
    loadingDiv.classList.add('loading');

    try {
        const response = await fetch(`https://swapi.py4e.com/api/${entity}/${id}`);
        
        if (!response.ok) {
            throw new Error(`Request failed: ${response.status}`);
        }
        
        const data = await response.json();
        resultDiv.textContent = JSON.stringify(data.name);
    } catch (error) {
        errorDiv.textContent = error.message;
    } finally {
        loadingDiv.classList.remove('loading');
        finallyResult.textContent = "Хотите найти что-нибудь еще?";
    }
});
