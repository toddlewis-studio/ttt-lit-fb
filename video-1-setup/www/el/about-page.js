import s from '../service/_s.js'
const {html, css, LitElement} = s.lit

export default class AboutPage extends LitElement {
  constructor(){super()}

  render = () => html`
    <div>
      <h1>About Works!</h1>
      <a href="#home">Home</a>
    </div>
  `
}
customElements.define('about-page', AboutPage)