const imgElements = document.getElementsByTagName("img");
let  blankElement = document.getElementsByClassName("blank-element")[0];

// clickedElement.setAttribute("data-row", blankRow);
// clickedElement.setAttribute("data-col", blankCol);
// blankElement.setAttribute("data-row", dataRow);
// blankElement.setAttribute("data-col", dataCol);
// clickedElement.setAttribute("src", blankSrc);
// blankElement.setAttribute("src", dataSrc);

let  blankRow = blankElement.getAttribute("data-row");
let  blankCol = blankElement.getAttribute("data-col");
let  blankSrc = blankElement.getAttribute("src");
let  blankClass = blankElement.getAttribute("class");





for (let i = 0; i < imgElements.length; i++) {
    imgElements[i].addEventListener("click", function(event) {
      // Access the clicked image element
      let clickedImg = event.target;





      // console.log(clickedImg)

       // console.log(blankElement)
      // Access the data attributes of the clicked image
      let  dataRow = clickedImg.getAttribute("data-row");
      let  dataCol = clickedImg.getAttribute("data-col");
      let  dataSrc = clickedImg.getAttribute("src");
      let  dataClass = clickedImg.getAttribute("class");

   // now we swap the values of clicked element and blank element 

   function swapElements(){
          clickedImg.setAttribute("src" ,blankSrc)
          blankElement.setAttribute("src" , dataSrc)
  
            let temp;     
           temp = dataRow;
           dataRow= blankRow;
           blankRow = temp;
  
           temp = dataCol;
           dataCol= blankCol;
           blankCol = temp;
         
            blankElement = clickedImg;
  }
   //swapping conditions:

    // for row 3 swap

   if(dataRow == 3 && dataCol == 2  && blankRow == 3 && blankCol == 3 ) {
    swapElements(clickedImg, blankElement);
   }
   else if(dataRow == 3 && dataCol == 3  && blankRow == 3 && blankCol == 2 ) {
    swapElements(clickedImg, blankElement);
   }
   else if(dataRow == 3 && dataCol == 1  && blankRow == 3 && blankCol == 2 ) {
    swapElements(clickedImg, blankElement);
   }
   else if(dataRow == 3 && dataCol == 2  && blankRow == 3 && blankCol == 1 ) {
    swapElements(clickedImg, blankElement);
   }
    // for  row 2 swap
  else if(dataRow == 2 && dataCol == 2  && blankRow == 3 && blankCol == 2 ) {
      swapElements(clickedImg, blankElement);
   }
  else if(dataRow == 3 && dataCol == 2  && blankRow == 2 && blankCol == 2 ) {
      swapElements(clickedImg, blankElement);
   }
  else if(dataRow == 2 && dataCol == 1  && blankRow == 2 && blankCol == 2 ) {
    swapElements(clickedImg, blankElement);
 }
 else if(dataRow == 2 && dataCol == 2  && blankRow == 2 && blankCol == 1) {
  swapElements(clickedImg, blankElement);
}
else if(dataRow == 2 && dataCol == 3  && blankRow == 2 && blankCol == 2 ) {
  swapElements(clickedImg, blankElement);
}
else if(dataRow == 2 && dataCol == 2  && blankRow == 2 && blankCol == 3) {
swapElements(clickedImg, blankElement);
}
else if(dataRow == 2 && dataCol == 1  && blankRow == 3 && blankCol == 1 ) {
  swapElements(clickedImg, blankElement);
}
else if(dataRow == 3 && dataCol == 1  && blankRow == 2 && blankCol == 1) {
swapElements(clickedImg, blankElement);
}
else if(dataRow == 3 && dataCol == 3  && blankRow == 2 && blankCol == 3 ) {
  swapElements(clickedImg, blankElement);
}
else if(dataRow == 2 && dataCol == 3  && blankRow == 3 && blankCol == 3) {
  swapElements(clickedImg, blankElement);
}

// swap row 1

else if(dataRow == 1 && dataCol == 2  && blankRow == 2 && blankCol == 2 ) {
  swapElements(clickedImg, blankElement);
}
else if(dataRow == 2 && dataCol == 2  && blankRow == 1 && blankCol == 2) {
  swapElements(clickedImg, blankElement);
}
else if(dataRow == 1 && dataCol == 1  && blankRow == 1 && blankCol == 2 ) {
  swapElements(clickedImg, blankElement);
}
else if(dataRow == 1 && dataCol == 2  && blankRow == 1 && blankCol == 1) {
  swapElements(clickedImg, blankElement);
}

else if(dataRow == 1 && dataCol == 1  && blankRow == 2 && blankCol == 1 ) {
  swapElements(clickedImg, blankElement);
}
else if(dataRow == 2 && dataCol == 1  && blankRow == 1 && blankCol == 1) {
  swapElements(clickedImg, blankElement);
}
else if(dataRow == 1 && dataCol == 3  && blankRow == 1 && blankCol == 2 ) {
  swapElements(clickedImg, blankElement);
}
else if(dataRow == 1 && dataCol == 2  && blankRow == 1 && blankCol == 3) {
  swapElements(clickedImg, blankElement);
}
else if(dataRow == 1 && dataCol == 3  && blankRow == 2 && blankCol == 1 ) {
  swapElements(clickedImg, blankElement);
}
else if(dataRow == 2 && dataCol == 1  && blankRow == 1 && blankCol == 3) {
  swapElements(clickedImg, blankElement);
}
else if(dataRow == 2 && dataCol == 3  && blankRow == 1 && blankCol == 3 ) {
  swapElements(clickedImg, blankElement);
}
else if(dataRow == 1 && dataCol == 3  && blankRow == 2 && blankCol == 3) {
  swapElements(clickedImg, blankElement);
}





   
           
});



}

  
