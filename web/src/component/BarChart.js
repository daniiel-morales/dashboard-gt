import React, { Component } from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap'
import Chart from 'react-google-charts'

class BarChart extends Component {
  constructor () {
    super()
    this.state = {
      data: [],
      number: []
    }/*
    fetch('http://URL-SERVER')
      .then(data => data.json())
      .then(data => {
        console.log(data)
        this.setState({ data: data })
      }) */
  }

  render () {
    return (
      <Card className='text-center'>
        <CardBody>
          <CardTitle>Ministerio de Agricultura, Ganadería y Alimentación </CardTitle>
          <Chart
            width='auto'
            height='auto'
            chartType='ColumnChart'
            loader={<div>Cargando...</div>}
            data={[
              [
                'Element',
                'Porcentaje',

                { role: 'style' },
                {
                  sourceColumn: 0,
                  role: 'annotation',
                  type: 'string',
                  calc: 'stringify'
                }
              ],
              [2020, 1, 'color: #ABBEE6', null],
              [2019, 2, 'color: #CBAACB', null],
              [2018, 3, 'color: #FFFFB5', null],
              [2017, 4, 'color: #FFCCB6', null],
              [2016, 5, 'color: #F3B0C3', null],
              [2015, 6, 'color: #8ED1FC', null]
            ]}
            options={{
              width: '100%',
              height: 400,
              bar: { groupWidth: '100%' },
              legend: { position: 'none' }
            }}
          />
          <h6><i>Gráfica: PontePilas.gt datos obtenidos gracias al decreto 57-2008, Guatemala. Fuente: Diario de Centro América</i> <a href='https://drive.google.com/file/d/1Y3IHPjHXjTcAAaZkhJSy7auh3LzxQrLj/view?usp=sharing'>Descargar los datos</a></h6>
        </CardBody>
      </Card>
    )
  }
}

export default BarChart
