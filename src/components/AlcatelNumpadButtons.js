const buttonSound = new Audio("sounds/button.mp3");

class AlcatelNumpadButtons extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {}

      .container {
        width: 175px;
        height: 150px;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(4, 1fr);
        gap: 13px 20px;
        margin-top: 10px;
      }

      .button {
        --x: 0px;
        --y: 0px;

        border: 1px solid #fff;
        border-bottom-width: 3px;
        box-shadow:
          0 1px 0 1px #fffa,
          0 0 8px #0005 inset,
          4px 0 6px #fff8 inset;
        border-radius: 50%;
        color: #fff;
        font-family: "Montserrat", sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--alcatel-color);
        user-select: none;
        cursor: pointer;
        transform: translate(var(--x), var(--y));
      }

      .button data {
        font-weight: 700;
      }

      .button .multi {
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 60%;
      }

      .button span:not(.big) {
        display: block;
        font-weight: lighter;
        font-size: 0.7rem;
        padding-left: 2px;
      }

      .button .big {
        font-size: 1.3rem;
      }

      .button.one {
        justify-content: flex-start;
        padding-left: 10px;
      }

      .button.zero {
        justify-content: space-between;
        padding-left: 10px;
      }

      .button.zero span {
        padding-right: 10px;
      }

      .button .asterisk {
        font-size: 3.5rem;
        position: absolute;
        transform: translateY(10px);
        font-family: "Present Roman", sans-serif;
      }

      .button:nth-child(3n -1) {
        --y: 6px;
      }

      .button:active {
        --x: 1px;

        transform: translate(var(--x), calc(var(--y) + 2px));
        box-shadow:
          0 0 0 1px #fffa,
          0 0 8px #0005 inset,
          4px 0 6px #fff8 inset;
      }
    `;
  }

  connectedCallback() {
    this.render();
    const buttons = Array.from(this.shadowRoot.querySelectorAll(".button"));
    buttons.forEach((button) => button.addEventListener("click", () => this.onPress(button)));
  }

  onPress(button) {
    buttonSound.currentTime = 0;
    buttonSound.play();
    const event = new CustomEvent("BUTTON_PRESS", { detail: button, bubbles: true, composed: true });
    this.dispatchEvent(event);
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${AlcatelNumpadButtons.styles}</style>
    <div class="container">
      <div class="button one"><data>1</data></div>
      <div class="button"><data>2</data><span>abc</span></div>
      <div class="button"><data>3</data><span>def</span></div>
      <div class="button"><data>4</data><span>ghi</span></div>
      <div class="button"><data>5</data><span>jkl</span></div>
      <div class="button"><data>6</data><span>mno</span></div>
      <div class="button"><data>7</data><div class="multi"><span>pq</span><span>rs</span></div></div>
      <div class="button"><data>8</data><span>tuv</span></div>
      <div class="button"><data>9</data><div class="multi"><span>wx</span><span>yz</span></div></div>
      <div class="button"><span class="big asterisk">*</span></div>
      <div class="button zero"><data>0</data><span>+</span></div>
      <div class="button"><span class="big"><data>#</data></span></div>
    </div>`;
  }
}

customElements.define("alcatel-numpad-buttons", AlcatelNumpadButtons);
