const popups = document.querySelectorAll(".popup");

for(let x=0;x<popups.length;x++){

    console.log(popups[x]);
    popups[x].addEventListener("click",function(){
      
          let outputText=this.getAttribute("data-message");
          console.log(outputText);

    })
}

