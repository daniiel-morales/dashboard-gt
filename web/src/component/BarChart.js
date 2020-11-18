import React, { Component } from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap'
import Chart from 'react-google-charts'

class BarChart extends Component {
  constructor () {
    super()
    this.state = {
      data: [],
      entity: '',
      graph: 0,
      isLoading: false
    }
  }

  componentDidMount () {
    this.setState({ isLoading: true })
    fetch('http://0.0.0.0:8080' + this.props.entity.toUpperCase() + '/' + this.props.graph)
      .then(data => data.json())
      .then(data => {
        this.setState({ data: data, isLoading: false })
      })
  }

  render () {
    if (this.state.isLoading) {
      return <h3><p>Cargando ...</p></h3>
    }
    return (
      <Card className='text-center'>
        <CardBody>
          <CardTitle><h5><b>{this.props.entity.toUpperCase().split('/')[1]}</b></h5></CardTitle>
          <Chart
            width='auto'
            height='auto'
            chartType='ColumnChart'
            loader={<div>Cargando...</div>}
            data={[
              [
                'Element',
                'Asignado',

                { role: 'style' },
                {
                  sourceColumn: 0,
                  role: 'annotation',
                  type: 'string',
                  calc: 'stringify'
                }
              ],
              [2020, this.state.data[0], 'color: #ABBEE6', null],
              [2019, this.state.data[1], 'color: #CBAACB', null],
              [2018, this.state.data[2], 'color: #FFFFB5', null],
              [2017, this.state.data[3], 'color: #FFCCB6', null],
              [2016, this.state.data[4], 'color: #F3B0C3', null],
              [2015, this.state.data[5], 'color: #8ED1FC', null]
            ]}
            options={{
              width: '100%',
              height: 400,
              bar: { groupWidth: '100%' },
              legend: { position: 'none' }
            }}
          />
          <h7><i>*datos expresados en miles</i></h7>
          <h6><i>Gráfica: PontePilas.gt datos obtenidos gracias al decreto 57-2008, Guatemala. Fuente: Diario de Centro América</i> <a href='https://drive.google.com/file/d/1TxOs4Z8cOWUKDab7anLOBLhv5l1DX3Kt/view?usp=sharing'>Descargar los datos</a></h6>
        </CardBody>
      </Card>
    )
  }
}

export default BarChart
