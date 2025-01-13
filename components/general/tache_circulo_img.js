class ImgTache extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const classComponent = this.className;
    const widthComponent = this.getAttribute('width') || '15';
    const heightComponent = this.getAttribute('height') || '15';

    this.removeAttribute('width');
    this.removeAttribute('height');

    this.innerHTML = `
          <style>
            .contenedor-img-tache {
              display: flex;
              justify-content: center;
              align-items: center;
            }
          </style>
          <div class="contenedor-img-tache">
            <image class="${classComponent}" src="/assets/imgs/tache.png" width="${widthComponent}" height="${heightComponent}" />
          </div>
        `;
  }
}

customElements.define("img-tache", ImgTache);


class ImgCirculo extends HTMLElement {
    
    constructor() {
        super();
    }

    connectedCallback() {
        const classComponent = this.className;
        const widthComponent = this.getAttribute('width') || '15';
        const heightComponent = this.getAttribute('height') || '15';

        this.innerHTML = `
          <style>
            .contenedor-img-circulo {
              display: flex;
              justify-content: center;
              align-items: center;
            }
          </style>
          <div class="contenedor-img-circulo">
            <image class="${classComponent}" src="/assets/imgs/circulo.png" width="${widthComponent}" height="${heightComponent}" />
          </div>
        `;
    }
}

customElements.define('img-circulo',ImgCirculo);