class AlcatelAntenna extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {}

      .container {
        position: absolute;
        right: 0;
        transform: translate(-25px, -120px);
      }

      .antenna {
        width: 45px;
        height: 120px;
        border-radius: 15px 15px 0 0;
        background-color: #2F2C35;
        background-image: linear-gradient(91deg, #0000 15%, #fff9 28% 29%, #0000 45%, #0005 90%);
        box-shadow:
          inset 0 2px 0 1px #232127,
          inset 0 0px 0 1px #242327;
        clip-path: polygon(6% 0, 94% 0, 100% 100%, 0 100%);
      }

      .base {
        width: 45px;
        height: 40px;
        background-color: #2F2C35;
        background-image: linear-gradient(91deg, #0000 10%, #fff9 25% 26%, #0000 42%, #0005 90%);
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${AlcatelAntenna.styles}</style>
    <div class="container">
      <div class="antenna"></div>
      <div class="base"></div>
    </div>`;
  }
}

customElements.define("alcatel-antenna", AlcatelAntenna);
