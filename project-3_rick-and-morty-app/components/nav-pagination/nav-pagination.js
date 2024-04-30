
export function createPagination(){
  const pagination = document.createElement("span");
  pagination.classList.add("navigation__pagination");
  pagination.setAttribute("data-js","pagination");
  return pagination;
}

export function setPagination(pageIndex, maxPage, prevButton, nextButton){
  if(pageIndex >= maxPage){
    nextButton.setAttribute("disabled", "")
    }
    else if(pageIndex === 1){
    prevButton.setAttribute("disabled", "")
    }else{
      prevButton.removeAttribute("disabled")
    }
  }