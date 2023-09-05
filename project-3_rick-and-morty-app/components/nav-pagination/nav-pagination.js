export function setPagination(pageIndex, maxPage, prevButton, nextButton){
  console.log("inside setPagination");  
  if(pageIndex >= maxPage){
    nextButton.setAttribute("disabled", "")
    }
    else if(pageIndex === 1){
    prevButton.setAttribute("disabled", "")
    }else{
      prevButton.removeAttribute("disabled")
    }
  }