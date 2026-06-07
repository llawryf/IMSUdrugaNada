

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



