import { createCharacterCard } from "./components/card/card.js";
import { setPagination } from "./components/nav-pagination/nav-pagination.js";
import { createButton, handleNextClick, handlePrevClick } from "./components/nav-button/nav-button.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";
import { createSearchBar, handleSearch } from "./components/search-bar/search-bar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const navigation = document.querySelector('[data-js="navigation"]');

// States
let maxPage;
// let pageIndex = 1;

const [nextButton, prevButton]= createButton();
const pagination= createPagination();
const searchBar= createSearchBar();

navigation.append(prevButton)
navigation.append(pagination)
navigation.append(nextButton)
searchBarContainer.append(searchBar)

searchBar.onsubmit= (e)=> handleSearch(e);
await fetchCharacters();

export async function fetchCharacters(pageIndex = 1, searchQuery=""){
  try {
    const response= await fetch(`https://rickandmortyapi.com/api/character?page=${pageIndex}&name=${searchQuery}`);
    const data= await response.json();
    console.log(data);
    maxPage = data.info.pages;
    
    pagination.innerHTML= `${pageIndex} / ${maxPage}`
    nextButton.onclick = () =>handleNextClick(pageIndex);
    prevButton.onclick = () =>handlePrevClick(pageIndex);
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

