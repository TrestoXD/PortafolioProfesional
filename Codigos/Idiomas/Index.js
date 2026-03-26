// EXPLICACION DE LOS ID
// Los id de los idiomas funciona en base numerica 
// en el siguiente orden:

// PRIMER NUMERO
// 0 = titulo | 1 = texto | 2 = otros

// SEGUNDO NUMERO
// 1 = h1 / p / marquee
// 2 = h2 / a / botón
// 3 = h3 / b
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

        //TITULOS
        document.getElementById("011").innerText = "SOBRE MÍ"
        
        document.getElementById("021").innerText = "DESCRIPCIÓN:";
        document.getElementById("022").innerText = "LENGUAJES DE PROGRAMACIÓN:";
        document.getElementById("023").innerText = "SOFT SKILLS:";
        document.getElementById("024").innerText = "ESTUDIOS:";

        document.getElementById("041").innerText = "NACIMIENTO:";
        document.getElementById("042").innerText = "ESTADOS:"

        //TEXTO 
        document.getElementById("111").innerText = `Mi nombre es Vito Minaya González, fotógrafo aficionado apasionado de capturar momentos extraordinarios que suceden en mi vida cotidiana. Mientras que la fotografía me encanta, mi trabajo a tiempo completo es en la informática y la ciencia. Creyendo que entender las bases técnicas lleva a hacer las cosas mejor, lo que me motiva a crear experiencias que no solo se vean atractivas, sino que estén meticulosamente construidas para el rendimiento y la accesibilidad.`
        document.getElementById("112").innerText = "CFGM en Sistemas microinformáticos y redes.";
        
        document.getElementById("121").innerText = "Empatía y Compasión";
        document.getElementById("122").innerText = "Resiliencia y Voluntad";
        document.getElementById("123").innerText = "Responsabilidad";
        document.getElementById("124").innerText = "Flexibilidad y polivalencia";
        document.getElementById("125").innerText = "Pensamiento Círtico y habilidades analíticas";
        document.getElementById("126").innerText = "Gestuón de tiempo";
        document.getElementById("127").innerText = "Iniciativa y autonomía";
        document.getElementById("128").innerText = "Instituto de educación secundaria la Garrotxa.";
        document.getElementById("129").innerText = "Centro de estudios Monlau"

        document.getElementById("131").innerText = "FECHA: ";
        document.getElementById("132").innerText = "LUGAR: ";
        document.getElementById("133").innerText = "SEXO: ";
        document.getElementById("134").innerText = "NACIONALIDAD: ";
        document.getElementById("135").innerText = "ESTADO ACADEMICO: ";
        document.getElementById("136").innerText = "OCUPACIÓN: ";

        document.getElementById("141").innerText = "18 DE ABRIL DE 2008";
        document.getElementById("142").innerText = "BARCELONA";
        document.getElementById("143").innerText = "HOMBRE";
        document.getElementById("144").innerText = "ESPAÑOL";
        document.getElementById("145").innerText = "ESTUDIANTE";
        document.getElementById("146").innerText = "TRABAJANDO";

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
    }
    else if (entry == 'ca'){
        
        //TITULOS
        document.getElementById("011").innerText = "QUI SOC"
        
        document.getElementById("021").innerText = "DESCRIPCIÓ:";
        document.getElementById("022").innerText = "LENGUATJES DE PROGRAMACIÓN:";
        document.getElementById("023").innerText = "SOFT SKILLS:";
        document.getElementById("024").innerText = "ESTUDIS:";

        document.getElementById("041").innerText = "NAIXEMENT:";
        document.getElementById("042").innerText = "ESTATS:"

        //TEXTO 
        document.getElementById("111").innerText = `El meu nom és Vito Minaya González, fotògraf aficionat apassionat de capturar moments extraordinaris que succeeixen en la meva vida quotidiana. Mentre que la fotografia m'encanta, el meu treball a temps complet és en la informàtica i la ciència. Creient que entendre les bases tècniques porta a fer les coses millor, la qual cosa em motiva a crear experiències que no sols es vegin atractives, sinó que estiguin meticulosament construïdes per al rendiment i l'accessibilitat.`
        document.getElementById("112").innerText = "CFGM en Sistemes microinformàtics i xarxes.";
    
        document.getElementById("121").innerText = "Empatia i Compassió";
        document.getElementById("122").innerText = "Resiliència i Voluntat";
        document.getElementById("123").innerText = "Responsabilitat";
        document.getElementById("124").innerText = "Flexibilitat i Polivalència";
        document.getElementById("125").innerText = "Pensament critic i Habilitats analítiques";
        document.getElementById("126").innerText = "Gestió de temps";
        document.getElementById("127").innerText = "Iniciativa i autonomia";
        document.getElementById("128").innerText = "IES la Garrotxa";
        document.getElementById("129").innerText = "Centre d'estudis Monlau"

        document.getElementById("131").innerText = "DATA: ";
        document.getElementById("132").innerText = "LLOC: ";
        document.getElementById("133").innerText = "SEXE: ";
        document.getElementById("134").innerText = "NACIONALITAT: ";
        document.getElementById("135").innerText = "ESTAT ACADÈMIC: ";
        document.getElementById("136").innerText = "OCUPACIÓ: ";

        document.getElementById("141").innerText = "18 D'ABRIL DE 2008";
        document.getElementById("142").innerText = "BARCELONA";
        document.getElementById("143").innerText = "HOME";
        document.getElementById("144").innerText = "ESPAÑOL";
        document.getElementById("145").innerText = "ESTUDIANT";
        document.getElementById("146").innerText = "TREBALLANT";
    
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

    }else{
        
        //TITULOS
        document.getElementById("011").innerText = "ABOUT ME"
        
        document.getElementById("021").innerText = "DESCRIPTION:";
        document.getElementById("022").innerText = "PROGRAMING LENGUAGES:";
        document.getElementById("023").innerText = "SOFT SKILLS:";
        document.getElementById("024").innerText = "STUDIES:";

        document.getElementById("041").innerText = "BIRTH:";
        document.getElementById("042").innerText = "STATES:"

        //TEXTO 
        document.getElementById("111").innerText = `My name is Vito Minaya González, an amateur photographer passionate to capture extraordinary moments that happen in my daily life. While I love photography, my full-time work is in computer science and science. Beliving that undestanding the thecnical bases leads to doing thigs better, which motivates me to create experiences that are not only attractive, but that are meticulously built for performance and accessibility`
        document.getElementById("112").innerText = "CFGM in Microcomputer systems & Networks.";
    
        document.getElementById("121").innerText = "Empathy and Compassion";
        document.getElementById("122").innerText = "Resilience and Willpower";
        document.getElementById("123").innerText = "Responsibility";
        document.getElementById("124").innerText = "Flexibility and versatility";
        document.getElementById("125").innerText = "Critical thinking and Analytical skills";
        document.getElementById("126").innerText = "Time management";
        document.getElementById("127").innerText = "Initative and Autonomy";
        document.getElementById("128").innerText = "La Garrotxa Secondary Education Institution";
        document.getElementById("129").innerHTML = "Study Center Monlau"

        document.getElementById("131").innerText = "DATE: ";
        document.getElementById("132").innerText = "PLACE: ";
        document.getElementById("133").innerText = "GENDER: ";
        document.getElementById("134").innerText = "NATIONALITY: ";
        document.getElementById("135").innerText = "ACADEMIC STATE: ";
        document.getElementById("136").innerText = "OCCUPATION: ";

        document.getElementById("141").innerText = "APRIL 18TH OF 2008";
        document.getElementById("142").innerText = "BARCELONA";
        document.getElementById("143").innerText = "MAN";
        document.getElementById("144").innerText = "SPANISH";
        document.getElementById("145").innerText = "STUDENT";
        document.getElementById("146").innerText = "WORKING";
        
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
    }
}