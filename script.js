
const formular = document.getElementById("musicForm");
const carduri = document.getElementById("carduri");

formular.addEventListener("submit", function(event) {
    
    event.preventDefault();

    
    const titlu = document.getElementById("titlu").value;
    const descriere = document.getElementById("descriere").value;

    
    const card = document.createElement("div");
    card.classList.add("card");

    
    card.innerHTML = `
        <h3>${titlu}</h3>
        <p>${descriere}</p>
    `;

    
    carduri.appendChild(card);

    
    formular.reset();
});

