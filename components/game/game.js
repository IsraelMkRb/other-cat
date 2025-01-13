class Game extends HTMLElement {
  constructor() {
    super();
    this.casillasVacias = 9;
  }

  static get observedAttributes() {
    return ["style"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "style" && oldValue !== newValue) {
      this.render(true);
    }
  }

  connectedCallback() {
    this.render();
  }

  html(className = "", style = "") {
    return `
        <style>
            .juego {
                width: 90%;
                height: 90%;
                text-shadow: none;
                color: white;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: repeat(3, 1fr);  
                gap: 0.5rem;                   
                margin: auto;
                margin-top: 4%;
                background: #1F2030;
            }

            div[class*='casilla'] {
              border: solid 1px white;
              background:rgb(43, 45, 71);
              box-shadow: 0px 0px 5px gray;
              border-radius: 0.5rem;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .oculto {
              display: none;
            }
        </style>
        <div class='${className} juego' style='${style}'>
        <div class="casilla-1"></div>
        <div class="casilla-2"></div>
        <div class="casilla-3"></div>
        <div class="casilla-4"></div>
        <div class="casilla-5"></div>
        <div class="casilla-6"></div>
        <div class="casilla-7"></div>
        <div class="casilla-8"></div>
        <div class="casilla-9"></div>
        <div>  
        `;
  }

  render(reload = false) {
    this.innerHTML = this.html(
      reload ? "" : this.className,
      this.getAttribute("style")
    );

    const casillas = this.querySelectorAll('div[class*="casilla"]');
    casillas.forEach((elemento) => {
      elemento.addEventListener("click", (e) => {
        const jugadorActual = this.parentNode.parentNode.querySelector(
          ".contenedor-btn-regresar h2"
        );
        const estiloBefore = getComputedStyle(jugadorActual, "::before");
        const textoJugador = estiloBefore.content.toString();

        if (textoJugador.toLowerCase() == '"game over"') {
          alert("Juego terminado. Ya no quedan mas acciones");
          return;
        }

        if (textoJugador.toLowerCase() == '"player 1"') {
          e.target.innerHTML =
            '<img-tache width="40%" height="40%"></img-tache>';
        } else {
          e.target.innerHTML =
            '<img-circulo width="40%" height="40%"></img-circulo>';
        }

        this.casillasVacias--;

        if (this.casillasVacias > 0) {
          jugadorActual.classList.toggle("segundo-jugador");
        } else {
          jugadorActual.classList.toggle("juego-terminado");       
          jugadorActual.nextSibling.nextSibling.classList.toggle("oculto"); // Icono de restart
          jugadorActual.nextSibling.nextSibling.addEventListener('click',() => {
            window.location.reload();
          });
        }
      });
    });
  }
}

customElements.define("x-game", Game);
