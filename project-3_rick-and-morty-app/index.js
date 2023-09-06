import { createCharacterCard } from "./components/card/card.js";
import { setPagination } from "./components/nav-pagination/nav-pagination.js";
import { createButton, handleNextClick, handlePrevClick } from "./components/nav-button/nav-button.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const navigation = document.querySelector('[data-js="navigation"]');
const searchBar = document.querySelector('[data-js="search-bar"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage;
let pageIndex = 1;
let searchQuery = "";

const [nextButton, prevButton]= createButton();

navigation.append(nextButton)
navigation.append(prevButton)


await fetchCharacters(pageIndex);

export async function fetchCharacters(pageIndex){
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

