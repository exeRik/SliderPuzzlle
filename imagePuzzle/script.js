const imgElements = document.getElementsByTagName("img");
const blankElement = document.getElementsByClassName("blank-element")[0];






for (let i = 0; i < imgElements.length; i++) {
    imgElements[i].addEventListener("click", function(event) {
      // Access the clicked image element
      let clickedImg = event.target;
    //   console.log(clickedImg)
    let  blankRow = blankElement.getAttribute("data-row");
    let  blankCol = blankElement.getAttribute("data-col");
    let  blankSrc = blankElement.getAttribute("src");
    let  blankClass = blankElement.getAttribute("class");
      // Access the data attributes of the clicked image
      let  dataRow = clickedImg.getAttribute("data-row");
      let  dataCol = clickedImg.getAttribute("data-col");
      let  dataSrc = clickedImg.getAttribute("src");
      let  dataClass = clickedImg.getAttribute("class");

  
      // Log or use the data attributes

      //initaillay setting location of blankthinggy
      
    
    // now we check for the blank thingy wrt to clicked elements index
     if(dataRow == 3 && dataCol == 2){
        if(blankRow == 3 && blankCol == 3) {

            clickedImg.setAttribute("src" ,blankSrc)
            blankElement.setAttribute("src" , dataSrc)
            blankElement.setAttribute("data-row" , dataRow)
            blankElement.setAttribute("data-col" , dataCol)
            blankElement.setAttribute("class" , dataClass)
            clickedImg.setAttribute("data-row" , blankRow)
            clickedImg.setAttribute("data-col" , blankCol)
            clickedImg.setAttribute("class" , blankClass)
            // Swap blankRow and dataRow
            console.log("Before Swap:", blankRow, dataRow);
            [blankRow, dataRow] = [dataRow, blankRow];
            [blankCol, dataCol] = [dataCol, blankCol];
            console.log("After Swap:", blankRow, dataRow);
            console.log("After Swap:", blankCol, dataCol);
            // Log for debugging
            console.log("Data:", dataRow, dataCol, blankRow, blankCol);
            console.log(clickedImg)
 

        }

     }
     
     if(dataRow == 2 && dataCol == 3){
        if(blankRow == 3 && blankCol == 3) {
            clickedImg.setAttribute("src" ,"images/blank.avif")
            blankElement.setAttribute("src" , dataSrc)
            blankElement.setAttribute("data-row" , dataRow)
            blankElement.setAttribute("data-col" , dataCol)
            blankElement.setAttribute("class" , dataClass)
            clickedImg.setAttribute("data-row" , blankRow)
            clickedImg.setAttribute("data-col" , blankCol)
            clickedImg.setAttribute("class" , blankClass)
            // Swap blankRow and dataRow
            [blankRow, dataRow] = [dataRow, blankRow];
            [blankCol, dataCol] = [dataCol, blankCol];
            console.log(clickedImg)


        }

     }
     if(dataRow == 2 && dataCol == 2){
        if(blankRow == 3 && blankCol == 2) {
            clickedImg.setAttribute("src" ,blankSrc)
            blankElement.setAttribute("src" , dataSrc)
            blankElement.setAttribute("data-row" , dataRow)
            blankElement.setAttribute("data-col" , dataCol)
            blankElement.setAttribute("class" , dataClass)
            clickedImg.setAttribute("data-row" , blankRow)
            clickedImg.setAttribute("data-col" , blankCol)
            clickedImg.setAttribute("class" , blankClass)
            // Swap blankRow and dataRow

            [blankRow, dataRow] = [dataRow, blankRow];
            console.log(clickedImg)



        }
         else if(blankRow == 2 && blankCol == 3) {
            clickedImg.setAttribute("src" ,blankSrc)
            blankElement.setAttribute("src" , dataSrc)
            blankElement.setAttribute("data-row" , dataRow)
            blankElement.setAttribute("data-col" , dataCol)
            blankElement.setAttribute("class" , dataClass)
            clickedImg.setAttribute("data-row" , blankRow)
            clickedImg.setAttribute("data-col" , blankCol)
            clickedImg.setAttribute("class" , blankClass)
            // Swap blankRow and dataRow

            [blankRow, dataRow] = [dataRow, blankRow];
            console.log(clickedImg)



        }

     }

   

    });
  }

  