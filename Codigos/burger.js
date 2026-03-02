//VARIABLES

const _burger = document.getElementById("burger");
const _burgerbutton = document.getElementById("burger-button");

let _active = false;

//CODIGO DE LA HAMBURGESA

_burger.style.display = 'none';

function hamburgesa(){
    if(_active == true){
        _burger.style.display = 'none';
        _active = false;

    }else{
        _burger.style.display = 'flex';
        _active = true;

    }
}