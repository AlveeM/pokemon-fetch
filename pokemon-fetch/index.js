document.addEventListener('DOMContentLoaded', function() {
  fetchPokemon("pikachu");
});

function fetchPokemon(pokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  .then(res => res.json())
  .then(pokemon => {
    const pokemonCard = createPokemonCard(pokemon);
    addPokemonCardToDOM(pokemonCard);
  });
}

function createPokemonCard(pokemon) {
  const card = document.createElement('div');
  card.classList.add("card");

  const heading = document.createElement("h2");
  heading.textContent = pokemon.name;
  heading.classList.add("card-heading");

  const image = document.createElement("img");
  image.src = pokemon.sprites.front_default;

  card.appendChild(heading);
  card.appendChild(image);
  
  return card;
}

function addPokemonCardToDOM(pokemonCard) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.appendChild(pokemonCard);
}