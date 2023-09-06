searchBar.addEventListener("submit", (e)=> {
    e.preventDefault();
    searchQuery= e.target.query.value;
    console.log(searchQuery);
    cardContainer.innerHTML="";
    fetchCharacters();
    e.target.reset();
  })
  //remember to append