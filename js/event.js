const events = {
    1: {
        id: 1,
        emri: "KONKURS \"POSTERI MË I BUKUR\"",
        bashkepunetor: "-",
        data: "31 Gusht, 2025\n",
        description: "Bashkohuni konkursit tonë vjetor që lidh artin me letërsinë. Fituesi shpallet më 31 gusht.",
    },


    2:{
        id: 2,
        emri: "FLASIM ME... VIKTOR CANOSINAJ",
        bashkepunetor: "VIKTOR CANOSINAJ",
        data: "10 Prill, 2024 - 17:00",
        description: "Shkrimtari i mirënjohur Viktor Canosinaj na bashkohet në një bisedë rreth veprës së tij të fundit."
    },

    3: {
        id: 3,
        emri: "KOHA E PËRRALLAVE",
        data: "Çdo të Shtunë - 11:00",
        bashkepunetor: "Fondacionit Fëmijët Shqiptarë",
        description: "Vullnetarë të Fondacionit Fëmijët Shqiptarë vijnë me misionin " +
            "për t'ju zbukuruar ditën fëmijëve me lexime përrallash."
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

    document.title = `${event.emri} - Library`;
    document.getElementById('eventType').value = event.emri;
}


loadEventDetails();


