const events = {
    1: {
        id: 1,
        emri: "KONKURS \"POSTERI MË I BUKUR\"",
        bashkepunetor: "-",
        data: "31 Gusht, 2025\n",
        description: "Bashkohuni konkursit tonë vjetor që lidh artin me letërsinë. Fituesi shpallet më 31 gusht.",
        status: 1
    },


    2: {
        id: 2,
        emri: "FLASIM ME... VIKTOR CANOSINAJ",
        bashkepunetor: "VIKTOR CANOSINAJ",
        data: "10 Prill, 2024 - 17:00",
        description: "Shkrimtari i mirënjohur Viktor Canosinaj na bashkohet në një bisedë rreth veprës së tij të fundit.",
        status: 1

    },

    3: {
        id: 3,
        emri: "KOHA E PËRRALLAVE",
        data: "Çdo të Shtunë - 11:00",
        bashkepunetor: "Fondacionit Fëmijët Shqiptarë",
        description: "Vullnetarë të Fondacionit Fëmijët Shqiptarë vijnë me misionin " +
            "për t'ju zbukuruar ditën fëmijëve me lexime përrallash.",
        status: 1
    },

    4: {
        id: 4,
        emri: "WORKSHOP I SHKRIMIT",
        data: "1 Mars, 2024",
        bashkepunetor: "Profesor nga Departi Letersise, Fakulteti i Filologjise.",
        description: "Workshop praktik për të gjithë ata që duan të zhvillojnë aftësitë e tyre në shkrim.",
        status: 0,
                imgs: [
            "images/events/workshop-shkrimit-1.jpg",
            "images/events/workshop-shkrimit-2.jpg",
            "images/events/workshop-shkrimit-3.jpg"
        ]
    

    },
    5: {
        id: 5,
        emri: "NATA E POEZISË",
        data: "15 Mars, 2024",
        bashkepunetor: "Te apasionuar ndaj poezise",
        description: "Një mbrëmje e veçantë me poetët tanë të preferuar dhe lexime nga veprat e tyre.",
        status: 0,
        imgs: [
            "images/events/nata-poezise-1.jpg",
            "images/events/nata-poezise-2.jpg",
            "images/events/nata-poezise-3.jpg",
            "images/events/nata-poezise-4.jpg"      
        ]
    }

}

function getEventIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

function loadEventDetails() {
    const eventId = getEventIdFromUrl();
    const event = events[parseInt(eventId)];

    if (!event) {
        document.querySelector('.product-detail-container').innerHTML = `
            <div class="container text-center py-5">
                <h2>Eventi nuk u gjet</h2>
                <p>Ju lutemi kthehuni te <a href="./event.html/"></a> faqja e eventeve.</p>
            </div>
        `;
        return;
    }

    if(event.status){
        document.title = `${event.emri} - Library`;
        document.getElementById('eventType').value = event.emri;

        // Add form submission handler
        const form = document.getElementById('eventRegistrationForm');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form data
                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());
                
                // Here you would typically send the data to a server
                console.log('Registration data:', data);
                
                // Show success modal
                const successModal = new bootstrap.Modal(document.getElementById('successModal'));
                successModal.show();
                
                // Reset form
                form.reset();
            });
        }
    } else{
        document.querySelector('.event-detail-content').innerHTML = `
        
        <div class="container text-center py-5">
                <h1 style="color: #333; margin-bottom: 1.5rem; font-family: 'Fredericka the Great', cursive;">${event.emri}</h1>
                <br>
                ${
                    event.imgs
                        ? `<div class="event-collage">
                            ${event.imgs.map((src, i) => 
                                `<img src="${src}" alt="${event.emri}" class="collage-img collage-img-${i % 4}">`
                            ).join('')}
                           </div>`
                        : ''
                }

            <div class="event-detail-c">
                <p class="event-date"><strong>Data:</strong> ${event.data}</p>
                <p class="event-partner"><strong>Bashkëpunëtor:</strong> ${event.bashkepunetor}</p>
                <p class="event-description">${event.description}</p>
            </div>
        </div>
        `;
    }

}


loadEventDetails();


