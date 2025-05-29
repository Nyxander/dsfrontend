
export const books = [
        // Classic
    { id: 1, title: "Don Kishoti", author: "Miguel de Cervantes", category: "classic", image: "images/books/classic1.png", price: "1,200 ALL", rating: 4.8, description: "Një nga romanet më të famshme të letërsisë botërore, që ndjek aventurat e Don Kishotit dhe Sanço Panços." },
    { id: 2, title: "Ana Karenina", author: "Lev Tolstoi", category: "classic", image: "images/books/classic2.png", price: "1,500 ALL", rating: 4.7, description: "Një roman klasik rreth dashurisë, tradhtisë dhe shoqërisë ruse." },
    { id: 13, title: "Krim dhe Ndëshkm", author: "Fyodor Dostoevsky", category: "classic", image: "images/books/classic3.png", price: "1,300 ALL", rating: 4.9, description: "Një roman i thellë psikologjik mbi fajin, pendesën dhe shpëtimin." },
    { id: 14, title: "Zonja Bovari", author: "Gustave Flaubert", category: "classic", image: "images/books/classic4.png", price: "1,400 ALL", rating: 4.6, description: "Historia tragjike e Emës, një grua që kërkon dashuri dhe kuptim përtej jetës së saj të zakonshme." },
    { id: 15, title: "Krenari dhe paragjykim", author: "Jane Austen", category: "classic", image: "images/books/classic5.png", price: "1,100 ALL", rating: 4.9, description: "Një roman i njohur për humorin dhe vëzhgimin e hollë të shoqërisë angleze." },
    { id: 16, title: "Uliksi", author: "James Joyce", category: "classic", image: "images/books/classic6.png", price: "1,600 ALL", rating: 4.5, description: "Një kryevepër moderniste që ndjek një ditë në jetën e Leopold Bloom në Dublin." },

    // Modern
    { id: 3, title: "1984", author: "George Orwell", category: "modern", image: "images/books/modern1.jpg", price: "1,300 ALL", rating: 4.8, description: "Një distopi e shkruar në vitin 1949, që përshkruan një shoqëri të kontrolluar nga një regjim totalitar." },
    { id: 4, title: "Getsbi i Madh", author: "F. Scott Fitzgerald", category: "modern", image: "images/books/modern2.jpg", price: "1,200 ALL", rating: 4.7, description: "Një roman për ëndrrën amerikane, dashurinë dhe humbjen në vitet 1920." },
    { id: 17, title: "Njëqind Vjet Vetmi", author: "Gabriel García Márquez", category: "modern", image: "images/books/modern3.jpg", price: "1,400 ALL", rating: 4.9, description: "Saga magjike e familjes Buendía në qytetin imagjinar të Macondo." },
    { id: 18, title: "Lolita", author: "Vladimir Nabokov", category: "modern", image: "images/books/modern4.jpg", price: "1,500 ALL", rating: 4.6, description: "Një thriller psikologjik rreth imoralitetit, obsesionit dhe abuzimit seksual. I rrëfyer nga narratori më pak i besueshëm që keni për të parë ndonjëherë." },
    { id: 19, title: "Brave New World", author: "Aldous Huxley", image: "images/books/modern5.jpg", price: "1,300 ALL", rating: 4.7, description: "Një roman distopik që sfidon normat sociale dhe teknologjike, duke imagjinuar një botë ku lumturia kontrollohet përmes shkencës dhe manipulimit." },
    { id: 20, title: "The Alchimist", author: "Paulo Coelho", image: "images/books/modern6.jpg", price: "1,200 ALL", rating: 4.8, description: "Një tregim frymëzues për një bari të ri që ndjek ëndrrën e tij për të gjetur një thesar të fshehur, duke zbuluar thesarët e brendshëm në udhëtim." },
       
    // Children
    { id: 5, title: "Harry Potter dhe Guri Filozofal", author: "J.K. Rowling", image: "images/books/children1.jpg", price: "1,800 ALL", rating: 4.9, description: "Fillimi magjik i një sage epike ku një djalë zbulon se është magjistar dhe nis aventurën e tij në shkollën Hogwarts." },
    { id: 6, title: "The Hobbit", author: "J.R.R. Tolkien", image: "images/books/children2.jpg", price: "1,600 ALL", rating: 4.8, description: "Një udhëtim epik i Bilbo Baggins me xhuxhët për të rifituar thesarin nga dragoi Smaug – një aventurë klasike fantastike." },
    { id: 21, title: "Charlie dhe Fabrika e Çokollatës", author: "Roald Dahl", image: "images/books/children3.jpg", price: "1,200 ALL", rating: 4.7, description: "Një djalë i varfër fiton një biletë të artë dhe viziton fabrikën e magjishme të çokollatës së Willy Wonka-s." },
    { id: 22, title: "Matilda", author: "Roald Dahl", image: "images/books/children4.jpg", price: "1,200 ALL", rating: 4.8, description: "Një vajzë e zgjuar me aftësi të jashtëzakonshme përballet me prindërit e saj të padrejtë dhe një drejtoreshë të ligë." },
    { id: 23, title: "Artemis Fowl", author: "Eoin Colfer", image: "images/books/children5.jpg", price: "800 ALL", rating: 4.6, description: "Një gjeni kriminel 12-vjeçar përballet me një botë sekrete të elfeve dhe teknologjisë së përparuar." },
    { id: 24, title: "The Chronicles of Narnia vol. 1", author: "C.S. Lewis", image: "images/books/children6.jpg", price: "700 ALL", rating: 4.7, description: "Katër fëmijë zbulojnë një botë magjike përmes një gardërobe dhe luftojnë për ta shpëtuar atë nga errësira." },

    // Science
  
    { id: 7, title: "A Brief History of Time", author: "Stephen Hawking", image: "images/books/science1.jpg", price: "1,900 ALL", rating: 4.8, description: "Një udhërrëfyes për universin që shpjegon konceptet komplekse të kozmologjisë për lexuesit e zakonshëm." },
    { id: 8, title: "The Selfish Gene", author: "Richard Dawkins", image: "images/books/science2.jpg", price: "1,800 ALL", rating: 4.7, description: "Një teori revolucionare që shpjegon evoluimin përmes perspektivës së gjeneve dhe përzgjedhjes natyrore." },
    { id: 25, title: "Sapiens", author: "Yuval Noah Harari", image: "images/books/science3.jpg", price: "2,000 ALL", rating: 4.9, description: "Një histori gjithëpërfshirëse e njerëzimit, nga Homo sapiens deri në botën moderne të inteligjencës artificiale." },
    { id: 26, title: "IN SEARCH OF SCHRODINGER'S CAT", author: "John Gribbins", image: "images/books/science4.jpg", price: "1,800 ALL", rating: 4.6, description: "Një eksplorim i teorisë kuantike dhe mistereve të saj përmes shembullit të famshëm të maces së Schrödinger-it." },
    { id: 27, title: "Cosmos", author: "Dr. Becky Smethurst", image: "images/books/science5.jpg", price: "1,900 ALL", rating: 4.8, description: "Një udhëtim i jashtëzakonshëm përmes universit me sqarime të thjeshta mbi yjet, galaktikat dhe më shumë." },
    { id: 28, title: "ON THE ORIGIN OF TIME", author: "THOMAS HERTOG", image: "images/books/science6.jpg", price: "2,100 ALL", rating: 4.7, description: "Një vështrim revolucionar mbi kohën dhe universin, bazuar në bashkëpunimin e autorit me Stephen Hawking." },


    //best sellers
    { id: 9, title: "The Da Vinci Code", author: "Dan Brown", image: "images/books/best1.jpg", price: "1,500 ALL", rating: 4.7, description: "Një thriller plot mistere që ndjek një profesor simbolike në një ndjekje për një sekret të fshehur nga Kisha Katolike." },
    { id: 10, title: "The Handmaid's Tale", author: "Margaret Atwood", image: "images/books/best2.jpg", price: "1,700 ALL", rating: 4.8, description: "Një tregim distopik për një shoqëri ku gratë trajtohen si pronë dhe rebelimi lind nga një shërbëtore." },
    { id: 29, title: "The Kite Runner", author: "Khaled Hosseini", image: "images/books/best3.jpg", price: "1,400 ALL", rating: 4.9, description: "Një histori prekëse për miqësinë, fajin dhe shpengimin në një Afganistan të trazuar." },
    { id: 30, title: "The Book Thief", author: "Markus Zusak", image: "images/books/best4.jpg", price: "1,500 ALL", rating: 4.8, description: "Një vajzë gjermane gjatë Luftës së Dytë Botërore gjen ngushëllim në libra ndërsa bota e saj shembet." },
    { id: 31, title: "Life of Pi", author: "Yann Martel", image: "images/books/best5.jpg", price: "1,400 ALL", rating: 4.7, description: "Një histori mbijetese dhe mrekullie për një djalë që lundron në det me një tigër bengalez pas një përmbytjeje." },
    { id: 32, title: "The Help", author: "Kathryn Stockett", image: "images/books/best6.jpg", price: "1,600 ALL", rating: 4.8, description: "Një roman i fuqishëm mbi marrëdhëniet racore dhe luftën për barazi në Amerikën e jugut gjatë viteve '60." },
     
]; 
              