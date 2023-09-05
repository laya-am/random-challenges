import { createCharacterCard } from "./components/card/card.js";
import { setPagination } from "./components/nav-pagination/nav-pagination.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage;
let pageIndex = 1;
let searchQuery = "";

await fetchCharacters();

async function fetchCharacters(){
  try {
    const response= await fetch(`https://rickandmortyapi.com/api/character?page=${pageIndex}&name=${searchQuery}`);
    const data= await response.json();
    console.log(data);
    maxPage = data.info.pages;

    pagination.innerHTML= `${pageIndex} / ${maxPage}`
    const chars= data.results;
    
    setPagination(pageIndex, maxPage, prevButton, nextButton);

    chars.map(char => {
      const newCard= createCharacterCard(char)
      cardContainer.append(newCard)
    })
    
  } catch (error) {
    console.error(error)
  }
};

nextButton.addEventListener("click", ()=> {
  cardContainer.innerHTML="";
  pageIndex++;
  fetchCharacters();
});

prevButton.addEventListener("click", ()=> {
  cardContainer.innerHTML="";
  pageIndex--;
  fetchCharacters();
});

searchBar.addEventListener("submit", (e)=> {
  e.preventDefault();
  searchQuery= e.target.query.value;
  console.log(searchQuery);
  cardContainer.innerHTML="";
  fetchCharacters();
  e.target.reset();
})