import s from '../service/_s.js'
const {html, css, LitElement} = s.lit

export default class HomePage extends LitElement {
  constructor(){super()}

  render = () => html`
    <div>
      <h1>Home Works!</h1>
      <a href="#about">About</a>
    </div>
  `
}
customElements.define('home-page', HomePage)