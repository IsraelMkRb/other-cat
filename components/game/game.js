class Game extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["style"];
  }

  html(className, style = "") {
    return `
        <style>
            .game-style {
                display: grid;
            }
        </style>
        <div class='${className} game-style' style='${style}'>
            
        <div>  
        `;
  }

  render(reload = false) {
    this.innerHTML = this.html(
      reload ? "" : this.className,
      this.getAttribute("style")
    );
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "style" && oldValue !== newValue) {
      this.render(true);
    }
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("x-game", Game);
