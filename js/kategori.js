const booksByCategory = {
    classic: {
        title: "LETËRSIA KLASIKE",
        books: [
            {
                id: 1,
                title: "Don Kishoti",
                author: "Miguel de Cervantes",
                image: "images/books/classic1.png",
                price: "1,200 ALL",
                rating: 4.8
            },
            {
                id: 2,
                title: "Ana Karenina",
                author: "Lev Tolstoi",
                image: "images/books/classic2.png",
                price: "1,500 ALL",
                rating: 4.7
            },
            {
                id: 13,
                title: "Krim dhe Ndëshkm",
                author: "Fyodor Dostoevsky",
                image: "images/books/classic3.png",
                price: "1,300 ALL",
                rating: 4.9
            },
            {
                id: 14,
                title: "Zonja Bovari",
                author: "Gustave Flaubert",
                image: "images/books/classic4.png",
                price: "1,400 ALL",
                rating: 4.6
            },
            {
                id: 15,
                title: "Krenari dhe paragjykim",
                author: "Jane Austen",
                image: "images/books/classic5.png",
                price: "1,100 ALL",
                rating: 4.9
            },
            {
                id: 16,
                title: "Uliksi",
                author: "James Joyce",
                image: "images/books/classic6.png",
                price: "1,600 ALL",
                rating: 4.5
            },
            {
                id: 37,
                title: "Vëllezërit Karamazov vol. 1",
                author: "Fyodor Dostoevsky",
                image: "images/books/classic7.png",
                price: "1,400 ALL",
                rating: 5.0
            },
            {
                id: 38,
                title: "In Search Of Lost Time Volume 1 - The Way By Swann's",
                author: "Marcel Proust",
                image: "images/books/classic8.png",
                price: "1,200 ALL",
                rating: 4.7
            }
        ]
    },

    modern: {
        title: "ROMANE MODERN",
        books: [
            {
                id: 3,
                title: "1984",
                author: "George Orwell",
                image: "images/books/modern1.jpg",
                price: "1,300 ALL",
                rating: 4.8
            },
            {
                id: 4,
                title: "Getsbi i Madh",
                author: "F. Scott Fitzgerald",
                image: "images/books/modern2.jpg",
                price: "1,200 ALL",
                rating: 4.7
            },
            {
                id: 17,
                title: "Njëqind Vjet Vetmi",
                author: "Gabriel García Márquez",
                image: "images/books/modern3.jpg",
                price: "1,400 ALL",
                rating: 4.9
            },
            {
                id: 18,
                title: "Lolita",
                author: "Vladimir Nabokov",
                image: "images/books/modern4.jpg",
                price: "1,500 ALL",
                rating: 4.6
            },
            {
                id: 19,
                title: "Brave New World",
                author: "Aldous Huxley",
                image: "images/books/modern5.jpg",
                price: "1,300 ALL",
                rating: 4.7
            },
            {
                id: 20,
                title: "The Alchimist",
                author: "	Paulo Coelho",
                image: "images/books/modern6.jpg",
                price: "1,200 ALL",
                rating: 4.8
            },
            {
                id: 39,
                title: "Veronika vendos të vdesë",
                author: "Paulo Coelho",
                image: "images/books/modern7.jpg",
                price: "1,100 ALL",
                rating: 4.6
            },
            {
                id: 40,
                title: "Kafka në breg",
                author: "Haruki Murakami",
                image: "images/books/modern8.jpg",
                price: "1,600 ALL",
                rating: 4.9
            }

        ]
    },

    children: {
        title: "FËMIJË & ADOLESHENTË",
        books: [
            {
                id: 5,
                title: "Harry Potter dhe Guri Filozofal",
                author: "J.K. Rowling",
                image: "images/books/children1.jpg",
                price: "1,800 ALL",
                rating: 4.9
            },
            {
                id: 6,
                title: "The Hobbit",
                author: "J.R.R. Tolkien",
                image: "images/books/children2.jpg",
                price: "1,600 ALL",
                rating: 4.8
            },
            {
                id: 21,
                title: "Charlie dhe Fabrika e Çokollatës",
                author: "Roald Dahl",
                image: "images/books/children3.jpg",
                price: "1,200 ALL",
                rating: 4.7
            },
            {
                id: 22,
                title: "Matilda",
                author: "Roald Dahl",
                image: "images/books/children4.jpg",
                price: "1,200 ALL",
                rating: 4.8
            },
            {
                id: 23,
                title: "Artemis Fowl",
                author: "Eoin Colfer",
                image: "images/books/children5.jpg",
                price: "800 ALL",
                rating: 4.6
            },
            {
                id: 24,
                title: "The Chronicles of Narnia vol. 1",
                author: "C.S. Lewis",
                image: "images/books/children6.jpg",
                price: "700 ALL",
                rating: 4.7
            },
            {
                id: 41,
                title: "Përrallat e Andersenit",
                author: "Hans Christian Andersen",
                image: "images/books/children7.jpg",
                price: "900 ALL",
                rating: 4.8
            },
            {
                id: 42,
                title: "Peter Pan",
                author: "J.M. Barrie",
                image: "images/books/children8.jpg",
                price: "1,000 ALL",
                rating: 4.7
            }
        ]
    },

    science: {
        title: "FILOZOFI & SHKENCË",
        books: [
            {
                id: 7,
                title: "A Brief History of Time",
                author: "Stephen Hawking",
                image: "images/books/science1.jpg",
                price: "1,900 ALL",
                rating: 4.8
            },
            {
                id: 8,
                title: "The Selfish Gene",
                author: "Richard Dawkins",
                image: "images/books/science2.jpg",
                price: "1,800 ALL",
                rating: 4.7
            },
            {
                id: 25,
                title: "Sapiens",
                author: "Yuval Noah Harari",
                image: "images/books/science3.jpg",
                price: "2,000 ALL",
                rating: 4.9
            },
            {
                id: 26,
                title: "IN SEARCH OF SCHRODINGER'S CAT",
                author: "John Gribbins",
                image: "images/books/science4.jpg",
                price: "1,800 ALL",
                rating: 4.6
            },
            {
                id: 27,
                title: "Cosmos",
                author: "Dr. Becky Smethurst",
                image: "images/books/science5.jpg",
                price: "1,900 ALL",
                rating: 4.8
            },
            {
                id: 28,
                title: "ON THE ORIGIN OF TIME",
                author: "THOMAS HERTOG",
                image: "images/books/science6.jpg",
                price: "2,100 ALL",
                rating: 4.7
            },
            {
                id: 43,
                title: "Astrophysics for People in a Hurry",
                author: "Neil deGrasse Tyson",
                image: "images/books/science7.jpg",
                price: "1,700 ALL",
                rating: 4.6
            },
            {
                id: 44,
                title: "The Gene: An Intimate History",
                author: "Siddhartha Mukherjee",
                image: "images/books/science8.jpg",
                price: "2,200 ALL",
                rating: 4.8
            }
        ]

    },

    bestseller: {
        title: "BESTSELLER",
        books: [
            {
                id: 9,
                title: "The Da Vinci Code",
                author: "Dan Brown",
                image: "images/books/best1.jpg",
                price: "1,500 ALL",
                rating: 4.7
            },
            {
                id: 10,
                title: "The Handmaid's Tale",
                author: "Margaret Atwood",
                image: "images/books/best2.jpg",
                price: "1,700 ALL",
                rating: 4.8
            },
            {
                id: 29,
                title: "The Kite Runner",
                author: "Khaled Hosseini",
                image: "images/books/best3.jpg",
                price: "1,400 ALL",
                rating: 4.9
            },
            {
                id: 30,
                title: "The Book Thief",
                author: "Markus Zusak",
                image: "images/books/best4.jpg",
                price: "1,500 ALL",
                rating: 4.8
            },
            {
                id: 31,
                title: "Life of Pi",
                author: "Yann Martel",
                image: "images/books/best5.jpg",
                price: "1,400 ALL",
                rating: 4.7
            },
            {
                id: 32,
                title: "The Help",
                author: "Kathryn Stockett",
                image: "images/books/best6.jpg",
                price: "1,600 ALL",
                rating: 4.8
            },
            {
                id: 45,
                title: "Where the Crawdads Sing",
                author: "Delia Owens",
                image: "images/books/best7.png",
                price: "1,700 ALL",
                rating: 4.9
            },
            {
                id: 46,
                title: "Twisted Hate",
                author: "Ana Huang",
                image: "images/books/best8.png",
                price: "1,400 ALL",
                rating: 4.9
            }
        ]
    },
    gifts: {
        title: "DHURATA TË SUGJERUARA",
        books: [
            {
                id: 11,
                title: "THE LITTLE PRINCE (EMBELLISHED MANUSCRIPTS COLLECTION) CANVAS BAG",
                author: "Paperblanks",
                image: "images/books/gift1.jpg",
                price: "1,200 ALL",
                rating: 4.9
            },
            {
                id: 12,
                title: "LIGHT-UP GEL PEN - WRITING IS MAGIC KIT - KITTY",
                author: "Legami",
                image: "images/books/gift2.jpg",
                price: "400 ALL",
                rating: 4.8
            },
            {
                id: 33,
                title: "JAPANESE WOODBLOCKS SET OF 3 MINI NOTEBOOKS",
                author: "Flame Tree Publishing",
                image: "images/books/gift3.jpg",
                price: "1,300 ALL",
                rating: 4.7
            },
            {
                id: 34,
                title: "CELESTIAL PLANISPHERE (EARLY CARTOGRAPHY) 1000 PIECE JIGSAW PUZZLE",
                author: "Paperblanks",
                image: "images/books/gift4.jpg",
                price: "2,200 ALL",
                rating: 4.8
            },
            {
                id: 35,
                title: "ALICE ASLEEP FROM ALICE'S ADVENTURES IN WONDERLAND BOOKMARKS",
                author: "Flame Tree Publishing",
                image: "images/books/gift5.jpg",
                price: "500 ALL",
                rating: 4.9
            },
            {
                id: 36,
                title: "AIMEE STEWART: VINTAGE COOK BOOK LIBRARY (FOILED JOURNAL)",
                author: "Flame Tree Publishing",
                image: "images/books/gift6.jpg",
                price: "1,400 ALL",
                rating: 4.7
            },
            {
                id: 47,
                title: "PRIDE AND PREJUDICE TOTE BAG",
                author: "Papercut",
                image: "images/books/gift7.png",
                price: "1,300 ALL",
                rating: 4.8
            },
            {
                id: 48,
                title: "AGATHA CHRISTIE TRIVIA: 300 KILLER QUESTIONS ON THE QUEEN OF CRIME",
                author: "Orange Hippo!",
                image: "images/books/gift8.png",
                price: "1,500 ALL",
                rating: 4.9
            }

        ]
    }
};

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Function to generate star rating HTML
function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let starsHtml = '';

    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<i class="bi bi-star-fill text-warning"></i>';
    }
    if (hasHalfStar) {
        starsHtml += '<i class="bi bi-star-half text-warning"></i>';
    }
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<i class="bi bi-star text-warning"></i>';
    }

    return starsHtml;
}

// Function to display books
function displayBooks() {
    const categoryId = getUrlParameter('id');
    const category = booksByCategory[categoryId];
    const booksContainer = document.getElementById('booksContainer');
    const categoryTitle = document.getElementById('categoryTitle');

    if (category) {
        categoryTitle.textContent = category.title;
        booksContainer.innerHTML = '';

        category.books.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.className = 'col-md-3 mb-4';
            bookCard.innerHTML = `
                <div class="card h-100">
                    <img src="${book.image}" class="card-img-top" alt="${book.title}">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text">${book.author}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="price">${book.price}</span>
                            <div class="rating">
                                ${generateStarRating(book.rating)}
                            </div>
                        </div>
                        <button class="btn btn-primary mt-3 w-100" onclick="addToCart(${book.id})">
                            Shto në Shportë
                        </button>
                    </div>
                </div>
            `;
            booksContainer.appendChild(bookCard);
        });
    } else {
        booksContainer.innerHTML = '<p class="text-center">Kategoria nuk u gjet.</p>';
    }
}

function addToCart(bookId) {
    const categoryId = getUrlParameter('id');
    const category = booksByCategory[categoryId];
    const book = category.books.find(b => b.id === bookId);
    
    if (book) {
        // Get existing cart or initialize empty array
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        // Add book to cart with additional details
        cart.push({
            id: book.id,
            title: book.title,
            author: book.author,
            image: book.image,
            price: parseFloat(book.price.replace(' ALL', '').replace(',', '')),
            quantity: 1
        });
        
        // Save updated cart
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Show success message
        let toastContainer = document.querySelector('.toast-container');
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
            toastContainer.style.zIndex = '11';
            document.body.appendChild(toastContainer);
        }

        const toastEl = document.createElement('div');
        toastEl.className = 'toast';
        toastEl.setAttribute('role', 'alert');
        toastEl.setAttribute('aria-live', 'assertive');
        toastEl.setAttribute('aria-atomic', 'true');
        
        toastEl.innerHTML = `
            <div class="toast-header bg-success text-white">
                <strong class="me-auto">Sukses!</strong>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                Libri u shtua në shportë!
            </div>
        `;

        toastContainer.appendChild(toastEl);
        const toast = new bootstrap.Toast(toastEl, {
            autohide: true,
            delay: 3000
        });
        toast.show();

        toastEl.addEventListener('hidden.bs.toast', () => {
            toastEl.remove();
        });
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', displayBooks);
    