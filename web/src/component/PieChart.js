import React, { Component } from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap'
import Chart from 'react-google-charts'

class PieChart extends Component {
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
            height='500px'
            chartType='PieChart'
            loader={<div>Cargando...</div>}
            data={[
              ['Detalle', 'Gasto'],
              [2020, 1],
              [2019, 2],
              [2018, 3],
              [2017, 4],
              [2016, 5],
              [2015, 6]
            ]}
            options={{
              width: '100%',
              sliceVisibilityThreshold: 0.0,
              pieHole: 0.3,
              slices: {
                0: { color: '#8ED1FC', offset: 0.3 },
                1: { color: '#F3B0C3' },
                2: { color: '#FFCCB6' },
                3: { color: '#FFFFB5' },
                4: { color: '#CBAACB' },
                5: { color: '#ABBEE6' }
              }
            }}
          />
        </CardBody>
      </Card>
    )
  }
}

export default PieChart
