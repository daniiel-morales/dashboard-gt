import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import NavBar from './NavBar'

ReactDOM.render(
  <React.StrictMode>
    <div id='home'>
      <NavBar />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
