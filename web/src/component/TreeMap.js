import React, { Component } from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap'
import Chart from 'react-google-charts'

class TreeMap extends Component {
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
            width='500px'
            height='300px'
            chartType='TreeMap'
            loader={<div>Loading Chart</div>}
            data={this.state.data}
            options={{
              minColor: '#FFFFB5',
              midColor: '#F3B0C3',
              maxColor: '#8ED1FC',
              headerHeight: 15,
              fontColor: 'black',
              showScale: true,
              generateTooltip: (row, size, value) => {
                return (
                  '<div style="background:#fd9; padding:10px; border-style:solid"> ' +
        value +
        '</div>'
                )
              }
            }}
            rootProps={{ 'data-testid': '3' }}
          /><h7><i>*datos expresados en miles</i></h7>
          <h6><i>Gráfica: PontePilas.gt datos obtenidos gracias al decreto 57-2008, Guatemala. Fuente: SICOIN</i> <a href='https://drive.google.com/file/d/1TxOs4Z8cOWUKDab7anLOBLhv5l1DX3Kt/view?usp=sharing'>Descargar los datos</a></h6>
        </CardBody>
      </Card>
    )
  }
}

export default TreeMap
