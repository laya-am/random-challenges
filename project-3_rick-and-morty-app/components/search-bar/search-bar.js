import { fetchCharacters } from "../../index.js";

const cardContainer = document.querySelector('[data-js="card-container"]');

export function createSearchBar(){
  const searchBar= document.createElement("form");
  searchBar.setAttribute("data-js","search-bar");
  searchBar.classList.add("search-bar");
  searchBar.innerHTML=`<input
  name="query"
  class="search-bar__input"
  type="text"
  placeholder="search characters"
  aria-label="character name"
/>
<button class="search-bar__button" aria-label="search for character">
  <img
    class="search-bar__icon"
    src="assets/magnifying-glass.png"
    alt=""
  />
</button>`
return searchBar;
}

export function handleSearch(e){
  e.preventDefault();
  const searchQuery= e.target.query.value ?? null;
  cardContainer.innerHTML="";
  fetchCharacters(1, searchQuery);
  e.target.reset();
}