const headerpos = document.querySelector("body");
const newheader = document.createElement("header")

newheader.classList = "hea"
newheader.innerHTML = `
<h4 class="hea-h4">Vito Minaya González</h4>
        
        <!-- MENU DE LA PAGINA WEB EN ORDENADOR -->
        <div class="hea-div" id="pc">
            <button onclick="window.open('./index.html', '_self')" class="hea-button"><h4 class="hea-h4" id="221">SOBRE MI</h4></button>
            <button onclick="window.open('./proyectos.html', '_self')" class="hea-button"><h4 class="hea-h4" id="222">PROYECTOS</h4></button>
            <button onclick="window.open('./contacto.html', '_self')" class="hea-button"><h4 class="hea-h4" id="223">CONTACTO</h4></button>
            <button onclick="window.open('./galeria.html', '_self')" class="hea-button"><h4 class="hea-h4" id="224">GALERIA</h4></button>
            <button onclick="window.open('./planes.html', '_self')" class="hea-button"><h4 class="hea-h4" id="225">PLANES</h4></button>
            <select id="idioma" name="IDIOMA" class="hea-select">
                <option value="castellano" id="es" class="hea-h4">CASTELLANO</option>
                <option value="english" id="en" class="hea-h4">ENGLISH</option>
                <option value="catala" id="ca" class="hea-h4">CATALÀ</option>
            </select>
        </div>

        <div class="mv">
            <button class="hea-button" style=" text-align: right; align-content: center;" id="burger-button" onclick="hamburgesa()"><h4 class="hea-h4">&#9776;</h4></button>    
        </div>
        
        
        <!-- MENU DE LA PAGINA WEB EN EL MOVIL -->
        <div class="hea-burger" id="burger">
            <button class="hea-burger-button" onclick="window.open('./index.html', '_self')" id="226"><h4>SOBRE MI</h4></button>
            <button class="hea-burger-button" onclick="window.open('./proyectos.html', '_self')" id="227"><h4>PROYECTOS</h4></button>
            <button class="hea-burger-button" onclick="window.open('./contacto.html', '_self')" id="228"><h4>CONTACTO</h4></button>
            <button class="hea-burger-button" onclick="window.open('./galeria.html', '_self')" id="229"><h4>GALERIA</h4></button>
            <button class="hea-burger-button" onclick="window.open('./planes.html', '_self')" id="2210"><h4>PLANES</h4></button>
            <select id="idioma" class="hea-burger-select" name="IDIOMA">
                <option value="castellano" id="es">CASTELLANO</option>
                <option value="english" id="en">ENGLISH</option>
                <option value="català" id="ca">CATALÀ</option>
            </select>
        </div>`

headerpos.insertAdjacentElement("afterbegin", newheader);
