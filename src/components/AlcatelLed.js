class AlcatelLed extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --color: #f81e1e;
        --color: #dad72d;
        --led-shape: 80% 120% 180% 40% / 45% 53% 180% 120%;
      }

      .container {
        background: #fff8;
        box-shadow: 1px 1px 0 3px #fff8 inset;
        width: 13px;
        height: 26px;
        border-radius: var(--led-shape);
        transform: rotate(12deg) translate(2px, 5px);
        position: absolute;
        overflow: hidden;
        -webkit-mask-image: radial-gradient(32px 64px at -14px center, #0000 50%, #000 54%);
      }

      .led {
        --size: 14px;

        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        position: absolute;
        background: var(--color);
        transform: translate(0, 2px);
        filter: blur(3px);
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${AlcatelLed.styles}</style>
    <div class="container">
      <div class="led"></div>
    </div>`;
  }
}

customElements.define("alcatel-led", AlcatelLed);
