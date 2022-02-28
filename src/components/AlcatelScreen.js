const batteryIcon = /* svg */`
<svg version="1.1" id="battery" viewBox="0 11 64 16" xmlns="http://www.w3.org/2000/svg">
<path style="stroke:currentColor; fill:currentColor"
  d="m 53.079275,27.047683 v -6.19511 h 3.791377 V 9.4784421 H 53.079275 V 3.283332 C 53.079275,1.47295 51.606325,0 49.795942,0 H 3.2833324 C 1.4729499,0 0,1.47295 0,3.283332 v 23.764351 c 0,1.810382 1.4729499,3.283332 3.2833324,3.283332 H 49.795942 c 1.810383,0 3.283333,-1.47295 3.283333,-3.283332 z M 3.2833324,28.435327 c -0.7658581,0 -1.3876439,-0.621786 -1.3876439,-1.387644 V 3.283332 c 0,-0.765858 0.6217858,-1.387644 1.3876439,-1.387644 H 49.795942 c 0.765859,0 1.387644,0.621786 1.387644,1.387644 v 6.1951101 11.3741309 6.19511 c 0,0.765858 -0.621785,1.387644 -1.387644,1.387644 z"
  />
<rect
  style="fill:currentColor;fill-opacity:1;stroke:none;stroke-width:4;stroke-linecap:round;stroke-opacity:1;paint-order:stroke fill markers;stop-color:currentColor"
  class="low"
  width="10.106444"
  height="21.714767"
  x="4.2582707"
  y="4.3834324"
  ry="0" />
<rect
  style="fill:currentColor;fill-opacity:1;stroke:none;stroke-width:4;stroke-linecap:round;stroke-opacity:1;paint-order:stroke fill markers;stop-color:currentColor"
  class="medium"
  width="10.106444"
  height="21.714767"
  x="15.670976"
  y="4.3834324"
  ry="0" />
<rect
  style="fill:currentColor;fill-opacity:1;stroke:none;stroke-width:4;stroke-linecap:round;stroke-opacity:1;paint-order:stroke fill markers;stop-color:currentColor"
  class="high"
  width="10.106444"
  height="21.714767"
  x="27.083683"
  y="4.3834324"
  ry="0" />
<rect
  style="fill:currentColor;fill-opacity:1;stroke:none;stroke-width:4;stroke-linecap:round;stroke-opacity:1;paint-order:stroke fill markers;stop-color:currentColor"
  class="full"
  width="10.106444"
  height="21.714767"
  x="38.496387"
  y="4.3834324"
  ry="0" />
</svg>
`;

const signalIcon = /* svg */`
<svg
    id="signal"
    viewBox="0 8 32 16"
    stroke="currentColor"
    stroke-width="1"
    fill="none"
    color="currentColor"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg">
  <path
    d="m 21.004173,2.9972184 c -10.019475,0 -18.1418643,8.1223896 -18.1418643,18.1418646 M 21.004173,9.0445061 c -6.679649,0 -12.0945765,5.4149279 -12.0945765,12.0945769 M 21.004173,15.091796 c -3.339825,0 -6.047287,2.707462 -6.047287,6.047287"
    style="stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none" />
</svg>`;

const smsIcon = /* svg */`
<svg id="sms" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.22l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.38-4.7 2.83 4.7 2.9V5.38Zm-.03 6.88L9.33 8.79 8 9.59l-1.33-.8-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .97-.74ZM1 11.1l4.7-2.9L1 5.38v5.73Z"/></svg>
`;

class AlcatelScreen extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {

      }

      .container {
        width: 150px;
        height: 65px;
        background: #848b6a;
        border-radius: 4px;
        box-shadow:
          1px 1px 2px #0004 inset,
          -1px -1px 2px #0006 inset;

        font-family: "Electronic Highway Sign";
        font-size: 1.2rem;
        padding: 4px 8px;
        color: #333;
        box-sizing: border-box;
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
  }

  setDate() {
    const date = new Date().toISOString().substring(5, 10).replace("-", "/");
    const time = new Date().toISOString().substring(11, 16);
    this.shadowRoot.querySelector(".date").innerHTML = `<span>${date}</span><span>${time}</span>`;
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
