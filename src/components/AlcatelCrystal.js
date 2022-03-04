import "./AlcatelScreen.js";

class AlcatelCrystal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        display: flex;
        justify-content: center;
      }

      .container {
        background: #018da6;
        width: 80%;
        height: 150px;
        box-shadow:
          2px 0 0 0 #fffc inset,
          4px 0 0 0 #0005 inset,
          8px 0 6px 0 #0003 inset,
          -2px 0 0 0 #fffc inset,
          -4px 0 0 0 #0005 inset,
          -8px 0 6px 0 #0003 inset;

        padding-bottom: 10px;
        border-radius: 35% 35% 50% 50% / 30% 30% 24% 24%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        align-items: center;

        transform: translateY(-17px);
        -webkit-mask-image: radial-gradient(ellipse 900px 700px at 50% -10%, transparent 5%, #000 5%);
      }

      .logo {
        --color: #fffa;

        border: 2px solid var(--color);
        color: var(--color);
        font-family: "Josefin Sans", sans-serif;
        font-variation-settings: "wght" 700;
        padding: 2px 3px 1px 3px;
        letter-spacing: 3px;
        transform: scale(0.85);
      }

      .logo .a-letter {
        display: inline-block;
        width: 15px;
        height: 15px;
        background: var(--color);
        clip-path: polygon(50% 0, 100% 100%, 0 100%);
        transform: translateY(1px);
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${AlcatelCrystal.styles}</style>
    <div class="container">
      <div class="logo">
        ALC<span class="a-letter"></span>TEL
      </div>
      <alcatel-screen class="off"></alcatel-screen>
    </div>`;
  }
}

customElements.define("alcatel-crystal", AlcatelCrystal);
