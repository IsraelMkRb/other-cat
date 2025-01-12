import './router.js';
import './components/menu/menu_template.js';
import './components/game/game_startup.js';
import './components/general/tache_circulo_img.js';

import { rutas } from './router.js';

const rootElement = document.getElementById('root');

const rutaActualURL = window.location.pathname.toString();
const rutaConfigurada = rutas.find(configuracionRuta => configuracionRuta.ruta == rutaActualURL);
if(!rutaConfigurada) {
    rootElement.innerHTML = `<h1>404 not found</h1>`;    
}
else{
    rootElement.innerHTML = `<${rutaConfigurada.nombreEtiqueta} />`;
}
