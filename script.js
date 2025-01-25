const imgElements = document.getElementsByTagName("img");
let  blankElement = document.getElementsByClassName("blank-element")[0];
const win = document.getElementsByClassName("win")[0];


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


// console.log((imgElements[1].src == 'http://127.0.0.1:5500/images/11.jpg')? "true" : "false");





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


// now we check for game over condition:
if(imgElements[1].src == 'http://127.0.0.1:5500/SliderPuzzlle/images/00.jpg' && imgElements[2].src == 'http://127.0.0.1:5500/SliderPuzzlle/images/10.jpg' && imgElements[3].src == 'http://127.0.0.1:5500/SliderPuzzlle/images/20.jpg' && imgElements[4].src == 'http://127.0.0.1:5500/SliderPuzzlle/images/01.jpg'  && imgElements[5].src == 'http://127.0.0.1:5500/SliderPuzzlle/images/11.jpg'  && imgElements[6].src == 'http://127.0.0.1:5500/SliderPuzzlle/images/21.jpg'  && imgElements[7].src == 'http://127.0.0.1:5500/SliderPuzzlle/images/02.jpg'  && imgElements[8].src == 'http://127.0.0.1:5500/SliderPuzzlle/images/12.jpg'   && imgElements[9].src == 'http://127.0.0.1:5500/SliderPuzzlle/images/blank.avif'){
   win.className = "win"
}
// else{
//   console.log("noobb")
// }


   
           
});



}



//to test the code: cick on: move the blocks surrounding blank block in clockwise or anticlockwise direction , until you win :))
  

