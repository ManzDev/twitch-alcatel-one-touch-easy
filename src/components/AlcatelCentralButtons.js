const buttonSound = new Audio("sounds/button.mp3");

class AlcatelCentralButtons extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {

      }

      .container {
        width: 160px;
        height: 100px;
        background: #fff1;
        border-radius: 50%;
        box-shadow: 2px 0 4px 0 #fffc inset;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-template-areas: ". accept ." "book cancel call";
      }

      .button {
        width: 40px;
        height: 28px;
        border: 2px solid #fff;
        border-top-width: 3px;
        border-bottom-width: 1px;
        border-radius: 50% 50% 50% 50% / 18% 18% 82% 82%;

        box-shadow: 1px -1px 0 1px #0004;
        display: flex;
        justify-content: center;
        transform: scale(var(--scale, 1)) translate(var(--x), var(--y)) rotate(var(--rotate, 0));
        cursor: pointer;
        user-select: none;
      }

      .button:active {
        transform:
          scale(var(--scale, 1))
          translate(calc(var(--x) + 2px), calc(var(--y) + 2px))
          rotate(var(--rotate, 0));
        box-shadow: none;
      }

      .accept {
        --x: 6px;
        --y: 15px;

        grid-area: accept;
        border-bottom-width: 3px;
        border-top-width: 1px;
        box-shadow: 1px 1px 0 1px #0004;
      }

      .book {
        --x: 10px;
        --y: -6px;
        --rotate: -135deg;

        grid-area: book;
        box-shadow: -1px -1px 0 1px #0004;
      }

      .cancel {
        --x: 6px;
        --y: 15px;
        --scale: 0.8;
        --rotate: 180deg;

        grid-area: cancel;
      }

      .call {
        --x: 0px;
        --y: -6px;
        --rotate: 135deg;

        grid-area: call;
      }

      .button.yellow {
        background: #dfd431;
        font-family: "Josefin Sans", sans-serif;
        color: #fff;
      }

      .button.blue {
        background: #094872;
      }

      /* Icon Buttons */

      .button svg {
        pointer-events: none;
      }

      .call svg {
        transform: rotate(-45deg) translate(3px, -3px) scale(1.15);
      }

      .cancel span {
        font-size: 1.25rem;
        font-weight: bold;
        transform: rotate(180deg) translateY(8px);
      }

      .book svg {
        transform: rotate(180deg) translateY(2px) scale(1.15);
      }

      .button svg {
        width: 50%;
        fill: #fff;
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

    button.classList.contains("accept") && this.dispatchEvent(new CustomEvent("ACCEPT_BUTTON", { bubbles: true, composed: true }));
    button.classList.contains("cancel") && this.dispatchEvent(new CustomEvent("CANCEL_BUTTON", { bubbles: true, composed: true }));
    button.classList.contains("call") && this.dispatchEvent(new CustomEvent("CALL_BUTTON", { bubbles: true, composed: true }));
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${AlcatelCentralButtons.styles}</style>
    <div class="container">
      <div class="yellow button accept">
      <svg viewBox="0 0 224 224" xmlns="http://www.w3.org/2000/svg">
        <path d="M111.98 0C50.24 0 0 50.23 0 111.98c0 61.75 50.24 111.98 111.98 111.98s111.98-50.23 111.98-111.98C223.96 50.23 173.73 0 111.98 0zm0 208.97c-53.47 0-96.98-43.51-96.98-96.99C15 58.51 58.5 15 111.98 15s96.98 43.5 96.98 96.98c0 53.48-43.5 96.99-96.98 96.99z"/><path d="M111.98 41.8c-38.7 0-70.19 31.48-70.19 70.18s31.49 70.2 70.2 70.2c38.7 0 70.18-31.5 70.18-70.2S150.7 41.8 111.98 41.8zm0 125.37c-30.43 0-55.19-24.75-55.19-55.19S81.55 56.8 112 56.8c30.43 0 55.18 24.76 55.18 55.2s-24.75 55.18-55.19 55.18z"/><path d="M111.98 79.1a32.93 32.93 0 0 0-32.89 32.88 32.93 32.93 0 0 0 32.9 32.9 32.93 32.93 0 0 0 32.88-32.9 32.92 32.92 0 0 0-32.89-32.88z"/>
      </svg>
      </div>
      <div class="yellow button book">
        <svg version="1.1" viewBox="0 0 380 380" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#fff" stroke-width="12" d="m377.07 101.57c-25.928-25.929-60.403-40.209-97.071-40.209-33.428 0-65.031 11.867-90 33.608-24.969-21.741-56.572-33.608-90-33.608-36.668 0-71.143 14.28-97.071 40.208-1.875 1.876-2.929 4.419-2.929 7.071v200c0 4.044 2.437 7.691 6.173 9.239 3.737 1.549 8.038 0.692 10.898-2.167 22.152-22.152 51.603-34.351 82.929-34.351s60.777 12.199 82.929 34.351c0.032 0.032 0.068 0.059 0.1 0.091 0.203 0.198 0.411 0.39 0.63 0.57 0.125 0.103 0.257 0.193 0.386 0.289 0.133 0.099 0.262 0.202 0.4 0.294 0.149 0.099 0.303 0.186 0.455 0.277 0.128 0.076 0.252 0.156 0.384 0.227 0.154 0.083 0.313 0.153 0.47 0.226 0.139 0.065 0.275 0.134 0.417 0.193 0.153 0.063 0.31 0.115 0.466 0.17 0.152 0.054 0.302 0.113 0.458 0.16 0.158 0.048 0.318 0.083 0.477 0.123 0.157 0.039 0.312 0.083 0.472 0.115 0.186 0.037 0.374 0.059 0.561 0.086 0.136 0.019 0.269 0.045 0.406 0.059 0.658 0.065 1.32 0.065 1.978 0 0.137-0.013 0.271-0.04 0.406-0.059 0.188-0.026 0.375-0.049 0.561-0.086 0.16-0.032 0.315-0.076 0.472-0.115 0.159-0.04 0.319-0.075 0.477-0.123 0.156-0.047 0.306-0.106 0.458-0.16 0.156-0.056 0.312-0.107 0.466-0.17 0.142-0.059 0.278-0.128 0.417-0.193 0.157-0.074 0.316-0.144 0.47-0.226 0.131-0.07 0.256-0.151 0.384-0.227 0.153-0.091 0.307-0.177 0.455-0.277 0.138-0.092 0.267-0.195 0.4-0.294 0.129-0.096 0.261-0.186 0.386-0.289 0.219-0.18 0.427-0.372 0.63-0.57 0.033-0.032 0.068-0.058 0.1-0.091 22.151-22.151 51.603-34.351 82.929-34.351s60.777 12.199 82.929 34.351c1.913 1.913 4.471 2.929 7.073 2.929 1.288 0 2.588-0.25 3.825-0.762 3.736-1.548 6.173-5.194 6.173-9.239v-200c0-2.652-1.054-5.195-2.929-7.07zm-97.071-20.209c29.965 0 58.214 11.162 80 31.519v174.16c-23.166-16.681-50.892-25.68-80-25.68-29.11 0-56.834 9.002-90 25.685-33.166-16.682-60.89-25.685-90-25.685-29.108 0-56.834 8.999-80 25.68v-174.16c21.786-20.357 50.035-31.519 80-31.519 29.967 0 58.213 11.171 90 31.531 31.787-20.36 60.033-31.531 90-31.531z"/>
          <g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="24">
            <path d="m44.778 140.26c40.65-21.099 74.051-22.333 113.55 0"/>
            <path d="m44.778 186.42c40.65-21.099 74.051-22.333 113.55 0"/>
            <path d="m218.67 136.26c40.65-21.099 74.051-22.333 113.55 0"/>
          </g>
        </svg>
      </div>
      <div class="yellow button cancel"><span>C</span></div>
      <div class="blue button call">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.94 53.94">
          <path d="M53.36 40.9c-2-3.79-8.98-7.9-9.28-8.08a5.54 5.54 0 0 0-2.71-.78c-1.3 0-2.37.6-3.01 1.68a33.35 33.35 0 0 1-2.6 2.86c-2.37 1.62-4.23 1.43-6.29-.63L18 24.47c-2.05-2.05-2.24-3.93-.64-6.3.23-.3 1.65-1.57 2.87-2.59a3.32 3.32 0 0 0 1.55-2 4.94 4.94 0 0 0-.65-3.73c-.17-.3-4.3-7.27-8.09-9.27a4.95 4.95 0 0 0-5.8.87L4.7 3.99C.69 7.99-.77 12.55.38 17.5c.96 4.13 3.74 8.52 8.28 13.06l14.7 14.7c5.75 5.75 11.23 8.67 16.29 8.67 3.72 0 7.19-1.58 10.3-4.7l2.54-2.54a4.9 4.9 0 0 0 .87-5.8z"/>
        </svg>
      </div>
    </div>`;
  }
}

customElements.define("alcatel-central-buttons", AlcatelCentralButtons);
