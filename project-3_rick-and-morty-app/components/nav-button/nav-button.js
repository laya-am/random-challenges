import { fetchCharacters } from "../../index.js";
const cardContainer = document.querySelector('[data-js="card-container"]');

export function createButton(){
    const nextButton= document.createElement("button");
    nextButton.classList.add("button");
    nextButton.classList.add("button--next");
    nextButton.setAttribute("data-js", "button-next");
    nextButton.textContent="next";

    const prevButton= document.createElement("button");
    prevButton.classList.add("button");
    prevButton.classList.add("button--prev");
    prevButton.setAttribute("data-js", "button-prev");
    prevButton.textContent="previous";

    return [nextButton, prevButton];
}


export function handleNextClick(pageIndex){
  cardContainer.innerHTML="";
  pageIndex++;
  fetchCharacters(pageIndex);
};

export function handlePrevClick(pageIndex){
    cardContainer.innerHTML="";
    pageIndex--;
    fetchCharacters(pageIndex);
  };