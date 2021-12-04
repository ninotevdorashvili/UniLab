// let sidenav = document.getElementById('mySydenav');
// let burgerbar = document.getElementById('bar');
// burgerbar.addEventListener('click', function(){
//     sidenav.classList.toggle('active');
// });



// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//   }
  
//   function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//   }

var burger = document.getElementById("burger_menu");
var menu = document.getElementById("pop_up");
burger.addEventListener("click" , function(){
    menu.style.left = "0" ;
    // menu.style.display = "block" ;
})

var back = document.getElementById("back") ;
back.addEventListener("click" , function(){
    menu.style.left = "-390px" ;
    // menu.style.display = "block" ;
});