class MenuTemplate extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render = () => {
    const shadow = this.attachShadow({ mode: "open" });

    const contenedorTemporal = document.createElement("div");
    contenedorTemporal.innerHTML = this.html();

    const template = contenedorTemporal.querySelector("#game-menu");

    shadow.appendChild(template.content.cloneNode(true));

    this._handleClick = this.handleClick.bind(this);
    shadow
      .querySelector("#nuevo-juego")
      .addEventListener("click", this.handleClick);
  };

  html = () => {
    return `
            <template id="game-menu">
            <style>
                .fondo-menu {
                    width: 100vw;
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                .contenedor-menu {
                    width: 18rem;
                    height: 18rem;
                    color: rgb(221, 59, 19);
                    text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
                    1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
                    border: solid 1px gray;
                    background-color: #1F2030;
                    border: solid 2px white;
                    border-radius: 1rem;
                }

                .titulo-menu {
                    width: 100%;
                    text-align: center;
                }

                .intro-menu {
                    animation: intro-menu 0.3s ease-in-out;
                }

                @keyframes intro-menu {
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

                .menu-palpitacion {
                    animation: palpitacion-infinitas 2s linear infinite;
                }

                @keyframes palpitacion-infinitas {
                    0%  {
                        transform: scale(1.0);
                    }

                    50% {
                        transform: scale(1.1);
                    }

                    100% {
                        transform: rotate(1);
                    }
                }

                .opcion-menu {
                    padding: 0.5rem;
                    border: solid 2px white;
                    border-radius: 15px;
                    color: white;
                    text-shadow: none;
                    font-weight: bold;
                    background: rgb(81, 53, 97);
                    width: 70%;
                    margin: auto;
                    margin-top: 5rem;
                    cursor: pointer;
                }

                .opcion-menu:hover {
                    box-shadow: 0px -4px 2px rgb(26, 26, 26), 0px 4px 2px rgb(26, 26, 26), 4px 0px 2px rgb(26, 26, 26), -4px 0px 2px rgb(26, 26, 26);
                }

                .opcion-menu:active {
                    background-color: rgb(27, 26, 49);
                    transform: scale(0.9);
                }

                .contenedor-imagen {
                    width: 80%;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    margin: auto;
                    margin-top: 2rem;
                }
            </style>
            
            <div class="fondo-menu">
                <div class="contenedor-menu intro-menu">
                    <div class="titulo-menu">
                        <h2 class="">¡Bienvenido!</h2>
                        
                        <div id="nuevo-juego" class="opcion-menu menu-palpitacion">
                            Nueva partida
                        </div>
                    </div>

                    <div class="contenedor-imagen">
                        <img-tache width='50' height='50'></img-tache>
                        <img-circulo width='60' height='60'></img-circulo>
                        <img-tache width='50' height='50'></img-tache>
                        <img-circulo width='60' height='60'></img-circulo>
                    </div>
                </div>
            </div>
        </template>
        `;
  };

  handleClick = () => {
    window.location.href = "/game";
  };

  disconnectedCallback = () => {
    this.shadowRoot
      .querySelector("#nuevo-juego")
      .removeEventListener("click", this.handleClick);
  };
}

customElements.define("game-menu", MenuTemplate);

export default MenuTemplate;
