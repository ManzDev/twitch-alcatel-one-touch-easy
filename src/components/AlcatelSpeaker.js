class AlcatelSpeaker extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --alcatel-color-alpha: #05a8c577;
        --spiral-shape: polygon(1% 47%, 10% 47%, 12% 57%, 14% 65%, 18% 71%, 23% 78%, 30% 84%, 37% 88%, 46% 91%, 54% 91%, 63% 90%, 73% 87%, 81% 81%, 86% 75%, 90% 66%, 91% 58%, 89% 49%, 84% 39%, 78% 32%, 66% 29%, 56% 30%, 48% 35%, 43% 42%, 42% 51%, 44% 58%, 50% 64%, 57% 66%, 66% 64%, 69% 58%, 75% 54%, 78% 57%, 76% 64%, 69% 71%, 61% 74%, 53% 74%, 44% 70%, 38% 64%, 34% 55%, 33% 46%, 36% 38%, 36% 38%, 40% 31%, 48% 25%, 54% 22%, 63% 21%, 71% 21%, 80% 23%, 86% 28%, 92% 35%, 96% 42%, 99% 51%, 99% 60%, 97% 68%, 95% 76%, 89% 84%, 82% 90%, 74% 95%, 66% 99%, 56% 100%, 46% 100%, 37% 97%, 27% 93%, 19% 87%, 12% 79%, 7% 70%, 2% 59%);

        width: 45%;
        height: 80px;
        background: var(--alcatel-color-alpha);
        border-radius: var(--alcatel-speaker-shape);
        transform: translateY(-8px);
        box-shadow:
          10px 0 10px 0 #fffb inset,
          -10px 0 10px 0 #0004 inset,
          0 0 10px #0008;

        display: flex;
        justify-content: center;
        align-items: center;
      }

      :host::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: var(--alcatel-speaker-shape);
        clip-path: polygon(0 80%, 100% 80%, 100% 100%, 0 100%);
        box-shadow: 0 30px 0 -10px #0002;
        transform: translateY(9px);
        filter: drop-shadow(0 -1px 0 #0004);
      }

      .spiral-container {
        filter: drop-shadow(1px -1px 0 #fffa);
      }

      .spiral {
        width: 20px;
        height: 20px;
        background: #0006;
        clip-path: var(--spiral-shape);
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${AlcatelSpeaker.styles}</style>
    <div class="container">
      <div class="spiral-container">
        <div class="spiral"></div>
      </div>
    </div>`;
  }
}

customElements.define("alcatel-speaker", AlcatelSpeaker);
