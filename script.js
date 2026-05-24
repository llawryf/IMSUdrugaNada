

const sideMenu = document.getElementById('side-menu');
const menuOpenBtn = document.getElementById('menu-open');
const menuCloseBtn = document.getElementById('menu-close');
const menuOverlay = document.getElementById('menu-overlay');

// otvori meni
menuOpenBtn.addEventListener('click', () => {
    sideMenu.classList.add('open');
    menuOverlay.classList.add('visible');
});

// zatvori meni
const closeMenu = () => {
    sideMenu.classList.remove('open');
    menuOverlay.classList.remove('visible');
};

menuCloseBtn.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);













// za taste.html
  const problemsData = {
    metallic: {
        title: "Metalni okus",
        solutions: [
            "Koristite plastični pribor za jelo umjesto metalnog",
            "Dodajte citruse (limun, limeta) u hranu i vodu",
            "Marinirajte meso u slatkim ili kiselkastim umacima",
            "Isperite usta prije jela",
            "Birajte hladnu hranu koja ima manje izražen metalni okus"
        ]
    },
    loss: {
        title: "Gubitak okusa",
        solutions: [
            "Koristite jače začine (začinsko bilje, češnjak)",
            "Kombinirajte različite teksture (hrskavo, kremasto)",
            "Isprobajte hranu s jakim prirodnim okusima",
            "Pojačajte arome kako biste potaknuli apetit",
            "Eksperimentirajte s toplom i hladnom hranom"
        ]
    },
    heightened: {
        title: "Preosjetljivost",
        solutions: [
            "Birajte blagu, neutralnu hranu",
            "Razrijedite jake okuse",
            "Jedite hranu na sobnoj temperaturi",
            "Izbjegavajte jako začinjena jela",
            "Isprobajte neutralne proteine poput piletine ili tofua"
        ]
    }
};

const cards = document.querySelectorAll('.symptom-card');
const solutionSection = document.getElementById('solution-section');
const solutionTitle = document.getElementById('solution-title');
const solutionList = document.getElementById('solution-list');
const instructionText = document.getElementById('instruction-text');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const symptomKey = card.getAttribute('data-symptom');
        const data = problemsData[symptomKey];
        
        // Provjeri je li ova kartica već aktivna prije nego što išta promijeniš
        const isAlreadyActive = card.classList.contains('active');

        // 1. Prvo makni 'active' sa svih kartica (reset)
        cards.forEach(c => c.classList.remove('active'));

        if (isAlreadyActive) {
            // Ako je bila aktivna, sada je zatvaramo
            solutionSection.classList.add('hidden');
            instructionText.innerText = "Klikni na bilo koji simptom iznad kako bi vidio personalizirane savjete.";
        } else {
            // Ako nije bila aktivna, otvaramo je
            card.classList.add('active');
            
            // Prikaži sekciju i popuni podatke
            solutionSection.classList.remove('hidden');
            solutionTitle.innerText = `Rješenja za: ${data.title}`;
            instructionText.innerText = "Klikni ponovno na isti simptom da zatvoriš rješenja.";

            solutionList.innerHTML = '';
            data.solutions.forEach((sol, index) => {
                const item = document.createElement('div');
                item.className = 'solution-item';
                item.style.animationDelay = `${index * 0.1}s`;
                item.innerHTML = `
                    <div class="number-badge">${index + 1}</div>
                    <p>${sol}</p>
                `;
                solutionList.appendChild(item);
            });

            // Lagani scroll do rješenja
            solutionSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
});




