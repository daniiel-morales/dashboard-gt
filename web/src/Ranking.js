import React, { Component } from 'react'
import { CardBody } from 'reactstrap'
import BarChart from './component/BarChart'
import TableSort from './component/TableSort'

class Ranking extends Component {
  constructor () {
    super()
    this.state = {
      loading: true
    }
  }

  render () {
    return (
      <>
        <div className='col-11 col-md-11 m-5'>
          <div class='row'>
            <div class='col-md-auto' />
            <div class='col-3'>
              <h1>  Top de Ministerios </h1>
              <CardBody>
                <font face='Oswald'> Porcentaje asignado del presupuesto de la nación para el año 2020 </font>
              </CardBody>
            </div>
            <div class='col-8'>
              <TableSort />
            </div>
          </div>
        </div>

        <div className='col-11 col-md-11 m-5'>
          <div class='row'>
            <div class='col-md-auto' />
            <div class='col-3'>
              <h1>  ¿En qué afectó el COVID a la economía de estas instituciones? </h1>
              <CardBody>
                <font face='Oswald'> Ejecución de fondos por emergencia de COVID-19
                  <br />El Congreso aprobó la contratación de préstamos para atender la crisis sanitaria a cargo nueve ministerios, seis secretarías y tres dependencias del Estado. El monto asignado suma más de Q11 millardos
                </font>
              </CardBody>
            </div>
            <div class='col-8' />
          </div>
        </div>
      </>
    )
  }
}
export default Ranking
