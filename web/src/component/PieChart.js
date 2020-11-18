import React, { Component } from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap'
import Chart from 'react-google-charts'

class PieChart extends Component {
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
            height='500px'
            chartType='PieChart'
            loader={<div>Cargando...</div>}
            data={this.state.data}
            options={{
              width: '100%',
              sliceVisibilityThreshold: 0.0,
              pieHole: 0.2,
              slices: {
                0: { color: '#8ED1FC', offset: 0.1 },
                1: { color: '#F3B0C3' },
                2: { color: '#FFCCB6' },
                3: { color: '#FFFFB5' },
                4: { color: '#CBAACB' },
                5: { color: '#ABBEE6' }
              }
            }}
          />
        </CardBody>
        <h7><i>*datos expresados en miles</i></h7>
        <h6><i>Gráfica: PontePilas.gt datos obtenidos gracias al decreto 57-2008, Guatemala. Fuente: SICOIN</i> <a href='https://drive.google.com/file/d/1TxOs4Z8cOWUKDab7anLOBLhv5l1DX3Kt/view?usp=sharing'>Descargar los datos</a></h6>
      </Card>
    )
  }
}

export default PieChart
