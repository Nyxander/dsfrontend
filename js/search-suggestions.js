// Sample book titles for suggestions (replace with actual API calls in production)
const bookTitles = [
    "Princi i Vogël",
    "1984",
    "Harry Potter dhe Guri Filozofal",
    "Një Histori e Shkurtër e Kohës",
    "Ana Karenina",
    "Përrallat e Grimm",
    "Planeti i kuq",
    "Një Dashuri në Ditët e Luftës",
    "Përralla nga Shqipëria",
    "Kënga e Rolandit",
    "Teoria e Relativitetit",
    "Kronika në Gur",
    "Përralla nga Bota",
    "Fizika e Së Ardhmes",
    "Dëshmorët e Kombit"
];

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-input');
    const searchBar = document.querySelector('.search-bar');
    
    const suggestionsContainer = document.createElement('div');
    suggestionsContainer.className = 'search-suggestions';
    searchBar.appendChild(suggestionsContainer);

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        
        if (query.length < 2) {
            suggestionsContainer.style.display = 'none';
            return;
        }

        const suggestions = bookTitles.filter(title => 
            title.toLowerCase().includes(query)
        ).slice(0, 5); 

        if (suggestions.length > 0) {
            suggestionsContainer.innerHTML = suggestions.map(suggestion => `
                <div class="suggestion-item" onclick="selectSuggestion('${suggestion}')">
                    <i class="bi bi-search"></i>
                    <span>${suggestion}</span>
                </div>
            `).join('');
            suggestionsContainer.style.display = 'block';
        } else {
            suggestionsContainer.style.display = 'none';
        }
    });

    // Hide suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchBar.contains(e.target)) {
            suggestionsContainer.style.display = 'none';
        }
    });
});

// Function to select a suggestion
function selectSuggestion(suggestion) {
    const searchInput = document.querySelector('.search-input');
    searchInput.value = suggestion;
    document.querySelector('.search-suggestions').style.display = 'none';
    
    // Submit the form
    searchInput.closest('form').submit();
} 