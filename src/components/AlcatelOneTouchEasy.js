import "./AlcatelSpeaker.js";
import "./AlcatelLed.js";
import "./AlcatelCrystal.js";
import "./AlcatelCentralButtons.js";
import "./AlcatelNumpadButtons.js";
import "./AlcatelAntenna.js";

export const TIME_TO_OFF = 5000;
const buttonSound = new Audio("sounds/button.mp3");

class AlcatelOneTouchEasy extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --alcatel-color-alpha: #05a8c5aa;
        --alcatel-color: #018da6;
        --alcatel-width: 250px;
        --alcatel-speaker-shape: 60% 60% 70% 70% / 20% 20% 120% 120%;
        --alcatel-bottom-radius: 12% 12% 35% 30% / 87% 87% 15% 15%;
        --alcatel-bottom-radius: 12% 12% 40% 40% / 87% 87% 20% 20%;

        position: relative;
      }

      .head {
        width: var(--alcatel-width);
        height: 240px;
        background: var(--alcatel-color);
        border-radius: 50% 50% 5% 5% / 35% 35% 65% 65%;

        display: flex;
        flex-direction: column;

        position: relative;
        overflow: hidden;
      }

      .texture {
        box-shadow:
          4px 4px 3px 0 var(--alcatel-color) inset,
          10px 4px 4px 0 #fffa inset,
          -4px 4px 3px 0 var(--alcatel-color) inset,
          -6px 4px 4px 0 #fffa inset;
        background-image: url(texture.png);
      }

      .head .superior {
        display: flex;
        justify-content: center;
      }

      .head .background,
      .body .background {
        --shadow-inner: #002c0066;

        display: block;
        position: absolute;
        inset: 0;
        z-index: 0;
        display: flex;
        pointer-events: none;
      }

      .background .circle {
        width: 100px;
        height: 100px;
        border: 10px double var(--shadow-inner);
        border-radius: 50%;
        transform: translate(50px, 20px);
        filter: blur(2px);
      }

      .background .rectangle {
        width: 60px;
        height: 185px;
        border-radius: 0 50px 30px 0;
        background: var(--shadow-inner);
        transform: translate(50px, 30px);
        filter: blur(2px);
      }

      .background .grid-container {
        --shadow-inner: #002c0088;
        position: absolute;
        top: -15px;
        left: 38%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-template-areas: "box-1 . box-2" ". box-3 .";
        width: 60px;
        height: 25px;
      }

      .background .box {
        width: 20px;
        background: var(--shadow-inner);
        filter: blur(3px);
      }

      .background .box-right {
        width: 120px;
        height: 260px;
        border: 25px solid var(--shadow-inner);
        transform: rotate(-2deg);
        border-left: 0;
        border-top: 0;
        position: absolute;
        filter: blur(5px);
        top: 40px;
        right: 5px;
      }

      .grid-container .box-1 { grid-area: box-1 }
      .grid-container .box-2 { grid-area: box-2 }
      .grid-container .box-3 { grid-area: box-3 }

      .grid-container .line-box {
        width: 150px;
        height: 3px;
        background: var(--shadow-inner);
        position: absolute;
        transform: translate(-40px, 13px);
        filter: blur(3px);
      }

      .led-container {
        width: 80px;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-template-areas:
          "led-1 ."
          ". led-2"
          "led-3 led-4"
          "led-5 led-6";
        gap: 65px 60px;
        transform: translate(0, -50px);
      }

      .led-1 { grid-area: led-1 }
      .led-2 { grid-area: led-2 }
      .led-3 { grid-area: led-3 }
      .led-4 { grid-area: led-4 }
      .led-5 { grid-area: led-5 }
      .led-6 { grid-area: led-6 }

      .led-container.off .led {
        background: #4d482d88;
        box-shadow: 0 0 0 0 #d3d71200;
        filter: blur(3px);
      }

      .led {
        background: #d7ca12;
        box-shadow: 0 0 2px 10px #d7b31244;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        filter: blur(2px);
        transition: box-shadow 0.3s;
      }

      .led-1 {
        transform: translate(-2px, 40px);
        width: 15px;
        height: 15px;
        filter: blur(3px);
      }

      .led-2 {
        transform: translate(0, 40px);
        filter: blur(2px);
      }

      .body {
        width: var(--alcatel-width);
        height: 325px;
        background-color: var(--alcatel-color);
        border-radius: var(--alcatel-bottom-radius);
        position: relative;
        box-shadow: none;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .logo-text {
        color: #fff;
        text-align: center;
        transform: translateY(20px);
        line-height: 70%;
      }

      .logo-text .model {
        font-family: Montserrat, sans-serif;
        color: #fffc;
        font-size: 0.55rem;
        text-shadow: 1px 1px 2px #0005;
        letter-spacing: 2px;
        text-transform: uppercase;
      }

      .logo-text .easy {
        font-family: "present roman", sans-serif;
        font-size: 2rem;
        line-height: 25%;
        text-shadow: 1px 1px 2px #0005;
        color: #fffa;
        letter-spacing: -2px;
      }

      .logo-text .css {
        background: #fffa;
        display: inline-block;
        height: 15px;
        border-radius: 50%;
        font-family: "Montserrat", sans-serif;
        font-variation-settings: "wght" 700;
        transform: rotate(-20deg);
      }

      .logo-text .css span {
        display: inline-block;
        transform: rotate(20deg);
        font-size: 0.8rem;
        letter-spacing: -1px;
        padding: 0 2px;
        color: var(--alcatel-color);
      }

      .bottom {
        --border-color: #4f7177;

        width: calc(var(--alcatel-width) + 20px);
        height: 375px;
        overflow: hidden;
        border-radius: var(--alcatel-bottom-radius);
        position: absolute;
        bottom: 0;
        clip-path: polygon(0 4.8%, 100% 4.8%, 100% 100%, 0 100%);
        box-shadow:
          inset 9px -10px 6px var(--border-color),
          inset 16px 2px 6px #fff6,
          inset 25px -30px 0 var(--border-color),
          inset -12px -15px 6px var(--border-color),
          inset -12px -9px 7px #fff6,
          inset -25px -30px 0 var(--border-color),
          inset -25px -30px 0 var(--border-color) ,
          inset 26px -31px 1px #000,
          inset -26px -31px 1px #000;
        transform: translate(-10px, 28px);
        pointer-events: none;
      }

      .bottom::after,
      .bottom::before{
        content: "";
        width: 30px;
        height: 35px;
        position: absolute;
        left: 5px;
        top: 20px;
        border-radius: 50% 50% 0 0;
        box-shadow:
          1px -1px 1px #000,
          6px -5px 0 4px var(--alcatel-color);
      }
      .bottom::before{
        left: 235px;
        box-shadow:
          -1px -1px 1px #000,
          -1px 0 #000,
          -10px -4px 0 2px var(--alcatel-color);
      }

      .buttons-container {
        width: 20px;
        height: 80px;
        position: absolute;
        top: 46%;
        left: -7px;
        transform: rotate(5deg);

        display: flex;
        gap: 20px;
        flex-direction: column;
      }

      .buttons-container .button {
        width: 7px;
        height: 22px;
        border-radius: 25px 50% 50% 25px / 40px 100% 100% 40px;
        background: #67858a;
        box-shadow: 2px 0 0 2px #3d5857;
        cursor: pointer;
      }

      .buttons-container .button:active {
        background: #445e62;
        transform-origin: right center;
        transform: scaleX(0.85);
      }

      .dot {
        background: #000;
        border-radius: 50%;
        width: 4px;
        height: 4px;
        position: absolute;
        bottom: 52px;
        left: 36px;
      }
    `;
  }

  connectedCallback() {
    this.render();
    const buttons = Array.from(this.shadowRoot.querySelectorAll(".buttons-container .button"));
    buttons.forEach((button) => button.addEventListener("click", () => this.onPress(button)));
    this.addEventListener("BUTTON_PRESS", (ev) => this.turnOnLeds());
  }

  turnOnLeds() {
    const ledContainer = this.shadowRoot.querySelector(".led-container");
    ledContainer.classList.remove("off");
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.turnOffLeds(), TIME_TO_OFF);
  }

  turnOffLeds() {
    const ledContainer = this.shadowRoot.querySelector(".led-container");
    ledContainer.classList.add("off");
  }

  onPress(button) {
    buttonSound.currentTime = 0;
    buttonSound.play();

    button.classList.contains("up") && this.dispatchEvent(new CustomEvent("UP_BUTTON", { bubbles: true, composed: true }));
    button.classList.contains("down") && this.dispatchEvent(new CustomEvent("DOWN_BUTTON", { bubbles: true, composed: true }));
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${AlcatelOneTouchEasy.styles}</style>
    <div class="container">
      <alcatel-antenna></alcatel-antenna>
      <div class="head texture">
        <div class="background">
          <div class="circle"></div>
          <div class="rectangle"></div>
        </div>
        <div class="superior">
          <alcatel-speaker></alcatel-speaker>
          <alcatel-led></alcatel-led>
        </div>
        <alcatel-crystal></alcatel-crystal>
      </div>
      <div class="body texture">
        <div class="background">
          <div class="grid-container">
            <div class="box box-1"></div>
            <div class="box box-2"></div>
            <div class="line-box"></div>
            <div class="box box-3"></div>
          </div>
          <div class="box-right"></div>
          <div class="led-container off">
            <div class="led led-1"></div>
            <div class="led led-2"></div>
            <div class="led led-3"></div>
            <div class="led led-4"></div>
            <div class="led led-5"></div>
            <div class="led led-6"></div>
          </div>
        </div>
        <alcatel-central-buttons></alcatel-central-buttons>
        <alcatel-numpad-buttons></alcatel-numpad-buttons>
        <div class="logo-text">
          <div class="model">one touch</div>
          <div>
            <span class="easy">easy</span>
            <span class="css"><span>CSS</span></span>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="dot"></div>
      </div>
      <div class="buttons-container">
        <div class="button up"></div>
        <div class="button down"></div>
      </div>
    </div>`;
  }
}

customElements.define("alcatel-one-touch-easy", AlcatelOneTouchEasy);
