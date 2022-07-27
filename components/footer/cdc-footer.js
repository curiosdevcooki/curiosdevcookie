//Built web component for footer:
class Footer extends HTMLElement {
  constructor() {
    super();
    let shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        section {
          font-family: var(--font-handwritten-sloppy);
          font-size: 2rem;
      </style>

        <section>
        <p>✨ Built in 🇪🇺🇩🇪…  with copious amounts of 🫀 && 🧠 && ☕️ && 🎉 by <a href='https://twitter.com/curiosdevcookie'> @curiosdevcookie</a> .✨</p>
        </section>
    `;
  }
}
customElements.define('cdc-footer', Footer);
