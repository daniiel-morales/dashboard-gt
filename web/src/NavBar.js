import React from 'react'
import 'bootstrap-css-only/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Ranking from './Ranking'
import Ministerio from './Ministerio'
import logo from './images/logo.png'

class NavBar extends React.Component {
  constructor () {
    super()
    this.state = {
      txtrankin1: ''
    }
  }

  render () {
    return (
      <Router>
        <p align='center' class='lgo'>
          <img src={logo} width='65' height='60' />
        </p>

        <table class='bar'>
          <td>
            <a href='/'> <i className='fa fa-fw fa-home' style={{ fontSize: '1.75em', color: 'lightgrey' }} /> </a>
          </td>
          <td>
            <a href='/maga'> <i className='fa fa-leaf' style={{ fontSize: '1.75em', color: 'lightgrey' }} /> </a>
          </td>
          <a href='/mindef'> <i className='fas fa-shield-alt' style={{ fontSize: '1.75em', color: 'lightgrey' }} /> </a>
          <td>
            <a href='/mineduc'> <i className='fas fa-graduation-cap' style={{ fontSize: '1.75em', color: 'lightgrey' }} /> </a>
          </td>
          <a href='/minex'> <i className='far fa-lightbulb' style={{ fontSize: '1.75em', color: 'lightgrey' }} /> </a>
          <td>
            <a href='/minfin'> <i className='far fa-money-bill-alt' style={{ fontSize: '1.75em', color: 'lightgrey' }} /> </a>
          </td>
          <a href='/mintrab'> <i className='far fa-building' style={{ fontSize: '1.75em', color: 'lightgrey' }} /> </a>
          <td>
            <a href='/mspas'> <i className='fas fa-medkit' style={{ fontSize: '1.75em', color: 'lightgrey' }} /> </a>
          </td>
          <td>
            <a href='/usac'> <i className='fas fa-university' style={{ fontSize: '1.75em', color: 'lightgrey' }} /> </a>
          </td>

        </table>

        <main>
          <Switch>
            <Route exact path='/' component={Ranking} />
            <Route exact path='/*' component={Ministerio} />
          </Switch>
        </main>
      </Router>
    )
  }
}

export default NavBar
