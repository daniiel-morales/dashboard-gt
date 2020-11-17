import React, { Component } from 'react'
import { CardBody } from 'reactstrap'
import BarChart from './component/BarChart'
import PieChart from './component/PieChart'

class Ministerio extends Component {
  render () {
    return (
      <>
        <div className='col-11 col-md-11 m-5'>
          <div class='row'>
            <div class='col-md-auto' />
            <div class='col-3'>
              <h1>  ¿Cuánto de presupuesto nacional se le asignó? </h1>
              <CardBody>
                                Presupuesto asignado de 2015 a 2020
              </CardBody>
            </div>
            <div class='col-8'>
              <BarChart />
            </div>
          </div>
        </div>

        <div className='col-11 col-md-11 m-5'>
          <div class='row'>
            <div class='col-md-auto' />
            <div class='col-3'>
              <h1>  ¿Cuánto es el ingreso mensual? </h1>
              <CardBody>
                                Presupuesto por mes
              </CardBody>
            </div>
            <div class='col-8'>
              <PieChart />
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default Ministerio
