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
