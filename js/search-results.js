
const sampleBooks = [
    // Classic
    {
        id: 1,
        title: "Don Kishoti",
        author: "Miguel de Cervantes",
        category: "classic",
        image: "images/books/classic1.png",
        price: "1,200 ALL",
        rating: 4.8,
        description: "Një nga romanet më të famshme të letërsisë botërore, që ndjek aventurat e Don Kishotit dhe Sanço Panços.",
        isbn: "978-99943-0-124-5",
        language: "Shqip"
    },
    {
        id: 2,
        title: "Ana Karenina",
        author: "Lev Tolstoi",
        category: "classic",
        image: "images/books/classic2.png",
        price: "1,500 ALL",
        rating: 4.7,
        description: "Një roman klasik rreth dashurisë, tradhtisë dhe shoqërisë ruse.",
        isbn: "978-99943-0-124-5",
        language: "Shqip"
    },
    {
        id: 13,
        title: "Krim dhe Ndëshkim",
        author: "Fyodor Dostoevsky",
        category: "classic",
        image: "images/books/classic3.png",
        price: "1,300 ALL",
        rating: 4.9,
        description: "Një roman i thellë psikologjik mbi fajin, pendesën dhe shpëtimin.",
        isbn: "978-99943-0-124-5",
        language: "Shqip"
    },
    {
        id: 14,
        title: "Zonja Bovari",
        author: "Gustave Flaubert",
        category: "classic",
        image: "images/books/classic4.png",
        price: "1,400 ALL",
        rating: 4.6,
        description: "Historia tragjike e Emës, një grua që kërkon dashuri dhe kuptim përtej jetës së saj të zakonshme.",
        isbn: "978-99943-0-124-5",
        language: "Shqip"
    },
    {
        id: 15,
        title: "Krenari dhe paragjykim",
        author: "Jane Austen",
        category: "classic",
        image: "images/books/classic5.png",
        price: "1,100 ALL",
        rating: 4.9,
        description: "Një roman i njohur për humorin dhe vëzhgimin e hollë të shoqërisë angleze.",
        isbn: "978-99943-0-124-5",
        language: "Shqip"
    },
    {
        id: 16,
        title: "Uliksi",
        author: "James Joyce",
        category: "classic",
        image: "images/books/classic6.png",
        price: "1,600 ALL",
        rating: 4.5,
        description: "Një kryevepër moderniste që ndjek një ditë në jetën e Leopold Bloom në Dublin.",
        isbn: "978-99943-0-124-5",
        language: "Shqip"
    },

    // Modern
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        category: "modern",
        image: "images/books/modern1.jpg",
        price: "1,300 ALL",
        rating: 4.8,
        description: "Një distopi e shkruar në vitin 1949, që përshkruan një shoqëri të kontrolluar nga një regjim totalitar.",
        isbn: "978-99943-0-124-5",
        language: "Shqip"
    },
    {
        id: 4,
        title: "Getsbi i Madh",
        author: "F. Scott Fitzgerald",
        category: "modern",
        image: "images/books/modern2.jpg",
        price: "1,200 ALL",
        rating: 4.7,
        description: "Një roman për ëndrrën amerikane, dashurinë dhe humbjen në vitet 1920.",
        isbn: "978-99943-0-124-5",
        language: "Shqip"
    },
    {
        id: 17,
        title: "Njëqind Vjet Vetmi",
        author: "Gabriel García Márquez",
        category: "modern",
        image: "images/books/modern3.jpg",
        price: "1,400 ALL",
        rating: 4.9,
        description: "Saga magjike e familjes Buendía në qytetin imagjinar të Macondo.",
        isbn: "978-99943-0-124-5",
        language: "Shqip"
    },
    {
        id: 18,
        title: "Lolita",
        author: "Vladimir Nabokov",
        category: "modern",
        image: "images/books/modern4.jpg",
        price: "1,500 ALL",
        rating: 4.6,
        description: "Një thriller psikologjik rreth imoralitetit, obsesionit dhe abuzimit seksual. I rrëfyer nga narratori më pak i besueshëm që keni për të parë ndonjëherë.",
        isbn: "978-99943-0-124-5",
        language: "Shqip"
    },
    {
        id: 19,
        title: "Brave New World",
        author: "Aldous Huxley",
        category: "modern",
        image: "images/books/modern5.jpg",
        price: "1,300 ALL",
        rating: 4.7,
        description: "Një roman distopik që sfidon normat sociale dhe teknologjike, duke imagjinuar një botë ku lumturia kontrollohet përmes shkencës dhe manipulimit.",
        isbn: "978-99943-0-124-5",
        language: "Shqip"
    },
    {
        id: 20,
        title: "The Alchimist",
        author: "Paulo Coelho",
        category: "modern",
        image: "images/books/modern6.jpg",
        price: "1,200 ALL",
        rating: 4.8,
        description: "Një tregim frymëzues për një bari të ri që ndjek ëndrrën e tij për të gjetur një thesar të fshehur, duke zbuluar thesarët e brendshëm në udhëtim.",
        isbn: "978-99943-0-124-5",
        language: "Shqip"
    },

    // Children
    {
        id: 5,
        title: "Harry Potter dhe Guri Filozofal",
        author: "J.K. Rowling",
        category: "children",
        image: "images/books/children1.jpg",
        price: "1,800 ALL",
        rating: 4.9,
        description: "Fillimi magjik i një sage epike ku një djalë zbulon se është magjistar dhe nis aventurën e tij në shkollën Hogwarts.",
        isbn: "978-99943-0-124-5",
        language: "Shqip"
    },
    {
        id: 6,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        category: "children",
        image: "images/books/children2.jpg",
        price: "1,600 ALL",
        rating: 4.8,
        description: "Një udhëtim epik i Bilbo Baggins me xhuxhët për të rifituar thesarin nga dragoi Smaug – një aventurë klasike fantastike.",
        isbn: "978-99943-0-124-5",
        language: "Shqip"
    },
    {
        id: 21,
        title: "Charlie dhe Fabrika e Çokollatës",
        category: "children",
        author: "Roald Dahl",
        image: "images/books/children3.jpg",
        price: "1,200 ALL",
        rating: 4.7,
        description: "Një djalë i varfër fiton një biletë të artë dhe viziton fabrikën e magjishme të çokollatës së Willy Wonka-s.",
        isbn: "978-99943-0-124-5",
        language: "Shqip"
    },
    {
        id: 22,
        title: "Matilda",
        author: "Roald Dahl",
        category: "children",
        image: "images/books/children4.jpg",
        price: "1,200 ALL",
        rating: 4.8,
        description: "Një vajzë e zgjuar me aftësi të jashtëzakonshme përballet me prindërit e saj të padrejtë dhe një drejtoreshë të ligë.",
        isbn: "978-99943-0-124-5",
        language: "Shqip"
    },
    {
        id: 23,
        title: "Artemis Fowl: Thesari i Popullit",
        author: "Eoin Colfer",
        category: "children",
        image: "images/books/children5.jpg",
        price: "800 ALL",
        rating: 4.6,
        description: "Një gjeni kriminel 12-vjeçar përballet me një botë sekrete të elfeve dhe teknologjisë së përparuar.",
        isbn: "978-99943-0-124-5",
        language: "Shqip"
    },
    {
        id: 24,
        title: "The Chronicles of Narnia vol. 1",
        category: "children",
        author: "C.S. Lewis",
        image: "images/books/children6.jpg",
        price: "700 ALL",
        rating: 4.7,
        description: "Katër fëmijë zbulojnë një botë magjike përmes një gardërobe dhe luftojnë për ta shpëtuar atë nga errësira.",
        isbn: "978-99943-0-124-5",
        language: "English"
    },

    // Science

    {
        id: 7,
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        category: "science",
        image: "images/books/science1.jpg",
        price: "1,900 ALL",
        rating: 4.8,
        description: "Një udhërrëfyes për universin që shpjegon konceptet komplekse të kozmologjisë për lexuesit e zakonshëm.",
        isbn: "978-99943-0-124-5",
        language: "English"
    },
    {
        id: 8,
        title: "The Selfish Gene",
        author: "Richard Dawkins",
        category: "science",
        image: "images/books/science2.jpg",
        price: "1,800 ALL",
        rating: 4.7,
        description: "Një teori revolucionare që shpjegon evoluimin përmes perspektivës së gjeneve dhe përzgjedhjes natyrore.",
        isbn: "978-99943-0-124-5",
        language: "English"
    },
    {
        id: 25,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        category: "science",
        image: "images/books/science3.jpg",
        price: "2,000 ALL",
        rating: 4.9,
        description: "Një histori gjithëpërfshirëse e njerëzimit, nga Homo sapiens deri në botën moderne të inteligjencës artificiale.",
        isbn: "978-99943-0-124-5",
        language: "English"
    },
    {
        id: 26,
        title: "IN SEARCH OF SCHRODINGER'S CAT",
        author: "John Gribbins",
        category: "science",
        image: "images/books/science4.jpg",
        price: "1,800 ALL",
        rating: 4.6,
        description: "Një eksplorim i teorisë kuantike dhe mistereve të saj përmes shembullit të famshëm të maces së Schrödinger-it.",
        isbn: "978-99943-0-124-5",
        language: "English"
    },
    {
        id: 27,
        title: "Cosmos",
        author: "Dr. Becky Smethurst",
        category: "science",
        image: "images/books/science5.jpg",
        price: "1,900 ALL",
        rating: 4.8,
        description: "Një udhëtim i jashtëzakonshëm përmes universit me sqarime të thjeshta mbi yjet, galaktikat dhe më shumë.",
        isbn: "978-99943-0-124-5",
        language: "English"
    },
    {
        id: 28,
        title: "ON THE ORIGIN OF TIME",
        author: "THOMAS HERTOG",
        category: "science",
        image: "images/books/science6.jpg",
        price: "2,100 ALL",
        rating: 4.7,
        description: "Një vështrim revolucionar mbi kohën dhe universin, bazuar në bashkëpunimin e autorit me Stephen Hawking.",
        isbn: "978-99943-0-124-5",
        language: "English"
    },


    //best sellers
    {
        id: 9,
        title: "The Da Vinci Code",
        author: "Dan Brown",
        category: "best",
        image: "images/books/best1.jpg",
        price: "1,500 ALL",
        rating: 4.7,
        description: "Një thriller plot mistere që ndjek një profesor simbolike në një ndjekje për një sekret të fshehur nga Kisha Katolike.",
        isbn: "978-99943-0-124-5",
        language: "English"
    },
    {
        id: 10,
        title: "The Handmaid's Tale",
        author: "Margaret Atwood",
        category: "best",
        image: "images/books/best2.jpg",
        price: "1,700 ALL",
        rating: 4.8,
        description: "Një tregim distopik për një shoqëri ku gratë trajtohen si pronë dhe rebelimi lind nga një shërbëtore.",
        isbn: "978-99943-0-124-5",
        language: "English"
    },
    {
        id: 29,
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        category: "best",
        image: "images/books/best3.jpg",
        price: "1,400 ALL",
        rating: 4.9,
        description: "Një histori prekëse për miqësinë, fajin dhe shpengimin në një Afganistan të trazuar.",
        isbn: "978-99943-0-124-5",
        language: "English"
    },
    {
        id: 30,
        title: "The Book Thief",
        author: "Markus Zusak",
        category: "best",
        image: "images/books/best4.jpg",
        price: "1,500 ALL",
        rating: 4.8,
        description: "Një vajzë gjermane gjatë Luftës së Dytë Botërore gjen ngushëllim në libra ndërsa bota e saj shembet.",
        isbn: "978-99943-0-124-5",
        language: "English"
    },
    {
        id: 31,
        title: "Life of Pi",
        author: "Yann Martel",
        category: "best",
        image: "images/books/best5.jpg",
        price: "1,400 ALL",
        rating: 4.7,
        description: "Një histori mbijetese dhe mrekullie për një djalë që lundron në det me një tigër bengalez pas një përmbytjeje.",
        isbn: "978-99943-0-124-5",
        language: "English"
    },
    {
        id: 32,
        title: "The Help",
        author: "Kathryn Stockett",
        category: "best",
        image: "images/books/best6.jpg",
        price: "1,600 ALL",
        rating: 4.8,
        description: "Një roman i fuqishëm mbi marrëdhëniet racore dhe luftën për barazi në Amerikën e viteve '60.",
        isbn: "978-99943-0-124-5",
        language: "English"
    },

];

let currentPage = 1;
const itemsPerPage = 12;
let currentResults = [];

// Initialize search when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Get search query from URL
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('q');
    
    // Set the search input value
    const searchInput = document.querySelector('input[name="q"]');
    if (searchInput) {
        searchInput.value = searchQuery || '';
    }
    
    // Perform initial search
    performSearch();
    
    // Add event listeners for filters
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', performSearch);
    }
    if (sortFilter) {
        sortFilter.addEventListener('change', performSearch);
    }
});

function performSearch() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('q') || '';
    const categoryFilter = document.getElementById('categoryFilter').value;
    const sortFilter = document.getElementById('sortFilter').value;
    
    let filteredBooks = sampleBooks.filter(book => {
        const matchesSearch = searchQuery === '' || 
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.description.toLowerCase().includes(searchQuery.toLowerCase());
        
        const matchesCategory = categoryFilter === '' || book.category === categoryFilter;
        
        return matchesSearch && matchesCategory;
    });
    
    switch(sortFilter) {
        case 'newest':
            filteredBooks.sort((a, b) => b.id - a.id);
            break;
        case 'oldest':
            filteredBooks.sort((a, b) => a.id - b.id);
            break;
        case 'title':
            filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
            break;
    }
    
    displayResults(filteredBooks);
}

function displayResults(books) {
    const resultsContainer = document.getElementById('searchResults');
    
    if (!resultsContainer) return;
    
    if (books.length === 0) {
        resultsContainer.innerHTML = `
            <div class="text-center py-5">
                <h3>Nuk u gjet asnjë rezultat</h3>
                <p>Ju lutemi provoni me fjalë të tjera kërkimi</p>
            </div>
        `;
        return;
    }
    
    let html = '<div class="row">';
    books.forEach(book => {
        html += `
            <div>
                <div class="card h-100">
                    <img src="${book.image}" class="card-img-top" alt="${book.title}" style="height: 300px; object-fit: cover;">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text">${book.author}</p>
                        <p class="card-text">${book.description.substring(0, 100)}...</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <button class="btn btn-palette" onclick="addToCart(${book.id})">
                                Shto në Shportë
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    html += '</div>';
    
    resultsContainer.innerHTML = html;
}

function getCategoryName(category) {
    const categories = {
        'classic': 'Letërsi Klasike',
        'modern': 'Romane Modern',
        'children': 'Fëmijë & Adoleshentë',
        'science': 'Filozofi & Shkencë'
    };
    return categories[category] || category;
} 
