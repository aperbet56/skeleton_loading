// Récupération des éléments HTML5
const cardsGrid = document.querySelector(".cards__grid");
const cards = document.querySelectorAll(".card");

// Création de la variable data qui va stocker les données de l'API dans un tableau
let data = [];

/**
 * Déclaration de la fonction asynchrone fetchDatas
 * Envoi d'une requête HTTP de type GET grâce à fetch
 * Stockage des données de l'API dans la variable data
 */
const fetchDatas = async () => {
  await fetch("https://picsum.photos/v2/list")
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (value) {
      data = value;
      console.log(data);
    })
    .catch(function (err) {
      // Affichage d'un message d'erreur dans la console
      console.error("Désolé, une erreur est survenue sur le serveur.");
    });
  // Appel de la fonction createCards ayant comme paramètre data (les données renvoyées par l'API);
  createCards(data);
};

// Appel de la fonction asynchrone fetchDatas()
fetchDatas();

// Déclaration de la fonction createCards ayant comme paramètre data (les données renvoyées par l'API) qui va permettre la création de cartes
const createCards = (data) => {
  // Création de la variable cardsList
  let cardsList = "";

  // Boucle for qui va parcourir toutes les cartes
  for (let i = 0; i < cards.length; i++) {
    // Mise en place de la structure HTML
    const newCard = `
        <div class="card">
          <img src=${data[i].download_url} class="top__img" />
          <div class="content">
            <h3 class="card__title">Lorem, ipsum dolor sit amet</h3>
            <p class="card__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p class="card__text">Lorem, ipsum dolor</p>
          </div>
        </div>
        `;
    // Ajout de chaque nouvelle carte créée dans la variable cardsList
    cardsList += newCard;
  }

  cardsGrid.innerHTML = cardsList;
};
