const containerEl = document.querySelector(".container");

const buttonEl = document.querySelector(".btn");

buttonEl.addEventListener("click",()=>{
    //console.log("clicked");

    imageNum = 10;
    addImages();
});
function addImages(){
    for(let i=0;i<imageNum;i++){
        const newIMG = document.createElement("img");
    newIMG.src =`https://picsum.photos/300?random=${Math.floor(Math.random()*1000)}`;

    containerEl.appendChild(newIMG);
    }
    
}