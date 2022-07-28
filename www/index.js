// services
import s from './service/_s.js'
import lit from './service/lit.js'
// el
import AboutPage from './el/about-page.js'
import HomePage from './el/home-page.js'

const route = {
  '': HomePage,
  '#': HomePage,
  '#home': HomePage,
  '#about': AboutPage
}

const app = document.createElement('div')
document.body.appendChild(app)

onhashchange = () => {
  const page = route[location.hash]
  app.innerHTML = ''
  app.appendChild( new page() )
}
onhashchange()