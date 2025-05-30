// kategori.js
        const booksByCategory = {
            classic: {
                title: "LETËRSIA KLASIKE",
                books: [
                    { id: 1, title: "Don Kishoti", author: "Miguel de Cervantes", image: "images/books/classic1.png", price: "1,200 ALL", rating: 4.8 },
                    { id: 2, title: "Ana Karenina", author: "Lev Tolstoi", image: "images/books/classic2.png", price: "1,500 ALL", rating: 4.7 },
                    { id: 13, title: "Krim dhe Ndëshkm", author: "Fyodor Dostoevsky", image: "images/books/classic3.png", price: "1,300 ALL", rating: 4.9 },
                    { id: 14, title: "Zonja Bovari", author: "Gustave Flaubert", image: "images/books/classic4.png", price: "1,400 ALL", rating: 4.6 },
                    { id: 15, title: "Krenari dhe paragjykim", author: "Jane Austen", image: "images/books/classic5.png", price: "1,100 ALL", rating: 4.9 },
                    { id: 16, title: "Uliksi", author: "James Joyce", image: "images/books/classic6.png", price: "1,600 ALL", rating: 4.5 }
                ]
            },
            modern: {
                title: "ROMANE MODERN",
                books: [
                    { id: 3, title: "1984", author: "George Orwell", image: "images/books/modern1.jpg", price: "1,300 ALL", rating: 4.8 },
                    { id: 4, title: "Getsbi i Madh", author: "F. Scott Fitzgerald", image: "images/books/modern2.jpg", price: "1,200 ALL", rating: 4.7 },
                    { id: 17, title: "Njëqind Vjet Vetmi", author: "Gabriel García Márquez", image: "images/books/modern3.jpg", price: "1,400 ALL", rating: 4.9 },
                    { id: 18, title: "Lolita", author: "Vladimir Nabokov", image: "images/books/modern4.jpg", price: "1,500 ALL", rating: 4.6 },
                    { id: 19, title: "Brave New World", author: "Aldous Huxley", image: "images/books/modern5.jpg", price: "1,300 ALL", rating: 4.7 },
                    { id: 20, title: "The Alchimist", author: "	Paulo Coelho", image: "images/books/modern6.jpg", price: "1,200 ALL", rating: 4.8 }
                ]
            },
            children: {
                title: "FËMIJË & ADOLESHENTË",
                books: [
                    { id: 5, title: "Harry Potter dhe Guri Filozofal", author: "J.K. Rowling", image: "images/books/children1.jpg", price: "1,800 ALL", rating: 4.9 },
                    { id: 6, title: "The Hobbit", author: "J.R.R. Tolkien", image: "images/books/children2.jpg", price: "1,600 ALL", rating: 4.8 },
                    { id: 21, title: "Charlie dhe Fabrika e Çokollatës", author: "Roald Dahl", image: "images/books/children3.jpg", price: "1,200 ALL", rating: 4.7 },
                    { id: 22, title: "Matilda", author: "Roald Dahl", image: "images/books/children4.jpg", price: "1,200 ALL", rating: 4.8 },
                    { id: 23, title: "Artemis Fowl", author: "Eoin Colfer", image: "images/books/children5.jpg", price: "800 ALL", rating: 4.6 },
                    { id: 24, title: "The Chronicles of Narnia vol. 1", author: "C.S. Lewis", image: "images/books/children6.jpg", price: "700 ALL", rating: 4.7 }
                ]
            },
            science: {
                title: "FILOZOFI & SHKENCË",
                books: [
                    { id: 7, title: "A Brief History of Time", author: "Stephen Hawking", image: "images/books/science1.jpg", price: "1,900 ALL", rating: 4.8 },
                    { id: 8, title: "The Selfish Gene", author: "Richard Dawkins", image: "images/books/science2.jpg", price: "1,800 ALL", rating: 4.7 },
                    { id: 25, title: "Sapiens", author: "Yuval Noah Harari", image: "images/books/science3.jpg", price: "2,000 ALL", rating: 4.9 },
                    { id: 26, title: "IN SEARCH OF SCHRODINGER'S CAT", author: "John Gribbins", image: "images/books/science4.jpg", price: "1,800 ALL", rating: 4.6 },
                    { id: 27, title: "Cosmos", author: "Dr. Becky Smethurst", image: "images/books/science5.jpg", price: "1,900 ALL", rating: 4.8 },
                    { id: 28, title: "ON THE ORIGIN OF TIME", author: "THOMAS HERTOG", image: "images/books/science6.jpg", price: "2,100 ALL", rating: 4.7 }
                ]
            },
            bestseller: {
                title: "BESTSELLER",
                books: [
                    { id: 9, title: "The Da Vinci Code", author: "Dan Brown", image: "images/books/best1.jpg", price: "1,500 ALL", rating: 4.7 },
                    { id: 10, title: "The Handmaid's Tale", author: "Margaret Atwood", image: "images/books/best2.jpg", price: "1,700 ALL", rating: 4.8 },
                    { id: 29, title: "The Kite Runner", author: "Khaled Hosseini", image: "images/books/best3.jpg", price: "1,400 ALL", rating: 4.9 },
                    { id: 30, title: "The Book Thief", author: "Markus Zusak", image: "images/books/best4.jpg", price: "1,500 ALL", rating: 4.8 },
                    { id: 31, title: "Life of Pi", author: "Yann Martel", image: "images/books/best5.jpg", price: "1,400 ALL", rating: 4.7 },
                    { id: 32, title: "The Help", author: "Kathryn Stockett", image: "images/books/best6.jpg", price: "1,600 ALL", rating: 4.8 }
                ]
            },
            gifts: {
                title: "DHURATA TË SUGJERUARA",
                books: [
                    { id: 11, title: "THE LITTLE PRINCE (EMBELLISHED MANUSCRIPTS COLLECTION) CANVAS BAG", author: "Paperblanks", image: "images/books/gift1.jpg", price: "1,200 ALL", rating: 4.9 },
                    { id: 12, title: "LIGHT-UP GEL PEN - WRITING IS MAGIC KIT - KITTY", author: "Legami", image: "images/books/gift2.jpg", price: "400 ALL", rating: 4.8 },
                    { id: 33, title: "JAPANESE WOODBLOCKS SET OF 3 MINI NOTEBOOKS", author: "Flame Tree Publishing", image: "images/books/gift3.jpg", price: "1,300 ALL", rating: 4.7 },
                    { id: 34, title: "CELESTIAL PLANISPHERE (EARLY CARTOGRAPHY) 1000 PIECE JIGSAW PUZZLE", author: "Paperblanks", image: "images/books/gift4.jpg", price: "2,200 ALL", rating: 4.8 },
                    { id: 35, title: "ALICE ASLEEP FROM ALICE‘S ADVENTURES IN WONDERLAND BOOKMARKS", author: "Flame Tree Publishing", image: "images/books/gift5.jpg", price: "500 ALL", rating: 4.9 },
                    { id: 36, title: "AIMEE STEWART: VINTAGE COOK BOOK LIBRARY (FOILED JOURNAL)", author: "Flame Tree Publishing", image: "images/books/gift6.jpg", price: "1,400 ALL", rating: 4.7 }
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
            
            if (!category) {
                document.getElementById('categoryTitle').textContent = 'Kategoritë';
                const booksContainer = document.getElementById('booksContainer');
                booksContainer.innerHTML = `
                    <div class="categories-grid">
                        <div class="row">
                            <div class="col-md-4 mb-4">
                                <a href="./kategori.html?id=classic" class="category-item">
                                    <img src="./images/class.jpg" alt="Letërsi Klasike">
                                    <h3>LETËRSIA KLASIKE</h3>
                                </a>
                            </div>
                            <div class="col-md-4 mb-4">
                                <a href="./kategori.html?id=modern" class="category-item">
                                    <img src="./images/moderne.jpg" alt="Romane Modern">
                                    <h3>ROMANE MODERN</h3>
                                </a>
                            </div>
                            <div class="col-md-4 mb-4">
                                <a href="./kategori.html?id=children" class="category-item">
                                    <img src="./images/teen.png" alt="Fëmijë & Adoleshentë">
                                    <h3>FËMIJË & ADOLESHENTË</h3>
                                </a>
                            </div>
                            <div class="col-md-4 mb-4">
                                <a href="./kategori.html?id=science" class="category-item">
                                    <img src="./images/sc.png" alt="Filozofi & Shkencë">
                                    <h3>FILOZOFI & SHKENCË</h3>
                                </a>
                            </div>
                            <div class="col-md-4 mb-4">
                                <a href="./kategori.html?id=bestseller" class="category-item">
                                    <img src="./images/best.png" alt="Bestseller">
                                    <h3>BESTSELLER</h3>
                                </a>
                            </div>
                            <div class="col-md-4 mb-4">
                                <a href="./kategori.html?id=gifts" class="category-item">
                                    <img src="./images/gifts.PNG" alt="Dhurata të Sugjeruara">
                                    <h3>DHURATA TË SUGJERUARA</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                `;
                return;
            }

            document.getElementById('categoryTitle').textContent = category.title;
            const booksContainer = document.getElementById('booksContainer');
            booksContainer.innerHTML = '';

            category.books.forEach(book => {
                const bookElement = document.createElement('div');
                bookElement.className = 'col-md-4 col-lg-3 mb-4';
                bookElement.innerHTML = `
                    <div class="card h-100">
                        <div class="position-relative">
                        <a href="../templates/product-detail.html?id=${book.id}">
                            <img src="${book.image}" class="card-img-top img-thumbnail" alt="${book.title}">
                        </a>
                            <div class="position-absolute top-0 end-0 m-2">
                                <span class="badge bg-primary">${book.price}</span>
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${book.title}</h5>
                            <p class="card-text text-muted">${book.author}</p>
                            <div class="d-flex align-items-center mb-2">
                                ${generateStarRating(book.rating)}
                                <small class="text-muted ms-2">(${book.rating})</small>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <a href="../templates/product-detail.html?id=${book.id}" class="btn btn-primary">Më shumë</a>
                                <button class="btn btn-outline-primary" onclick="addToCart(${book.id})">
                                    <i class="bi bi-cart-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `;
                booksContainer.appendChild(bookElement);
            });
        }

        function addToCart(bookId) {
            alert('Libri u shtua në shportë!');
        }
        window.onload = displayBooks;
    