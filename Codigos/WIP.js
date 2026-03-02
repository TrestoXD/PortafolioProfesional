//VARIABLES

const _debug = false;

const _popup = document.getElementById('popup');
const _popupbackground = document.getElementById('popupbackground');

let _popupdata = sessionStorage.getItem("wippopup");

//CODIGO DEL POPUP

if(_popupdata == null || _debug == true){
    console.log("SACANDO POPUP!");

}else{
    _popup.style.display = 'none';
    _popupbackground.style.display = 'none';

    console.log("POPUP YA VISTO");
}

_popup.addEventListener('click', () => {
    _popup.style.display = 'none';
    _popupbackground.style.display = 'none';

    sessionStorage.setItem("wippopup", "true");
});