import React from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Ranking from './Ranking'
import Ministerio from './Ministerio'

class NavBar extends React.Component {
  constructor () {
    super()
    this.state = {
      txtrankin1: ''
    }
  }
  /*
  componentDidMount () {
    this.wait()
  }
  readMaga1 = file => {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = () => {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status == 0) {
          var allText = rawFile.responseText;
          this.setState({
            textcsv2: allText
          });
        }
      }
    };
    rawFile.send(null);
  }; */

  render () {
    return (
      <Router>
        <Route render={({ location, history }) => (
          <>
            <SideNav
              onSelect={(selected, event) => {
                var to = '/' + selected
                if (to === '//') {
                  to = '/'
                }
                if (location.pathname !== to) {
                  history.push(to)
                }
              }}
              style={{
                position: 'fixed',
                background: '#2196f3'
              }}
            >
              <SideNav.Toggle />
              <SideNav.Nav defaultSelected='/'>
                <NavItem eventKey='/'>
                  <NavIcon>
                    <i className='fa fa-fw fa-home' style={{ fontSize: '1.75em' }} />
                  </NavIcon>
                  <NavText>
                    Home
                  </NavText>
                </NavItem>
                <NavItem eventKey='maga'>
                  <NavIcon>
                    <i className='fa fa-leaf' style={{ fontSize: '1.75em' }} />
                  </NavIcon>
                  <NavText>
                  MAGA
                  </NavText>
                </NavItem>

                <NavItem eventKey='mcd'>
                  <NavIcon>
                    <i className='far fa-futbol' style={{ fontSize: '1.75em' }} />
                  </NavIcon>

                  <NavText>
                  MCD
                  </NavText>

                </NavItem>

                <NavItem eventKey='mindef'>
                  <NavIcon>
                    <i className='fas fa-shield-alt' style={{ fontSize: '1.75em' }} />
                  </NavIcon>

                  <NavText>
                  MINDEF
                  </NavText>

                </NavItem>

                <NavItem eventKey='contact'>
                  <NavIcon>
                    <i className='fas fa-user-friends' style={{ fontSize: '1.75em' }} />
                  </NavIcon>

                  <NavText>
                  Contacto
                  </NavText>

                </NavItem>

              </SideNav.Nav>
            </SideNav>
            <main>
              <Switch>
                <Route exact path='/' component={Ranking} />
                <Route exact path='/*' component={Ministerio} />
              </Switch>
            </main>
          </>
        )}
        />
      </Router>
    )
  }
}

export default NavBar
