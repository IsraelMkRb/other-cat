class GameStartup extends HTMLElement {
  constructor() {
    super();
    this.estaCargando = true;
  }

  handleClickRegresar() {
    window.location.href = "/";
  }

  connectedCallback() {
    this.render();
  }

  style() {
    return `
      <style>
            * {
                padding: 0;
                margin: 0;
            }

            .fondo-game {
                width: 100vw;
                height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            .contenedor-game {
                width: 80%;
                height: 80%;
                color: rgb(221, 59, 19);
                text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
                1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
                border: solid 1px gray;
                background-color: #1F2030;
                border: solid 2px white;
                border-radius: 1rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            .contenedor-btn-regresar {
                width: 80%;
                text-align: center;
            }
                .contenedor-btn-regresar h2 {
                  color: rgb(238, 6, 6);
                  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
                  1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
                }

                .contenedor-btn-regresar h2:before {
                  content: 'player 1';
                }

                .contenedor-btn-regresar h2.segundo-jugador {
                  color: rgb(7, 23, 255);
                  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
                  1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
                }

                .contenedor-btn-regresar h2.segundo-jugador:before {
                  content: 'player 2';
                }

                .contenedor-btn-regresar h2.juego-terminado {
                  color: rgb(52, 104, 74);
                  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
                  1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
                }

                .contenedor-btn-regresar h2.juego-terminado:before {
                  content: 'GAME OVER';
                }
                
                .contenedor-btn-regresar > svg {
                    float: left;
                    padding: 0.4rem;
                    border-radius: 50%;
                    border: solid 1px gray;
                    margin-bottom: 1rem;
                    background-color: rgb(81, 53, 97);
                    color: white;
                }
            
                .contenedor-btn-regresar > svg:active {
                    background-color: rgb(27, 26, 49);
                    transform: scale(0.9);
                }
        
        x-game {
            width: 100%;
            height: 100%;   
        }

        .pixelify-sans-600 {
          font-family: "Pixelify Sans", serif;
          font-optical-sizing: auto;
          font-weight: 600;
          font-style: normal;
        }

        .contenedor-titulo {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .contenedor-titulo img.oculto{
          display: none;
        }
        </style>
    `;
  }

  html() {
    return `
        <template id='game-startup'>
            ${this.style()}
            <div class='fondo-game'>
                <div class="contenedor-btn-regresar">
                    <svg id="btn-regresar" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
                    </svg>

                    <div class="contenedor-titulo">
                      <h2 class="pixelify-sans-600"></h2>
                      <img src="/assets/imgs/new_game.png" class="oculto" width="40" height="40"/>
                    </div>
                </div>
                <div class="contenedor-game">
                    ${
                      this.estaCargando
                        ? '<img id="icono-cargando" src="/assets/imgs/fantasmita.gif" width="150" height="150" />'
                        : "<x-game></x-game>"
                    }
                </div>
            </div>
        </template>
    `;
  }

  render() {
    const shadow = !this.shadowRoot
      ? this.attachShadow({ mode: "open" })
      : this.shadowRoot;

    const contenedorTemporal = document.createElement("div");
    contenedorTemporal.innerHTML = this.html();

    const template = contenedorTemporal.querySelector("#game-startup");
    if (this.shadowRoot) shadow.innerHTML = "";
    shadow.appendChild(template.content.cloneNode(true));

    this.handleClickRegresar = this.handleClickRegresar.bind(this);
    shadow
      .querySelector("#btn-regresar")
      .addEventListener("click", this.handleClickRegresar);

    setTimeout(() => {
      if (this.estaCargando) {
        this.estaCargando = false;
        this.render();
      }
    }, 1500);
  }
}

customElements.define("game-startup", GameStartup);

export default GameStartup;
