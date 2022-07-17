const btnMenu = document.querySelector(".header__burger");
if(btnMenu){
   const menu = document.querySelector(".nav");
   btnMenu.addEventListener("click",(e)=>{
      btnMenu.classList.toggle("_active");
      menu.classList.toggle("_open");
   })
}