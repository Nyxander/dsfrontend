const sampleBooks = 
[
  { id: 1, title: "Don Kishoti", author: "Miguel de Cervantes", category: "classic", image: "images/books/classic1.png", description: "Një nga romanet më të famshme të letërsisë botërore, që ndjek aventurat e Don Kishotit dhe Sanço Panços." },
  { id: 2, title: "Ana Karenina", author: "Lev Tolstoi", category: "classic", image: "images/books/classic2.png", description: "Një roman klasik rreth dashurisë, tradhtisë dhe shoqërisë ruse." },
  { id: 13, title: "Krim dhe Ndëshkm", author: "Fyodor Dostoevsky", category: "classic", image: "images/books/classic3.png", description: "Një roman i thellë psikologjik mbi fajin, pendesën dhe shpëtimin." },
  { id: 14, title: "Zonja Bovari", author: "Gustave Flaubert", category: "classic", image: "images/books/classic4.png", description: "Historia tragjike e Emës, një grua që kërkon dashuri dhe kuptim përtej jetës së saj të zakonshme." },
  { id: 15, title: "Krenari dhe paragjykim", author: "Jane Austen", category: "classic", image: "images/books/classic5.png", description: "Një roman i njohur për humorin dhe vëzhgimin e hollë të shoqërisë angleze." },
  { id: 16, title: "Uliksi", author: "James Joyce", category: "classic", image: "images/books/classic6.png", description: "Një kryevepër moderniste që ndjek një ditë në jetën e Leopold Bloom në Dublin." },
  { id: 37, title: "Vëllezërit Karamazov vol. 1", author: "Fyodor Dostoevsky", category:"classic", image: "images/books/classic7.png", price: "1,400 ALL", rating: 5.0, description: "Nëse do të mëkatosh vetë dhe do të pikëllohesh deri në vdekje për mëkatet e tua apo për ndonjë mëkat të rastësishëm, atëherë gëzohu për tjetrin, gëzohu për të drejtin, për atë ..." },
  { id: 38,
      title: "In Search Of Lost Time Volume 1 - The Way By Swann's",
      category:"classic",
      author: "Marcel Proust",
      image: "images/books/classic8.png",
      price: "1,200 ALL",
      rating: 4.7,
      description: "One of the greatest, most entertaining reading experiences in any language, Marcel Proust's In Search of Lost Time Vol. 1: The Way by Swann's is published in a new translation from the French by Lydia ..." },

  { id: 3, title: "1984", author: "George Orwell", category: "modern", image: "images/books/modern1.jpg", description: "Një distopi e shkruar në vitin 1949, që përshkruan një shoqëri të kontrolluar nga një regjim totalitar." },
  { id: 4, title: "Getsbi i Madh", author: "F. Scott Fitzgerald", category: "modern", image: "images/books/modern2.jpg", description: "Një roman për ëndrrën amerikane, dashurinë dhe humbjen në vitet 1920." },
  { id: 17, title: "Njëqind Vjet Vetmi", author: "Gabriel García Márquez", category: "modern", image: "images/books/modern3.jpg", description: "Saga magjike e familjes Buendía në qytetin imagjinar të Macondo." },
  { id: 18, title: "Lolita", author: "Vladimir Nabokov", category: "modern", image: "images/books/modern4.jpg", description: "Një thriller psikologjik rreth imoralitetit, obsesionit dhe abuzimit seksual." },
  { id: 19, title: "Brave New World", author: "Aldous Huxley", category: "modern", image: "images/books/modern5.jpg", description: "Një roman distopik që sfidon normat sociale dhe teknologjike." },
  { id: 20, title: "The Alchimist", author: "Paulo Coelho", category: "modern", image: "images/books/modern6.jpg", description: "Një tregim frymëzues për një bari që ndjek ëndrrën e tij për të gjetur një thesar." },
  { id: 39, title: "Veronika vendos të vdesë", author: "Paulo Coelho",
    category: "modern",
    image: "images/books/modern7.jpg", price: "1,100 ALL", rating: 4.6,
    description: "“Një libër shumë origjinal, prekës dhe, në fund të fundit, inkurajues.”"
},
  { id: 40, title: "Kafka në breg", author: "Haruki Murakami",
    category: "modern",
    image: "images/books/modern8.jpg",
    price: "1,600 ALL", rating: 4.9,
    description: "Kafka Tamura, një i ri pesëmbëdhjetëvjeçar, largohet nga shtëpia me dëshirën edhe t'i shmanget profecisë edipiane të të atit, edhe të kërkojë motrën dhe nënën e tij të humbur prej kohesh."
  },

{ id: 5, title: "Harry Potter dhe Guri Filozofal", author: "J.K. Rowling", category: "children", image: "images/books/children1.jpg", description: "Fillimi magjik i një sage ku një djalë zbulon se është magjistar dhe nis aventurën e tij." },
  { id: 6, title: "The Hobbit", author: "J.R.R. Tolkien", category: "children", image: "images/books/children2.jpg", description: "Një udhëtim epik i Bilbo Baggins për të rifituar thesarin nga dragoi Smaug." },
  { id: 21, title: "Charlie dhe Fabrika e Çokollatës", author: "Roald Dahl", category: "children", image: "images/books/children3.jpg", description: "Një djalë i varfër fiton një biletë të artë dhe viziton fabrikën magjike të çokollatës." },
  { id: 22, title: "Matilda", author: "Roald Dahl", category: "children", image: "images/books/children4.jpg", description: "Një vajzë e zgjuar me aftësi të jashtëzakonshme përballet me një drejtoreshë të ligë." },
  { id: 23, title: "Artemis Fowl", author: "Eoin Colfer", category: "children", image: "images/books/children5.jpg", description: "Një gjeni kriminel 12-vjeçar përballet me një botë sekrete të elfeve." },
  { id: 24, title: "The Chronicles of Narnia vol. 1", author: "C.S. Lewis", category: "children", image: "images/books/children6.jpg", description: "Katër fëmijë zbulojnë një botë magjike përmes një gardërobe." },
  { id: 41,
    title: "Përrallat e Andersenit", category: "children",
    author: "Hans Christian Andersen", image: "images/books/children7.jpg", price: "900 ALL", rating: 4.8,
    description: "Nje koleksion i perrallave me te famshme ne bote. Keto te autorit H. K. Andersen."
},
  { id: 42, title: "Peter Pan", author: "J.M. Barrie", image: "images/books/children8.jpg",
    price: "1,000 ALL", rating: 4.7, category: "children",
    description: "Second to the right ...and then straight on till morning!' Desperate to hear bedtime stories, Peter Pan waits outside the nursery window of Wendy, John and Michael Darling. "
},

  { id: 7, title: "A Brief History of Time", author: "Stephen Hawking", category: "science", image: "images/books/science1.jpg", description: "Një udhërrëfyes për universin që shpjegon konceptet komplekse të kozmologjisë." },
  { id: 8, title: "The Selfish Gene", author: "Richard Dawkins", category: "science", image: "images/books/science2.jpg", description: "Një teori që shpjegon evoluimin përmes perspektivës së gjeneve." },
  { id: 25, title: "Sapiens", author: "Yuval Noah Harari", category: "science", image: "images/books/science3.jpg", description: "Një histori e njerëzimit, nga Homo sapiens deri në inteligjencën artificiale." },
  { id: 26, title: "IN SEARCH OF SCHRODINGER'S CAT", author: "John Gribbins", category: "science", image: "images/books/science4.jpg", description: "Një eksplorim i teorisë kuantike dhe mistereve të saj." },
  { id: 27, title: "Cosmos", author: "Dr. Becky Smethurst", category: "science", image: "images/books/science5.jpg", description: "Një udhëtim përmes universit me sqarime të thjeshta mbi galaktikat." },
  { id: 28, title: "ON THE ORIGIN OF TIME", author: "THOMAS HERTOG", category: "science", image: "images/books/science6.jpg", description: "Një vështrim mbi kohën dhe universin, bazuar në punën me Stephen Hawking." },
  { id: 43, title: "Astrophysics for People in a Hurry", category:"science", author: "Neil deGrasse Tyson", image: "images/books/science7.jpg", price: "1,700 ALL", rating: 4.6 , description: "What is the nature of space and time? How do we fit within the universe? How does the universe fit within us? There’s no better guide through these mind-expanding questions than acclaimed astrophysicist and best-selling author Neil deGrasse Tyson."},
  {id: 44, title: "The Gene: An Intimate History",  category:"science", author: "Siddhartha Mukherjee", image: "images/books/science8.jpg", price: "2,200 ALL", rating: 4.8, description:"From the Pulitzer Prize-winning, bestselling author of The Emperor of All Maladies--a magnificent history of the gene and a response to the defining question of the future: What becomes of being human when we learn to \"read\" and \"write\" our own genetic information?\n"},
  { id: 9, title: "The Da Vinci Code", author: "Dan Brown", category: "bestseller", image: "images/books/best1.jpg", description: "Një thriller plot mistere për një sekret të fshehur nga Kisha Katolike." },
  { id: 10, title: "The Handmaid's Tale", author: "Margaret Atwood", category: "bestseller", image: "images/books/best2.jpg", description: "Një tregim distopik për një shoqëri ku gratë trajtohen si pronë." },
  { id: 29, title: "The Kite Runner", author: "Khaled Hosseini", category: "bestseller", image: "images/books/best3.jpg", description: "Një histori prekëse për miqësinë, fajin dhe faljen në Afganistan." }
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
                <a href= "./product-detail.html?id=${book.id}">
                <img src="${book.image}" alt="${book.title}" class="book-image">
                </a>     
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