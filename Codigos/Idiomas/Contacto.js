// EXPLICACION DE LOS ID
// Los id de los idiomas funciona en base numerica 
// en el siguiente orden:

// PRIMER NUMERO
// 0 = titulo | 1 = texto | 2 = otros

// SEGUNDO NUMERO
// 1 = h1 / p / marquee
// 2 = h2 / a / botón
// 3 = h3 / b / input
// 4 = h4 / spam

// TERCER NUMERO
// Hueco disponible empezando por 1

// VARIABLES
let idiomas = ['es','ca','en'];

let selectmenu = document.getElementsByTagName('select');

cambiaridioma(localStorage.getItem("idioma"))

// CODIGO DE IDIOMA
selectmenu[0].addEventListener("change", () => revisaridioma(selectmenu[0].value));

// REVISA EL IDIOMA ACTUAL
function revisaridioma(actual){
    console.log("El idioma actual es: " + actual)
    cambiaridioma(actual);
    localStorage.setItem("idioma", actual);
    return(actual);
}

function cambiaridioma(acutal){
    console.log("cambiando idioma a..." + acutal);
    if(acutal == "castellano"){
        cambiartexto('es');
    }
    else if(acutal == "catala"){
        cambiartexto('ca');
    }
    else if(acutal == "english"){
        cambiartexto('en');
    }
}

function cambiartexto(entry){
    if ( entry == 'es'){
        document.getElementById("011").innerText = "CONTÁCTAME"

        document.getElementById("021").innerText = "Ubicación:"
        document.getElementById("022").innerText = "Número de Teléfono:"
        document.getElementById("023").innerText = "Correo Electronico:"

        //OTROS
        document.getElementById("211").innerText = "¡Bienvenido! a mi portafolio electrónico. Este es un espacio donde comparto mis proyectos; explóralos cuanto quieras. Ante cualquier duda o interés, puedes contactarme. ¡Sigue siempre adelante!";
        
        document.getElementById("221").innerText = "SOBRE MI"
        document.getElementById("222").innerText = "PROYECTOS"
        document.getElementById("223").innerText = "CONTACTO"
        document.getElementById("224").innerText = "GALERIA"
        document.getElementById("225").innerText = "SOBRE MI"
        document.getElementById("226").innerText = "PROYECTOS"
        document.getElementById("227").innerText = "CONTACTO"
        document.getElementById("228").innerText = "GALERIA"
        document.getElementById("229").innerText = "<< ENVIAR >>"

        document.getElementById("231").placeholder = "Nombre*"
        document.getElementById("232").placeholder = "Correo electronico*"
        document.getElementById("233").placeholder = "Mensaje...*"
    }
    else if (entry == 'ca'){
        document.getElementById("011").innerText = "CONTACTE"

        document.getElementById("021").innerText = "Ubicació:"
        document.getElementById("022").innerText = "Número de Teléfon:"
        document.getElementById("023").innerText = "Correu Electrónic:"

        //OTROS
        document.getElementById("211").innerText = "Benvingut! al meu portafolis electrònic. Aquest és un espai on comparteixo els meus projectes; explora'ls quant vulguis. Davant qualsevol dubte o interès, pots contactar-me. Segueix sempre avanci!";

        document.getElementById("221").innerText = "QUI SOC"
        document.getElementById("222").innerText = "PROJECTES"
        document.getElementById("223").innerText = "CONTACTE"
        document.getElementById("224").innerText = "GALERIA"
        document.getElementById("225").innerText = "QUI SOC"
        document.getElementById("226").innerText = "PROJECTES"
        document.getElementById("227").innerText = "CONTACTE"
        document.getElementById("228").innerText = "GALERIA"
        document.getElementById("229").innerText = "<< DESPATXAR >>"

        document.getElementById("231").placeholder = "Nom*"
        document.getElementById("232").placeholder = "Correu electrónic*"
        document.getElementById("233").placeholder = "Missatge...*"

    }else{
        document.getElementById("011").innerText = "CONTACT ME"

        document.getElementById("021").innerText = "Ubicación:"
        document.getElementById("022").innerText = "Número de Teléfono:"
        document.getElementById("023").innerText = "Correo Electronico:"

        //OTROS
        document.getElementById("211").innerText = "Welcome to my electronic portfolio. This is a space where I share my projects; explore them as you want. Before any doubt or interest, you can contact me. Keep moving Forward!";

        document.getElementById("221").innerText = "ABOUT ME"
        document.getElementById("222").innerText = "PROJECTS"
        document.getElementById("223").innerText = "CONTACT"
        document.getElementById("224").innerText = "GALLERY"
        document.getElementById("225").innerText = "ABOUT ME"
        document.getElementById("226").innerText = "PROJECTS"
        document.getElementById("227").innerText = "CONTACT"
        document.getElementById("228").innerText = "GALLERY"
        document.getElementById("229").innerText = "<< ENVIAR >>"

        document.getElementById("231").placeholder = "Nombre*"
        document.getElementById("232").placeholder = "Correo electronico*"
        document.getElementById("233").placeholder = "Mensaje...*"
    }
}