class ImgTache extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const classComponent = this.className;
    const widthComponent = this.getAttribute('width') || '15';
    const heightComponent = this.getAttribute('height') || '15';

    this.innerHTML = `
            <image class="${classComponent}" src="/assets/imgs/tache.png" width="${widthComponent}" height="${heightComponent}" />
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
            <image class="${classComponent}" src="/assets/imgs/circulo.png" width="${widthComponent}" height="${heightComponent}" />
        `;
    }
}

customElements.define('img-circulo',ImgCirculo);