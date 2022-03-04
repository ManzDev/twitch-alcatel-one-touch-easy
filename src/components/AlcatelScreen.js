import batteryIcon from "../assets/battery-icon.svg?raw";
import signalIcon from "../assets/signal-icon.svg?raw";
import smsIcon from "../assets/sms-icon.svg?raw";
import { TIME_TO_OFF } from "./AlcatelOneTouchEasy.js";

const noSignalSound = new Audio("sounds/no-signal.mp3");
const dialToneSound = new Audio("sounds/dial-tone.mp3");
const noisesSound = new Audio("sounds/noises.mp3");

const MELODIES = [
  "BALADE",
  "BEEP",
  "CLASSIC",
  "COOL",
  "FIESTA",
  "LIGHT",
  "POLKA",
  "RHYTHM",
  "RING",
  "ROCK",
  "SAXO",
  "SPEED",
  "SPRING",
  "TOP-SECRET"
];

const resetAudio = ([...audios]) => {
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
};

const SONGS = MELODIES.map(melody => {
  const audio = new Audio(`sounds/melodies/${melody.toLowerCase()}.mp3`);
  audio.loop = true;
  return audio;
});

class AlcatelScreen extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.currentMelody = 0;
  }

  static get styles() {
    return /* css */`
      .container {
        width: 150px;
        height: 65px;
        background-color: #aa9535;
        background-image: linear-gradient(#0004, #0000, #0004);
        border-radius: 4px;
        box-shadow:
          1px 1px 2px #0004 inset,
          -1px -1px 2px #0006 inset,
          3px 0 5px #fff4 inset,
          0px 6px 4px #0005 inset,
          0px 0px 5px #88752344;
        font-family: "Electronic Highway Sign";
        font-size: 1.2rem;
        padding: 4px 8px;
        color: #333;
        box-sizing: border-box;
        transition: background-color 0.2s, box-shadow 0.2s;
      }

      :host(.off) .container {
        background-color: #636853;
        background-image: none;
        box-shadow:
          1px 1px 2px #0004 inset,
          -1px -1px 2px #0006 inset;
      }

      .status {
        display: flex;
        justify-content: space-between;
        height: 20px;
      }

      .status svg {
        --scale: scale(0.75);

        height: 20px;
        max-width: 26px;
        transform: var(--scale);
      }

      #sms {
        max-height: 18px;
      }

      #signal {
        width: 64px;
        height: 22px;
        transform: translate(8px, -6px) rotate(-90deg) var(--scale);
      }

      .date {
        display: flex;
        justify-content: space-between;
      }

      .message {
        display: flex;
        justify-content: center;
      }
    `;
  }

  connectedCallback() {
    this.render();
    this.setDate();
    document.addEventListener("BUTTON_PRESS", () => this.turnOn());
    document.addEventListener("UP_BUTTON", () => this.previousMelody());
    document.addEventListener("DOWN_BUTTON", () => this.nextMelody());
    document.addEventListener("ACCEPT_BUTTON", () => this.playMelody());
    document.addEventListener("CANCEL_BUTTON", () => this.pauseMelody());
    document.addEventListener("CALL_BUTTON", () => this.makeCall());
  }

  pauseMelody() {
    const melody = SONGS[this.currentMelody];
    !melody.paused && melody.pause();
  }

  previousMelody() {
    this.pauseMelody();
    this.currentMelody = Math.max(this.currentMelody - 1, 0);
    this.setMessage(MELODIES[this.currentMelody]);
  }

  playMelody() {
    SONGS[this.currentMelody].currentTime = 0;
    SONGS[this.currentMelody].play();
  }

  nextMelody() {
    this.pauseMelody();
    this.currentMelody = Math.min(this.currentMelody + 1, MELODIES.length - 1);
    this.setMessage(MELODIES[this.currentMelody]);
  }

  makeCall() {
    resetAudio([noSignalSound, dialToneSound, noisesSound]);

    const callType = ~~(Math.random() * 2);
    (callType === 0) && noSignalSound.play();
    (callType === 1) && dialToneSound.play();

    const hasNoise = ~~(Math.random() * 6);
    (hasNoise === 0) && noisesSound.play();
  }

  turnOn() {
    this.classList.remove("off");
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.turnOff(), TIME_TO_OFF);
  }

  turnOff() {
    this.classList.add("off");
    this.setMessage("MANZ.DEV");
  }

  setDate() {
    const date = new Date().toISOString().substring(5, 10).replace("-", "/");
    const time = new Date().toISOString().substring(11, 16);
    this.shadowRoot.querySelector(".date").innerHTML = `<span>${date}</span><span>${time}</span>`;
  }

  setMessage(message) {
    this.shadowRoot.querySelector(".message").textContent = message;
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${AlcatelScreen.styles}</style>
    <div class="container">
      <div class="status">${batteryIcon} ${smsIcon} ${signalIcon}</div>
      <div class="date"></div>
      <div class="message">MANZ.DEV</div>
    </div>`;
  }
}

customElements.define("alcatel-screen", AlcatelScreen);
