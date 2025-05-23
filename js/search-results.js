const sampleBooks = [
    {
        id: 1,
        title: "Princi i Vogël",
        author: "Antoine de Saint-Exupéry",
        category: "classic",
        image: "images/class.jpg",
        description: "Një roman filozofik për të gjithë moshat."
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        category: "classic",
        image: "images/moderne.jpg",
        description: "Një distopi e shkruar në vitin 1949."
    },
    {
        id: 3,
        title: "Harry Potter dhe Guri Filozofal",
        author: "J.K. Rowling",
        category: "children",
        image: "images/teen.png",
        description: "Historia e Harry Potter dhe aventurës së tij në shkollën e magjisë Hogwarts."
    },
    {
        id: 4,
        title: "Ana Karenina",
        author: "Leo Tolstoy",
        category: "classic",
        image: "images/class.jpg",
        description: "Një roman klasik rreth dashurisë, tradhtisë dhe shoqërisë ruse."
    },
    {
        id: 5,
        title: "Përrallat e Grimm",
        author: "Vëllezërit Grimm",
        category: "children",
        image: "images/teen.png",
        description: "Koleksion i përrallave tradicionale gjermane."
    },
    {
        id: 6,
        title: "Planeti i kuq",
        author: " V.M. Rabolu",
        category: "science",
        image: "images/sc.png",
        description: "Herkolubusi ose Planeti i Kuq është pesë ose gjashtë herë më i madh nga Jupiteri, është një gjigant i madh, kështu që asgjë nuk mund ta pengojë apo ta shmangë."
    },
    {
        id: 7,
        title: "Një Dashuri në Ditët e Luftës",
        author: "Ismail Kadare",
        category: "modern",
        image: "images/moderne.jpg",
        description: "Roman modern shqiptar rreth dashurisë gjatë periudhës së luftës."
    },
    {
        id: 8,
        title: "Përralla nga Shqipëria",
        author: "Robert Elsie",
        category: "children",
        image: "images/teen.png",
        description: "Koleksion i përrallave tradicionale shqiptare."
    },
    {
        id: 9,
        title: "Kënga e Rolandit",
        author: "Anonim",
        category: "classic",
        image: "images/class.jpg",
        description: "Poemë epike franceze e mesjetës."
    },
    {
        id: 10,
        title: "Teoria e Relativitetit",
        author: "Albert Einstein",
        category: "science",
        image: "images/sc.png",
        description: "Vepra revolucionare mbi teorinë e relativitetit."
    },
    {
        id: 11,
        title: "Kronika në Gur",
        author: "Ismail Kadare",
        category: "modern",
        image: "images/moderne.jpg",
        description: "Roman modern shqiptar rreth historisë dhe identitetit."
    },
    {
        id: 12,
        title: "Përralla nga Bota",
        author: "Hans Christian Andersen",
        category: "children",
        image: "images/teen.png",
        description: "Koleksion i përrallave nga të gjithë bota."
    },
    {
        id: 13,
        title: "Fizika e Së Ardhmes",
        author: "Michio Kaku",
        category: "science",
        image: "images/sc.png",
        description: "Një vështrim në zhvillimet e ardhshme të shkencës."
    }
];


let currentPage = 1;
const itemsPerPage = 12;
let currentResults = [];

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('q');
    
    if (searchQuery) {
        document.getElementById('searchInput').value = searchQuery;
        performSearch();
    }

    // Add event listeners for filters
    document.getElementById('categoryFilter').addEventListener('change', performSearch);
    document.getElementById('sortFilter').addEventListener('change', performSearch);
});

// Perform search
function performSearch() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;
    const sortFilter = document.getElementById('sortFilter').value;

    // Filter books based on search query and category
    currentResults = sampleBooks.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchQuery) ||
                            book.author.toLowerCase().includes(searchQuery) ||
                            book.description.toLowerCase().includes(searchQuery);
        const matchesCategory = !categoryFilter || book.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });

    // Sort results
    switch (sortFilter) {
        case 'newest':
            currentResults.sort((a, b) => b.id - a.id);
            break;
        case 'oldest':
            currentResults.sort((a, b) => a.id - b.id);
            break;
        case 'title':
            currentResults.sort((a, b) => a.title.localeCompare(b.title));
            break;
        // 'relevance' is default order
    }

    // Reset to first page and display results
    currentPage = 1;
    displayResults();
}

// Display search results
function displayResults() {
    const resultsContainer = document.getElementById('searchResults');
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedResults = currentResults.slice(startIndex, endIndex);

    if (currentResults.length === 0) {
        resultsContainer.innerHTML = `
            <div class="no-results">
                <i class="bi bi-search"></i>
                <h3>Nuk u gjet asnjë rezultat</h3>
                <p>Ju lutemi provoni me fjalë të tjera kërkimi</p>
            </div>
        `;
    } else {
        resultsContainer.innerHTML = paginatedResults.map(book => `
            <div class="book-card">
                <img src="${book.image}" alt="${book.title}" class="book-image">
                <div class="book-info">
                    <h3 class="book-title">${book.title}</h3>
                    <p class="book-author">${book.author}</p>
                    <span class="book-category">${getCategoryName(book.category)}</span>
                </div>
            </div>
        `).join('');
    }

    updatePagination();
}

// Update pagination controls
function updatePagination() {
    const totalPages = Math.ceil(currentResults.length / itemsPerPage);
    const paginationContainer = document.getElementById('pagination');
    
    if (totalPages <= 1) {
        paginationContainer.innerHTML = '';
        return;
    }

    let paginationHTML = '';
    
    // Previous button
    paginationHTML += `
        <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="changePage(${currentPage - 1})" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </a>
        </li>
    `;

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `
            <li class="page-item ${currentPage === i ? 'active' : ''}">
                <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
            </li>
        `;
    }

    // Next button
    paginationHTML += `
        <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="changePage(${currentPage + 1})" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
            </a>
        </li>
    `;

    paginationContainer.innerHTML = paginationHTML;
}

// Change page
function changePage(page) {
    if (page < 1 || page > Math.ceil(currentResults.length / itemsPerPage)) {
        return;
    }
    currentPage = page;
    displayResults();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Get category name in Albanian
function getCategoryName(category) {
    const categories = {
        'classic': 'Letërsi Klasike',
        'modern': 'Romane Modern',
        'children': 'Fëmijë & Adoleshentë',
        'science': 'Filozofi & Shkencë'
    };
    return categories[category] || category;
} 