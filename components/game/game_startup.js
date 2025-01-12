class GameStartup extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render = () => {
    const shadow = this.attachShadow({ mode: "open" });

    const contenedorTemporal = document.createElement("div");
    contenedorTemporal.innerHTML = this.html();

    const template = contenedorTemporal.querySelector("#game-startup");
    shadow.appendChild(template.content.cloneNode(true));

    this.handleClickRegresar = this.handleClickRegresar.bind(this);
    shadow
      .querySelector("#btn-regresar")
      .addEventListener("click", this.handleClickRegresar);
  };

  html = () => {
    return `
        <template id='game-startup'>
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

            .intro-juego {
                animation: intro-juego 0.4s ease-in-out;
            }

            @keyframes intro-juego {
                0% {
                    transform: scale(0.1);
                }

                90% {
                    transform: scale(1.2);
                }

                100% {
                    transform: scale(1);
                }
            }

            .contenedor-btn-regresar {
                width: 80%;
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
        </style>
            <div class='fondo-game'>
                <div class="contenedor-btn-regresar">
                    <svg id="btn-regresar" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
                    </svg>
                </div>
                <div class="contenedor-game intro-juego">
                    <img src="https://media.tenor.com/3E4p3EslD1kAAAAi/terraria-sticker.gif" width="100" height="100" />
                </div>
            </div>
        </template>
    `;
  };

  handleClickRegresar = () => {
    window.location.href = "/";
  };
}

customElements.define("game-startup", GameStartup);

export default GameStartup;
