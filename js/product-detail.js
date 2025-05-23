const books = {
    "princi-i-vogel": {
        id: "princi-i-vogel",
        title: "Princi i Vogël",
        author: "Antoine de Saint-Exupéry",
        category: "classic",
        image: "images/class.jpg",
        description: "Një roman filozofik për të gjithë moshat që na tregon historinë e një princi të vogël që udhëton nga planeti i tij në Tokë. Përmes aventurave të tij, lexuesit mësojnë për dashurinë, miqësinë dhe kuptimin e vërtetë të jetës.",
        isbn: "978-99943-0-123-4",
        language: "Shqip",
    },
    "1984": {
        id: "1984",
        title: "1984",
        author: "George Orwell",
        category: "classic",
        image: "images/moderne.jpg",
        description: "Një distopi e shkruar në vitin 1949 që përshkruan një shoqëri totalitariste ku çdo aspekt i jetës së njerëzve kontrollohet nga një qeveri e fuqishme. Romani eksploron temat e kontrollit, cenzurës dhe humbjes së lirisë personale.",
        isbn: "978-99943-0-124-5",
        language: "Shqip",
    },
   "harry-potter-dhe-guri-filozofal":{
    id: 3,
    title: "Harry Potter dhe Guri Filozofal",
    author: "J.K. Rowling",
    category: "children",
    image: "images/teen.png",
    description: "Historia e Harry Potter dhe aventurës së tij në shkollën e magjisë Hogwarts.",
    isbn: "9992747633",
    language: "Shqip",

},
    "ana-karenina":{
id: 4,
title: "Ana Karenina",
author: "Leo Tolstoy",
category: "classic",
image: "images/class.jpg",
description: "Një roman klasik rreth dashurisë, tradhtisë dhe shoqërisë ruse.",
isbn: "9789928838193",
language:"Shqip"
},

"perralla-grim":{
id: 5,
title: "Përrallat e Vëllezërve Grimm",
author: "Vëllezërit Grimm",
category: "children",
image: "images/teen.png",
description: "Koleksion i përrallave tradicionale gjermane.",
isbn:"9789995621971",
language:"Shqip"
},
"planeti-i-kuq":{
    id: 6,
    title: "Planeti i kuq",
    author: " V.M. Rabolu",
    category: "science",
    image: "images/sc.png",
    description: "Herkolubusi ose Planeti i Kuq është pesë ose gjashtë herë më i madh nga Jupiteri, është një gjigant i madh, kështu që asgjë nuk mund ta pengojë apo ta shmangë.",
    isbn: "9789994333445",
    language:"Shqip"

},
"nje-dashuri-ne-ditet-e-luftes":{
id: 7,
title: "Pallati i endrrave",
author: "Ismail Kadare",
category: "modern",
image: "images/moderne.jpg",
description: "Në një shtet totalitar i cili në fillim ngjason me Perandorinë Osmane, ndodhet “Tabir Saraj” (Pallati i ëndrrave), një institucion/organ shtetëror ku mblidheshin dhe analizoheshin ëndrrat. Mark Alemi, personazhi kryesor i veprës, ishte djalë i familjes të Qypryllinjve, pra një familje të pushtetshme dhe të pasur por që në ato momente nuk po kalonin një fazë të mirë.",
isbn: "9789995687076",
language:"Shqip"

},
"perralla-nga-shqiperia":{
id: 8,
title: "Përralla shqiptare",
author: "Gaqo Bushaka",
category: "children",
image: "images/teen.png",
description: "Koleksion i përrallave tradicionale shqiptare.",
isbn: "9789995685836",
language:"Shqip"

},
"epi-gilgameshit":{
id: 9,
title: "Epi Gilgameshit",
author: "Anonim",
category: "classic",
image: "images/class.jpg",
description: "Poema epike me e vjeter se Iliada.",
isbn: "9789995617269",
language: "Shqip" 
},
"relativity-special-general-theory":{
id: 10,
title: "Relativity - The Special & General Theory",
author: "Albert Einstein",
category: "science",
image: "images/sc.png",
description: "Vepra revolucionare mbi teorinë e relativitetit.",
isbn: "0691166331",
language: "English"
},
"kronike-ne-gur":{
id: 11,
title: "Kronike në Gur",
author: "Ismail Kadare",
category: "modern",
image: "images/moderne.jpg",
description: "Roman modern shqiptar rreth historisë dhe identitetit.",
isbn:"9928-186-67-6",
language:"Shqip"
},

"perralla-nga-bota":{
id: 12,
title: "Përralla nga Bota",
author: "Hans Christian Andersen",
category: "children",
image: "images/teen.png",
description: "Koleksion i përrallave nga të gjithë bota.",
isbn:"9789928332097",
language:"Shqip"
},
"fizika-e-se-ardhmes":{
id: 13,
title: "Fizika e Së Ardhmes",
author: "Michio Kaku",
category: "science",
image: "images/sc.png",
description: "Një vështrim në zhvillimet e ardhshme të shkencës.",
isbn:"9789928332097",
language:"Shqip"
}

};

function getBookIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

function loadBookDetails() {
    const bookId = getBookIdFromUrl();
    const book = books[bookId];

    if (!book) {
        document.querySelector('.product-detail-container').innerHTML = `
            <div class="container text-center py-5">
                <h2>Libri nuk u gjet</h2>
                <p>Ju lutemi kthehuni te <a href="./search-results.html">faqja e kërkimit</a></p>
            </div>
        `;
        return;
    }

    document.title = `${book.title} - Library`;

    document.getElementById('bookTitle').textContent = book.title;

    document.getElementById('bookImage').src = book.image;
    document.getElementById('bookImage').alt = book.title;
    document.getElementById('bookTitle').textContent = book.title;
    document.getElementById('bookAuthor').textContent = book.author;
    document.getElementById('bookCategory').textContent = getCategoryName(book.category);
    document.getElementById('bookDescription').textContent = book.description;
    document.getElementById('bookIsbn').textContent = book.isbn;
    document.getElementById('bookLanguage').textContent = book.language;
    document.getElementById('bookPages').textContent = book.pages;
    document.getElementById('bookYear').textContent = book.year;
    document.getElementById('bookDimensions').textContent = book.dimensions;

    // Load related books
    loadRelatedBooks(book.category, book.id);
}

// Load related books
function loadRelatedBooks(category, currentBookId) {
    const relatedBooks = Object.values(books).filter(book => 
        book.category === category && book.id !== currentBookId
    ).slice(0, 3);

    const relatedBooksContainer = document.getElementById('relatedBooks');
    
    if (relatedBooks.length === 0) {
        relatedBooksContainer.parentElement.style.display = 'none';
        return;
    }

    relatedBooksContainer.innerHTML = relatedBooks.map(book => `
        <div class="col-md-4">
            <a href="./product-detail.html?id=${book.id}" class="text-decoration-none">
                <div class="related-book-card">
                    <img src="${book.image}" alt="${book.title}" class="related-book-image">
                    <div class="related-book-info">
                        <h3 class="related-book-title">${book.title}</h3>
                        <p class="related-book-author">${book.author}</p>
                    </div>
                </div>
            </a>
        </div>
    `).join('');
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

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    loadBookDetails();

    // Add event listeners for buttons
    document.querySelector('.reserve-btn').addEventListener('click', () => {
        // Handle reservation (to be implemented)
        alert('Funksionaliteti i rezervimit do të implementohet së shpejti!');
    });

    document.querySelector('.share-btn').addEventListener('click', () => {
        // Handle sharing (to be implemented)
        if (navigator.share) {
            navigator.share({
                title: document.getElementById('bookTitle').textContent,
                text: `Shiko këtë libër: ${document.getElementById('bookTitle').textContent}`,
                url: window.location.href
            });
        } else {
            alert('Kopjo URL-në për ta ndarë me të tjerët!');
        }
    });
}); 