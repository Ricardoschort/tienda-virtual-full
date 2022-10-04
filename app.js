const menuHamButton= document.querySelector(".menu-icon");
const menuHam = document.querySelector(".nav__menu-ham--container");
const closeMenuHam = document.querySelector(".close-ham")

menuHamButton.addEventListener("click",()=>{
    menuHam.classList.toggle("show");
});

closeMenuHam.addEventListener("click",()=>{
    menuHam.classList.toggle("show")
})


/*mostrar los detalles del carrito de compras*/

const cardBuy= document.querySelector(".card__notification-buy");
const cardBuyButtom = document.querySelector(".cart");
const cardEmpty = document.querySelector(".card__notification-empty");

cardBuyButtom.addEventListener("click", openCard)




/*mostrar el comportamiento de añadir y dismunir el carrito y mostrar el comportamiento del carrito*/

let minus = document.querySelector(".minus");
let max = document.querySelector(".plus")
let placeCount = document.querySelector(".count");
let noticationNumb = document.querySelector(".notication-numnb");
let add = document.querySelector(".add");
let count=0;
let textInfoBuy= document.querySelector(".card__notication-info-text-price");
const deleteButton=document.querySelector(".delete")


minus.addEventListener("click", ()=>{
    count--
    if(count<0){
        count=0;
    }
    placeCount.innerHTML=count;

})

max.addEventListener("click", ()=>{
    count++;
    placeCount.innerHTML=count;
   
})

deleteButton.addEventListener("click",()=>{
    if(count>=1){
        cardBuy.classList.remove("active")
        

    }else{
        cardEmpty.classList.remove("active");
    }
    count=0;
    noticationNumb.innerText=0;
    placeCount.innerHTML=count;
    noticationNumb.classList.remove("active")
    
   
})

add.addEventListener("click",()=>{
    countLast = parseInt(noticationNumb.innerText);
    noticationNumb.innerText=count + countLast;
    textInfoBuy.innerHTML=`$125.00 x ${noticationNumb.innerText} <span class="card__notication-info-text-price--total">$${(count+countLast)*125}.00</span>`
    if(count>0){
        noticationNumb.classList.add("active");
        cardBuy.classList.add("active");
        
    }else{
        noticationNumb.classList.remove("active");
        cardEmpty.classList.remove("active");
    }
    
})


function openCard(){
    if (count>1) {
    cardBuy.classList.toggle("active");
    } else {
        cardBuy.classList.remove("active");
        cardEmpty.classList.toggle("active")
    }
}

/* Galeria principal desktop*/
let closePopUp =document.querySelector(".close-galery-popup")
let imgMainDesktop = document.querySelector(".imgMain-desktop")
let imgMainDesktopContainer = document.querySelector(".galery__desktop-popup-container")
let containerThumnailDesktop= document.querySelector(".img-thubnail-container");
let imgThumnailDesktop = document.querySelectorAll(".imgThubnail")
let tubnailsDesktopPopUp = document.querySelectorAll(".img-thubnail-desktop-container");
let imgThumnailDesktopPopUp = document.querySelector(".img-thubnail-desktop")
let nextIconPopUp = document.querySelector(".next-icon-popup");
let previusIconPopUp = document.querySelector(".previus-icon-popup");
imgThumnailDesktop= [...imgThumnailDesktop] ;
tubnailsDesktopPopUp =[...tubnailsDesktopPopUp]



imgThumnailDesktop.forEach(img=>{
    img.addEventListener("click",(e)=>{
        let index =e.target.id
        document.querySelector(".imgMain-desktop").src=`./images/image-product-${index}.jpg`;
       
    })
    
})




imgMainDesktop.addEventListener("click", ()=>{
    imgMainDesktopContainer.classList.add("active")
})

closePopUp.addEventListener("click", ()=>{
    imgMainDesktopContainer.classList.remove("active")
})

tubnailsDesktopPopUp.forEach(imgPopUp=>{
    imgPopUp.addEventListener("click", (e)=>{
    let popIndex=(e.target.id.slice(-1))
    document.querySelector(".galery__desktop-popup-img").src=`images/image-product-${popIndex}.jpg`;

    })
    
})

previusIconPopUp.addEventListener("click", nextImg)


function nextImg(){
    
}