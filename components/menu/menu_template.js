
class MenuTemplate extends HTMLElement {
    
    constructor() {
        super();
        
        const shadow = this.attachShadow({ mode: 'open' });
        fetch('/components/menu/menu_template.html')
            .then(response => response.text())
            .then(html => {
                const contenedorTemporal = document.createElement('div');
                contenedorTemporal.innerHTML = html;
                
                const template = contenedorTemporal.querySelector('#game-menu');

                shadow.appendChild(template.content.cloneNode(true));
            })
    }

}

customElements.define('game-menu', MenuTemplate);

export default MenuTemplate;