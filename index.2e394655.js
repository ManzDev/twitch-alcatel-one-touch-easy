const f=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))h(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&h(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function h(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}};f();class r extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${r.styles}</style>
    <div class="container">
      <div class="spiral-container">
        <div class="spiral"></div>
      </div>
    </div>`}}customElements.define("alcatel-speaker",r);class i extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${i.styles}</style>
    <div class="container">
      <div class="led"></div>
    </div>`}}customElements.define("alcatel-led",i);const g=`
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
`,u=`
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
</svg>`,b=`
<svg id="sms" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.22l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.38-4.7 2.83 4.7 2.9V5.38Zm-.03 6.88L9.33 8.79 8 9.59l-1.33-.8-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .97-.74ZM1 11.1l4.7-2.9L1 5.38v5.73Z"/></svg>
`;class n extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render(),this.setDate()}setDate(){const a=new Date().toISOString().substring(5,10).replace("-","/"),s=new Date().toISOString().substring(11,16);this.shadowRoot.querySelector(".date").innerHTML=`<span>${a}</span><span>${s}</span>`}render(){this.shadowRoot.innerHTML=`
    <style>${n.styles}</style>
    <div class="container">
      <div class="status">${g} ${b} ${u}</div>
      <div class="date"></div>
      <div class="message">MANZ.DEV</div>
    </div>`}}customElements.define("alcatel-screen",n);class l extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${l.styles}</style>
    <div class="container">
      <div class="logo">
        ALC<span class="a-letter"></span>TEL
      </div>
      <alcatel-screen></alcatel-screen>
    </div>`}}customElements.define("alcatel-crystal",l);class d extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
      }

      .accept {
        grid-area: accept;
        border-bottom-width: 3px;
        border-top-width: 1px;
        transform: translate(6px, 15px);
        box-shadow: 1px 1px 0 1px #0004;
      }
      .book {
        grid-area: book;
        transform: translate(10px, -6px) rotate(-135deg);
        box-shadow: -1px -1px 0 1px #0004;
      }
      .book svg {
        transform: rotate(180deg) translateY(2px) scale(1.15);
      }

      .cancel {
        grid-area: cancel;
        transform: scale(0.8) translate(6px, 15px) rotate(180deg);
      }
      .cancel span {
        font-size: 1.25rem;
        font-weight: bold;
        transform: rotate(180deg) translateY(8px);
      }

      .call {
        grid-area: call;
        transform: translate(0, -6px) rotate(135deg);
      }
      .call svg {
        transform: rotate(-45deg) translate(3px, -3px) scale(1.15);
      }

      .button.yellow {
        background: #dfd431;
        font-family: "Josefin Sans", sans-serif;
        color: #fff;
      }

      .button.blue {
        background: #094872;
      }

      .button svg {
        width: 50%;
        fill: #fff;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${d.styles}</style>
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
    </div>`}}customElements.define("alcatel-central-buttons",d);class c extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
        transform: translateY(6px);
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${c.styles}</style>
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
    </div>`}}customElements.define("alcatel-numpad-buttons",c);class p extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${p.styles}</style>
    <div class="container">
      <div class="antenna"></div>
      <div class="base"></div>
    </div>`}}customElements.define("alcatel-antenna",p);class x extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
          ". led-1"
          "led-2 ."
          "led-3 led-4"
          "led-5 led-6";
        gap: 70px 60px;
        transform: translate(0, -50px);
      }

      .led-1 { grid-area: led-1 }
      .led-2 { grid-area: led-2 }
      .led-3 { grid-area: led-3 }
      .led-4 { grid-area: led-4 }
      .led-5 { grid-area: led-5 }
      .led-6 { grid-area: led-6 }

      .led {
        background: #d3d712;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        filter: blur(2px);
      }

      .led-1 {
        transform: translate(8px, 40px);
        width: 15px;
        height: 15px;
        filter: blur(5px);
      }

      .led-2 {
        transform: translate(0, 40px);
        filter: blur(5px);
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${x.styles}</style>
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
          <div class="led-container">
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
        <div class="button"></div>
        <div class="button"></div>
      </div>
    </div>`}}customElements.define("alcatel-one-touch-easy",x);
