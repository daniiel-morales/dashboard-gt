import React, { Component } from 'react'
import { Card, CardBody } from 'reactstrap'
import Chart from 'react-google-charts'

class TableSort extends Component {
  constructor () {
    super()
    this.state = {
      data: []
    }/*
    fetch('http://35.208.120.169:8080')
      .then(data => data.json())
      .then(data => {
        console.log(data)
        this.setState({ data: data })
      }) */
  }

  render () {
    return (
      <Card>
        <CardBody>
          <Chart
            chartType='Table'
            loader={<div>Cargando...</div>}
            data={[
              [
                { type: 'string', label: '' },
                { type: 'string', label: '' },
                { type: 'number', label: '% presupuesto actual' }
              ],

              [4, 'Universidad de San Carlos de Guatemala ', { v: 2.37, f: '2.37' }],
              [5, 'Ministerio de Agricultura Ganadería y alimentación', { v: 1.94, f: '1.94' }],
              [6, 'Ministerio de Trabajo y Prevención Social', { v: 1.07, f: '1.07' }],
              [7, 'Ministerio de Cultura y Deportes', { v: 0.84, f: '0.84' }],
              [8, 'Ministerio de Relaciones Exteriores', { v: 0.78, f: '0.78' }],
              [9, 'Ministerio de Finanzas Publicas', { v: 0.51, f: '0.51' }],
              [10, 'Ministerio de Energía y Minas', { v: 0.11, f: '0.11' }]

            ]}
            options={{
              showRowNumber: false,
              sortColumn: 2,
              sortAscending: false,
              width: '100%'
            }}
          />
          <br />
          <center>
            <h6><i>Gráfica: PontePilas.gt datos obtenidos gracias al decreto 57-2008, Guatemala. Fuente: Diario de Centro América</i> <a href='https://drive.google.com/file/d/1TxOs4Z8cOWUKDab7anLOBLhv5l1DX3Kt/view?usp=sharing'>Descargar los datos</a></h6>
          </center>
        </CardBody>
      </Card>
    )
  }
}
export default TableSort
