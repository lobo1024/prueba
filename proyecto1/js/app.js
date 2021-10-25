let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
let containerMenu = document.querySelector('.menu');
let activador = true;


btnMenu.addEventListener('click', () =>{

    //controla el boton de barra y x
    document.querySelector('.btn-menu i').classList.toggle('fa-times');

    if(activador){
        menu.style.left = "0";
        menu.style.transition = "0.5s"; 
        activador = false;

    }else{
        activador = false;

        menu.style.left = "-100%";
        menu.style.transition = "0.5s"; 

        activador = true;
    }
} );

//INTERCALAR CLASE ACTIVO

let enlace = document.querySelectorAll('.lists li a');

enlace.forEach( (element) =>{

    element.addEventListener('click', (event) =>{
    
    

    enlace.forEach((link) =>{
        link.classList.remove('activo');

    });

    event.target.classList.add('activo');
});

});


//EFECTO SCROLL

let prevScrollPos = window.pageYOffset;
let gotop = document.querySelector('.go-top');


window.onscroll = () => {
    
    let currenScrollPos = window.pageYOffset; //valor de la posicion d el aventana actual 

    //MOSTRAR Y OCULTAR MENU
    if (prevScrollPos > currenScrollPos){

        containerMenu.style.top = "0";
        containerMenu.style.transition = "0.5s";

    }else{

        containerMenu.style.top = "-60px";
        containerMenu.style.transition = "0.5s";
    }

    prevScrollPos = currenScrollPos;

    //MOSTRAR Y OCULTAR SCROLL ESTILOS

    let arriba = window.pageYOffset;

    if (arriba <= 600){
        containerMenu.style.borderBottom = "none";

        gotop.style.right = "-100%";
    }else{

        containerMenu.style.borderBottom = "3px solid #ff2e63";

        gotop.style.right = "0";
        gotop.style.transition = "0.5s";
    }
     
}


gotop.addEventListener('click', () => {

    document.body.scollTop = 0;
    document.documentElement.scrollTop = 0;

});

let verAbajo = document.querySelector('#abajo');

verAbajo.addEventListener('click', () =>{

    document.body.scollTop = 900;
    document.documentElement.scrollTop = 900;

});