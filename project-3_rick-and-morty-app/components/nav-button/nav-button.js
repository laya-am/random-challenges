const navigation = document.querySelector('[data-js="navigation"]');

function createButton(){
    const nextButton= document.createElement("button");
    nextButton.classList.add("button button--next");
    nextButton.setAttribute("data-js", "button-next");
    nextButton.textContent="next";

    const prevButton= document.createElement("button");
    prevButton.classList.add("button button--prev");
    prevButton.setAttribute("data-js", "button-prev");
    prevButton.textContent="previous";
    
    return nextButton, prevButton;
}
//remember to append

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