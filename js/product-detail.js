const books = {
    //classics
    1: {
        id: 1,
        title: "Don Kishoti",
        author: "Miguel de Cervantes",
        category: "classic",
        image: "images/books/classic1.png",
        price: "1,200 ALL",
        rating: 4.8,
        description: "Një nga romanet më të famshme të letërsisë botërore, që ndjek aventurat e Don Kishotit dhe Sanço Panços.",
        isbn: "978-99943-0-124-5",
        language: "Shqip",
        publisher: "Botimet Toena",
        publicationYear: "2018",
        dimensions: "20 x 13 cm"
    },
    2: {
        id: 2,
        title: "Ana Karenina",
        author: "Lev Tolstoi",
        category: "classic",
        image: "images/books/classic2.png",
        price: "1,500 ALL",
        rating: 4.7,
        description: "Një roman klasik rreth dashurisë, tradhtisë dhe shoqërisë ruse.",
        isbn: "978-99943-0-124-5",
        language: "Shqip",
        publisher: "Dituria",
        publicationYear: "2020",
        dimensions: "21 x 14 cm"
    },
    13: {
        id: 13,
        title: "Krim dhe Ndëshkim",
        author: "Fyodor Dostoevsky",
        category: "classic",
        image: "images/books/classic3.png",
        price: "1,300 ALL",
        rating: 4.9,
        description: "Një roman i thellë psikologjik mbi fajin, pendesën dhe shpëtimin.",
        isbn: "978-99943-0-124-5",
        language: "Shqip",
        publisher: "Fan Noli",
        publicationYear: "2019",
        dimensions: "20 x 13 cm"
    },
    14: {
        id: 14,
        title: "Zonja Bovari",
        author: "Gustave Flaubert",
        category: "classic",
        image: "images/books/classic4.png",
        price: "1,400 ALL",
        rating: 4.6,
        description: "Historia tragjike e Emës, një grua që kërkon dashuri dhe kuptim përtej jetës së saj të zakonshme.",
        isbn: "978-99943-0-124-5",
        language: "Shqip",
        publisher: "Pegi",
        publicationYear: "2017",
        dimensions: "19 x 12.5 cm"
    },
    15: {
        id: 15,
        title: "Krenari dhe paragjykim",
        author: "Jane Austen",
        category: "classic",
        image: "images/books/classic5.png",
        price: "1,100 ALL",
        rating: 4.9,
        description: "Një roman i njohur për humorin dhe vëzhgimin e hollë të shoqërisë angleze.",
        isbn: "978-99943-0-124-5",
        language: "Shqip",
        publisher: "Uegen",
        publicationYear: "2021",
        dimensions: "20.5 x 13.5 cm"
    },
    16: {
        id: 16,
        title: "Uliksi",
        author: "James Joyce",
        category: "classic",
        image: "images/books/classic6.png",
        price: "1,600 ALL",
        rating: 4.5,
        description: "Një kryevepër moderniste që ndjek një ditë në jetën e Leopold Bloom në Dublin.",
        isbn: "978-99943-0-124-5",
        language: "Shqip",
        publisher: "Onufri",
        publicationYear: "2016",
        dimensions: "22 x 15 cm"
    },
    37: {
        id: 37,
        title: "Vëllezërit Karamazov vol. 1",
        author: "Fyodor Dostoevsky",
        category: "classic",
        image: "images/books/classic7.png",
        price: "1,400 ALL",
        rating: 5.0,
        description: "Nëse do të mëkatosh vetë dhe do të pikëllohesh deri në vdekje për mëkatet e tua apo për ndonjë mëkat të rastësishëm, atëherë gëzohu për tjetrin, gëzohu për të drejtin, për atë ..."
    },
    38: {
        id: 38,
        title: "In Search Of Lost Time Volume 1 - The Way By Swann's",
        category: "classic",
        author: "Marcel Proust",
        image: "images/books/classic8.png",
        price: "1,200 ALL",
        rating: 4.7,
        description: "One of the greatest, most entertaining reading experiences in any language, Marcel Proust's In Search of Lost Time Vol. 1: The Way by Swann's is published in a new translation from the French by Lydia ..."
    },

    //modern
    3: {
        id: 3,
        title: "1984",
        author: "George Orwell",
        category: "modern",
        image: "images/books/modern1.jpg",
        price: "1,300 ALL",
        rating: 4.8,
        description: "Një distopi e shkruar në vitin 1949, që përshkruan një shoqëri të kontrolluar nga një regjim totalitar.",
        isbn: "978-99943-0-124-5",
        language: "Shqip",
        publisher: "Onufri",
        publicationYear: "2017",
        dimensions: "21 x 14 cm"
    },
    4: {
        id: 4,
        title: "Getsbi i Madh",
        author: "F. Scott Fitzgerald",
        category: "modern",
        image: "images/books/modern2.jpg",
        price: "1,200 ALL",
        rating: 4.7,
        description: "Një roman për ëndrrën amerikane, dashurinë dhe humbjen në vitet 1920.",
        isbn: "978-99943-0-124-5",
        language: "Shqip",
        publisher: "Dituria",
        publicationYear: "2018",
        dimensions: "20 x 13 cm"
    },
    17: {
        id: 17,
        title: "Njëqind Vjet Vetmi",
        author: "Gabriel García Márquez",
        category: "modern",
        image: "images/books/modern3.jpg",
        price: "1,400 ALL",
        rating: 4.9,
        description: "Saga magjike e familjes Buendía në qytetin imagjinar të Macondo.",
        isbn: "978-99943-0-124-5",
        language: "Shqip",
        publisher: "Botimet Toena",
        publicationYear: "2019",
        dimensions: "22 x 15 cm"
    },
    18: {
        id: 18,
        title: "Lolita",
        author: "Vladimir Nabokov",
        category: "modern",
        image: "images/books/modern4.jpg",
        price: "1,500 ALL",
        rating: 4.6,
        description: "Një thriller psikologjik rreth imoralitetit, obsesionit dhe abuzimit seksual. I rrëfyer nga narratori më pak i besueshëm që keni për të parë ndonjëherë.",
        isbn: "978-99943-0-124-5",
        language: "Shqip",
        publisher: "Pegi",
        publicationYear: "2020",
        dimensions: "21 x 14 cm"
    },
    19: {
        id: 19,
        title: "Brave New World",
        author: "Aldous Huxley",
        category: "modern",
        image: "images/books/modern5.jpg",
        price: "1,300 ALL",
        rating: 4.7,
        description: "Një roman distopik që sfidon normat sociale dhe teknologjike, duke imagjinuar një botë ku lumturia kontrollohet përmes shkencës dhe manipulimit.",
        isbn: "978-99943-0-124-5",
        language: "Shqip",
        publisher: "Fan Noli",
        publicationYear: "2018",
        dimensions: "20 x 13 cm"
    },
    20: {
        id: 20,
        title: "The Alchimist",
        author: "Paulo Coelho",
        category: "modern",
        image: "images/books/modern6.jpg",
        price: "1,200 ALL",
        rating: 4.8,
        description: "Një tregim frymëzues për një bari të ri që ndjek ëndrrën e tij për të gjetur një thesar të fshehur, duke zbuluar thesarët e brendshëm në udhëtim.",
        isbn: "978-99943-0-124-5",
        language: "Shqip",
        publisher: "Uegen",
        publicationYear: "2021",
        dimensions: "21.5 x 14 cm"
    },
    39: {
        id: 39, title: "Veronika vendos të vdesë", author: "Paulo Coelho",
        category: "modern",
        image: "images/books/modern7.png", price: "1,100 ALL", rating: 4.6,
        description: "“Një libër shumë origjinal, prekës dhe, në fund të fundit, inkurajues.”"
    },
    40: {
        id: 40, title: "Kafka në breg", author: "Haruki Murakami",
        category: "modern",
        image: "images/books/modern8.png",
        price: "1,600 ALL", rating: 4.9,
        description: "Kafka Tamura, një i ri pesëmbëdhjetëvjeçar, largohet nga shtëpia me dëshirën edhe t'i shmanget profecisë edipiane të të atit, edhe të kërkojë motrën dhe nënën e tij të humbur prej kohesh."
    },

    //children
    5: {
        id: 5,
        title: "Harry Potter dhe Guri Filozofal",
        author: "J.K. Rowling",
        category: "children",
        image: "images/books/children1.jpg",
        price: "1,800 ALL",
        rating: 4.9,
        description: "Fillimi magjik i një sage epike ku një djalë zbulon se është magjistar dhe nis aventurën e tij në shkollën Hogwarts.",
        isbn: "978-99943-0-124-5",
        language: "Shqip",
        publisher: "Botimet Dituria",
        publicationYear: "2015",
        dimensions: "23 x 16 cm"
    },
    6: {
        id: 6,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        category: "children",
        image: "images/books/children2.jpg",
        price: "1,600 ALL",
        rating: 4.8,
        description: "Një udhëtim epik i Bilbo Baggins me xhuxhët për të rifituar thesarin nga dragoi Smaug – një aventurë klasike fantastike.",
        isbn: "978-99943-0-124-5",
        language: "Shqip",
        publisher: "Onufri",
        publicationYear: "2017",
        dimensions: "22 x 15 cm"
    },
    21: {
        id: 21,
        title: "Charlie dhe Fabrika e Çokollatës",
        author: "Roald Dahl",
        category: "children",
        image: "images/books/children3.jpg",
        price: "1,200 ALL",
        rating: 4.7,
        description: "Një djalë i varfër fiton një biletë të artë dhe viziton fabrikën e magjishme të çokollatës së Willy Wonka-s.",
        isbn: "978-99943-0-124-5",
        language: "Shqip",
        publisher: "Pegi",
        publicationYear: "2018",
        dimensions: "21 x 14 cm"
    },
    22: {
        id: 22,
        title: "Matilda",
        author: "Roald Dahl",
        category: "children",
        image: "images/books/children4.jpg",
        price: "1,200 ALL",
        rating: 4.8,
        description: "Një vajzë e zgjuar me aftësi të jashtëzakonshme përballet me prindërit e saj të padrejtë dhe një drejtoreshë të ligë.",
        isbn: "978-99943-0-124-5",
        language: "Shqip",
        publisher: "Botimet Toena",
        publicationYear: "2019",
        dimensions: "22 x 15 cm"
    },
    23: {
        id: 23,
        title: "Artemis Fowl: Thesari i Popullit",
        author: "Eoin Colfer",
        category: "children",
        image: "images/books/children5.jpg",
        price: "800 ALL",
        rating: 4.6,
        description: "Një gjeni kriminel 12-vjeçar përballet me një botë sekrete të elfeve dhe teknologjisë së përparuar.",
        isbn: "978-99943-0-124-5",
        language: "Shqip",
        publisher: "Dituria",
        publicationYear: "2016",
        dimensions: "21 x 14 cm"
    },
    24: {
        id: 24,
        title: "The Chronicles of Narnia vol. 1",
        author: "C.S. Lewis",
        category: "children",
        image: "images/books/children6.jpg",
        price: "700 ALL",
        rating: 4.7,
        description: "Katër fëmijë zbulojnë një botë magjike përmes një gardërobe dhe luftojnë për ta shpëtuar atë nga errësira.",
        isbn: "978-99943-0-124-5",
        language: "English",
        publisher: "Botimet Toena",
        publicationYear: "2017",
        dimensions: "22 x 15 cm"
    },
    41: {
        id: 41,
        title: "Përrallat e Andersenit",
        author: "Hans Christian Andersen", image: "images/books/children7.jpg", price: "900 ALL", rating: 4.8,
        category: "children",
        description: "Nje koleksion i perrallave me te famshme ne bote. Keto te autorit H. K. Andersen."
    },
    42: {
        id: 42, title: "Peter Pan", author: "J.M. Barrie", image: "images/books/children8.jpg",
        price: "1,000 ALL", rating: 4.7, category: "children",
        description: "Second to the right ...and then straight on till morning!' Desperate to hear bedtime stories, Peter Pan waits outside the nursery window of Wendy, John and Michael Darling. "
    },

    //science
    7: {
        id: 7,
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        category: "science",
        image: "images/books/science1.jpg",
        price: "1,900 ALL",
        rating: 4.8,
        description: "Një udhërrëfyes për universin që shpjegon konceptet komplekse të kozmologjisë për lexuesit e zakonshëm.",
        isbn: "978-99943-0-124-5",
        language: "English",
        publisher: "Bantam Books",
        publicationYear: "1988",
        dimensions: "24 x 16 cm"
    },
    8: {
        id: 8,
        title: "The Selfish Gene",
        author: "Richard Dawkins",
        category: "science",
        image: "images/books/science2.jpg",
        price: "1,800 ALL",
        rating: 4.7,
        description: "Një teori revolucionare që shpjegon evoluimin përmes perspektivës së gjeneve dhe përzgjedhjes natyrore.",
        isbn: "978-99943-0-124-5",
        language: "English",
        publisher: "Oxford University Press",
        publicationYear: "1976",
        dimensions: "23 x 15 cm"
    },
    25: {
        id: 25,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        category: "science",
        image: "images/books/science3.jpg",
        price: "2,000 ALL",
        rating: 4.9,
        description: "Një histori gjithëpërfshirëse e njerëzimit, nga Homo sapiens deri në botën moderne të inteligjencës artificiale.",
        isbn: "978-99943-0-124-5",
        language: "English",
        publisher: "Harper",
        publicationYear: "2011",
        dimensions: "22 x 14 cm"
    },
    26: {
        id: 26,
        title: "IN SEARCH OF SCHRODINGER'S CAT",
        author: "John Gribbins",
        category: "science",
        image: "images/books/science4.jpg",
        price: "1,800 ALL",
        rating: 4.6,
        description: "Një eksplorim i teorisë kuantike dhe mistereve të saj përmes shembullit të famshëm të maces së Schrödinger-it.",
        isbn: "978-99943-0-124-5",
        language: "English",
        publisher: "Phoenix Books",
        publicationYear: "1984",
        dimensions: "21 x 13 cm"
    },
    27: {
        id: 27,
        title: "Cosmos",
        author: "Dr. Becky Smethurst",
        category: "science",
        image: "images/books/science5.jpg",
        price: "1,900 ALL",
        rating: 4.8,
        description: "Një udhëtim i jashtëzakonshëm përmes universit me sqarime të thjeshta mbi yjet, galaktikat dhe më shumë.",
        isbn: "978-99943-0-124-5",
        language: "English",
        publisher: "Picador",
        publicationYear: "2021",
        dimensions: "24 x 17 cm"
    },
    28: {
        id: 28,
        title: "ON THE ORIGIN OF TIME",
        author: "THOMAS HERTOG",
        category: "science",
        image: "images/books/science6.jpg",
        price: "2,100 ALL",
        rating: 4.7,
        description: "Një vështrim revolucionar mbi kohën dhe universin, bazuar në bashkëpunimin e autorit me Stephen Hawking.",
        isbn: "978-99943-0-124-5",
        language: "English",
        publisher: "Cambridge University Press",
        publicationYear: "2022",
        dimensions: "23 x 16 cm"
    },
    43: {
        id: 43, title: "Astrophysics for People in a Hurry", category: "science", author: "Neil deGrasse Tyson",
        image: "images/books/science7.jpg", price: "1,700 ALL", rating: 4.6,
        description: "What is the nature of space and time? How do we fit within the universe? How does the universe fit within us? There’s no better guide through these mind-expanding questions than acclaimed astrophysicist and best-selling author Neil deGrasse Tyson."
    },
    44: {
        id: 44,
        title: "The Gene: An Intimate History",
        category: "science",
        author: "Siddhartha Mukherjee",
        image: "images/books/science8.jpg",
        price: "2,200 ALL",
        rating: 4.8,
        description: "From the Pulitzer Prize-winning, bestselling author of The Emperor of All Maladies--a magnificent history of the gene and a response to the defining question of the future: What becomes of being human when we learn to \"read\" and \"write\" our own genetic information?\n"
    },


    //bestseller
    9: {
        id: 9,
        title: "The Da Vinci Code",
        author: "Dan Brown",
        category: "bestseller",
        image: "images/books/best1.jpg",
        price: "1,500 ALL",
        rating: 4.7,
        description: "Një thriller plot mistere që ndjek një profesor simbolike në një ndjekje për një sekret të fshehur nga Kisha Katolike.",
        isbn: "978-99943-0-124-5",
        language: "English",
        publisher: "Doubleday",
        publicationYear: "2003",
        dimensions: "21 x 14 cm"
    },
    10: {
        id: 10,
        title: "The Handmaid's Tale",
        author: "Margaret Atwood",
        category: "bestseller",
        image: "images/books/best2.jpg",
        price: "1,700 ALL",
        rating: 4.8,
        description: "Një tregim distopik për një shoqëri ku gratë trajtohen si pronë dhe rebelimi lind nga një shërbëtore.",
        isbn: "978-99943-0-124-5",
        language: "English",
        publisher: "McClelland and Stewart",
        publicationYear: "1985",
        dimensions: "22 x 15 cm"
    },
    29: {
        id: 29,
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        category: "bestseller",
        image: "images/books/best3.jpg",
        price: "1,400 ALL",
        rating: 4.9,
        description: "Një histori prekëse për miqësinë, fajin dhe shpengimin në një Afganistan të trazuar.",
        isbn: "978-99943-0-124-5",
        language: "English",
        publisher: "Riverhead Books",
        publicationYear: "2003",
        dimensions: "20 x 13 cm"
    },
    30: {
        id: 30,
        title: "The Book Thief",
        author: "Markus Zusak",
        category: "bestseller",
        image: "images/books/best4.jpg",
        price: "1,500 ALL",
        rating: 4.8,
        description: "Një vajzë gjermane gjatë Luftës së Dytë Botërore gjen ngushëllim në libra ndërsa bota e saj shembet.",
        isbn: "978-99943-0-124-5",
        language: "English",
        publisher: "Knopf Books",
        publicationYear: "2005",
        dimensions: "23 x 15 cm"
    },
    31: {
        id: 31,
        title: "Life of Pi",
        author: "Yann Martel",
        category: "bestseller",
        image: "images/books/best5.jpg",
        price: "1,400 ALL",
        rating: 4.7,
        description: "Një histori mbijetese dhe mrekullie për një djalë që lundron në det me një tigër bengalez pas një përmbytjeje.",
        isbn: "978-99943-0-124-5",
        language: "English",
        publisher: "Knopf Canada",
        publicationYear: "2001",
        dimensions: "21 x 14 cm"
    },
    32: {
        id: 32,
        title: "The Help",
        author: "Kathryn Stockett",
        category: "bestseller",
        image: "images/books/best6.jpg",
        price: "1,600 ALL",
        rating: 4.8,
        description: "Një roman i fuqishëm mbi marrëdhëniet racore dhe luftën për barazi në Amerikën e viteve '60.",
        isbn: "978-99943-0-124-5",
        language: "English",
        publisher: "Amy Einhorn Books",
        publicationYear: "2009",
        dimensions: "22 x 15 cm"
    },
    45: {
        id: 45,
        title: "Where the Crawdads Sing",
        author: "Delia Owens",
        image: "images/books/best7.png",
        price: "1,700 ALL",
        rating: 4.9,
        category: "bestseller",
        description: "Where the Crawdads Sing is a 2018 coming-of-age murder mystery novel by American zoologist Delia Owens. The story follows two timelines that slowly intertwine. The first timeline describes the life and adventures of a young girl named Kya as she grows up isolated in the marshes of North Carolina."
    },
    46: {
        id: 46,
        title: "Twisted Hate",
        author: "Ana Huang",
        image: "images/books/best8.png",
        price: "1,400 ALL",
        rating: 4.9,
        category: "bestseller",
        description: "Discover the addictive world of the Twisted series from TikTok sensation, Ana Huang!Read Twisted Hate now for a steamy enemies to lovers romance. "
    },


    //giftd
    11: {
        id: 11,
        title: "THE LITTLE PRINCE (EMBELLISHED MANUSCRIPTS COLLECTION) CANVAS BAG",
        category: "gifts",
        author: "Paperblanks",
        image: "images/books/gift1.jpg",
        price: "1,200 ALL",
        rating: 4.9,
        description: "Carry the charm of The Little Prince wherever you go with this beautifully crafted canvas bag from the Embellished Manuscripts Collection. Featuring elegant artwork and quotes from the beloved classic, this durable tote is perfect for book lovers, dreamers, and everyday adventures."
    },
    12: {
        id: 12,
        title: "LIGHT-UP GEL PEN - WRITING IS MAGIC KIT - KITTY",
        author: "Legami",
        category: "gifts",
        image: "images/books/gift2.jpg",
        price: "400 ALL",
        rating: 4.8,
        description: "Bring a touch of enchantment to your writing with this adorable kitty-themed light-up gel pen kit. Perfect for young writers and stationery lovers, the set includes a fun and functional gel pen that lights up as you write — making every note feel magical."
    },
    33: {
        id: 33,
        title: "JAPANESE WOODBLOCKS SET OF 3 MINI NOTEBOOKS",
        author: "Flame Tree Publishing",
        category: "gifts",
        image: "images/books/gift3.jpg",
        price: "1,300 ALL",
        rating: 4.7,
        description: "Celebrate the elegance of Japanese art with this set of three mini notebooks featuring iconic woodblock prints. Compact and beautifully designed, they’re perfect for journaling, note-taking, or gifting to someone who appreciates traditional aesthetics."
    },
    34: {
        id: 34,
        title: "CELESTIAL PLANISPHERE (EARLY CARTOGRAPHY) 1000 PIECE JIGSAW PUZZLE",
        category: "gifts",
        author: "Paperblanks",
        image: "images/books/gift4.jpg",
        price: "2,200 ALL",
        rating: 4.8,
        description: "Travel back in time with this intricate 1000-piece puzzle featuring an early cartography celestial planisphere. Ideal for puzzle enthusiasts and history buffs, this beautifully illustrated piece makes a stunning display once completed."
    },
    35: {
        id: 35,
        title: "ALICE ASLEEP FROM ALICE‘S ADVENTURES IN WONDERLAND BOOKMARKS",
        category: "gifts",
        author: "Flame Tree Publishing",
        image: "images/books/gift5.jpg",
        price: "500 ALL",
        rating: 4.9,
        description: "Dream alongside Alice with this enchanting bookmark set, showcasing the beloved character asleep in Wonderland. A must-have for collectors and readers alike, these bookmarks add a whimsical charm to any reading experience."
    },
    36: {
        id: 36,
        title: "AIMEE STEWART: VINTAGE COOK BOOK LIBRARY (FOILED JOURNAL)",
        category: "gifts",
        author: "Flame Tree Publishing",
        image: "images/books/gift6.jpg",
        price: "1,400 ALL",
        rating: 4.7,
        description: "Dive into a nostalgic world of culinary charm with this foiled journal designed by Aimee Stewart. Featuring a vintage cookbook library cover, it’s perfect for jotting recipes, ideas, or daily reflections, all within a beautifully crafted keepsake."
    },
    47: {
        id: 47,
        title: "PRIDE AND PREJUDICE TOTE BAG",
        author: "Papercut",
        category: "gifts",
        image: "images/books/gift7.png",
        price: "1,300 ALL",
        rating: 4.8,
        description: "Një çantë tote elegante me dizajn klasik të romanit 'Pride and Prejudice'. Ideale për lexuesit që duan të marrin librat me vete me stil."
    },
    48: {
        id: 48,
        title: "AGATHA CHRISTIE TRIVIA: 300 KILLER QUESTIONS ON THE QUEEN OF CRIME",
        category: "gifts",
        author: "Orange Hippo!",
        image: "images/books/gift8.png",
        price: "1,500 ALL",
        rating: 4.9,
        description: "Një lojë zbavitëse me 300 pyetje për fansat e Agatha Christie. Sfido miqtë me njohuritë rreth Mbretëreshës së Krimeve!"
    }


};

function getBookIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

function loadBookDetails() {
    const bookId = getBookIdFromUrl();
    const book = books[parseInt(bookId)];
    if (!book) {
        document.querySelector('.product-detail-container').innerHTML = `
            <div class="container text-center py-5">
                <h2>Libri nuk u gjet</h2>
                <p>Ju lutemi kthehuni te <a href="./kategori.html/"></a> faqja e kategorise.</p>
            </div>
        `;
        return;
    }
    if (book.category !== "gifts") {
        document.querySelector('.details-list').innerHTML = `  
             <h3>Detajet</h3>      
             <li><strong>ISBN:</strong> <span id="bookIsbn">-</span></li>
             <li><strong>Gjuha:</strong> <span id="bookLanguage">-</span></li>
             <li><strong>Viti i Botimit:</strong> <span id="bookYear">-</span></li>
             <li><strong>Dimensionet:</strong> <span id="bookDimensions">-</span></li>
        `;

    } else {
        document.getElementById('details-list').style.display = 'none';
    }

    document.title = `${book.title} - Library`;
    document.getElementById('bookTitle').textContent = book.title;
    document.getElementById('bookImage').src = book.image;
    document.getElementById('bookImage').alt = book.title;
    document.getElementById('bookAuthor').textContent = book.author;
    document.getElementById('bookCategory').textContent = getCategoryName(book.category);
    document.getElementById('bookDescription').textContent = book.description;
    document.getElementById('bookIsbn').textContent = book.isbn;
    document.getElementById('bookLanguage').textContent = book.language;
    document.getElementById('bookYear').textContent = book.publicationYear;
    document.getElementById('bookDimensions').textContent = book.dimensions;

    document.getElementById('breadcrumb').innerHTML = `
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="./home.html">Home</a></li>
    <li class="breadcrumb-item"><a href="./kategori.html?id=${book.category}">${getCategoryName(book.category)}</a></li>
    <li class="breadcrumb-item active" aria-current="page" id="detBookTitle">${book.title}</li>
  </ol>
`;


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
        'bestseller': 'Bestseller',
        'modern': 'Romane Modern',
        'children': 'Fëmijë & Adoleshentë',
        'science': 'Filozofi & Shkencë',
        'gifts': 'Dhurata'
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

