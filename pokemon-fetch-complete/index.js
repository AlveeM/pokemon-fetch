let cardSection;
let cardContainer;
let filter;
let pokemonsData;

document.addEventListener("DOMContentLoaded", function () {
  cardSection = document.getElementsByClassName("card-section")[0];
  listContainer = document.getElementsByClassName("list-container")[0];
  filter = document.getElementById("pokemon-dropdown");
  filter.addEventListener("change", function (event) {
    const option = event.target.value;
    selectPokemon(option);
  });

  loadPokemon("Charizard");
  loadPokemonList();
});

function loadPokemon(pokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("failed to fetch pokemon");
      }
    })
    .then((pokemon) => {
      const pokemonCard = createPokemonCard(pokemon);
      clearPokemonCard();
      addPokemonCard(pokemonCard);
    })
    .catch((e) => console.log(e));
}

function createPokemonCard(pokemon) {
  const card = document.createElement("div");
  card.classList.add("card");
  const name = document.createElement("h2");
  name.classList.add("card__heading");
  name.textContent = pokemon.name;
  const img = document.createElement("img");
  img.src = pokemon.sprites.front_default;
  img.classList.add("card__image");
  card.appendChild(name);
  card.appendChild(img);
  return card;
}

function addPokemonCard(pokemonCard) {
  cardSection.appendChild(pokemonCard);
}

function clearPokemonCard() {
  cardSection.innerHTML = "";
}

function loadPokemonList() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((res) => res.json())
    .then((data) => {
      pokemonsData = data.results;
      updateList(pokemonsData);
    });
}

function updateList(pokemons) {
  clearList();
  pokemons.forEach(addPokemonList);
}

function clearList() {
  listContainer.innerHTML = "";
}

function addPokemonList(pokemon) {
  const li = document.createElement("li");
  li.textContent = pokemon.name;
  li.addEventListener('click', function (event) {
    const pokemon = event.target.textContent;
    loadPokemon(pokemon);
  })
  listContainer.appendChild(li);
}

function selectPokemon(option) {
  const filteredPokemons = filterPokemons(option);
  updateList(filteredPokemons);
}

function filterPokemons(option) {
  return pokemonsData.filter((pokemon) => pokemon.name.startsWith(option));
}
