import React, { Component } from 'react'
import { CardBody } from 'reactstrap'
import Chart from 'react-google-charts'
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
              <h1>  ¿En qué afectó el COVID a la economía de estas instituciones? </h1>
              <CardBody>
                <font face='Oswald'> Ejecución de fondos por emergencia de COVID-19
                  <br />El Congreso aprobó la contratación de préstamos para atender la crisis sanitaria a cargo nueve ministerios, seis secretarías y tres dependencias del Estado. El monto asignado suma más de Q11 millardos
                </font>
              </CardBody>
            </div>
            <div class='col-8'>
              <Chart
                width='auto'
                height='auto'
                chartType='BarChart'
                loader={<div>Loading Chart</div>}
                data={[
                  ['ENTIDAD', '% ejecutado'],
                  ['Ministerio de Desarrollo Social', 73.81], // , 5595.112],
                  ['Ministerio de Economía', 85.96], // , 1743.191],
                  ['Ministerio de Salud', 48.55], // , 749.796],
                  ['Ministerio de Agricultura', 10], // , 44.642],
                  ['Ministerio de Educación', 29.93], // , 10.490],
                  ['Ministerio de Gobernación', 11.76], // , 9.409],
                  ['Ministerio de Defensa', 48.91], // , 48.91],
                  ['Ministerio de Comunicaciones', 0.0], // , 6.583],
                  ['Ministerio de Cultura', 0.0] // , 0.0]
                ]}
                options={{
                  width: '100%',
                  height: 400,
                  colors: ['#DDB200'],
                  legend: { position: 'none' }
                }}
              />
              <h7><i>*datos expresados en millones</i></h7>
              <h6><i>Gráfica: PontePilas.gt datos obtenidos gracias al decreto 57-2008, Guatemala. Fuente:  <a href='https://guatemalaleaks.org/#covid'> Guatemala Leaks</a>  </i> <a href='https://drive.google.com/file/d/1vrJtj3JSJeiQBAtJm-gmuqS9ApqOwR5e/view?usp=sharing'>Descargar los datos</a></h6>
            </div>
          </div>
        </div>
        <div className='col-11 col-md-11 m-5'>
          <div class='row'>
            <div class='col-md-auto' />
            <div class='col-3'>
              <h1> ¿ A que entidad se le asigna mas presupuesto? </h1>
              <CardBody>
                <font face='Oswald'> Porcentaje asignado del presupuesto de la nación para el año 2020 </font>
              </CardBody>
            </div>
            <div class='col-8'>
              <Chart
                width='auto'
                height='300px'
                chartType='ColumnChart'
                loader={<div>Loading Chart</div>}
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
                  ['', 8.94, '#b87333', '3. MINDEF'],
                  ['', 19.3, 'gold', '1. MINEDUC'],
                  ['', 10.49, 'silver', '2. MSPAS']
                ]}
                options={{

                  width: '70%',
                  height: '100%',
                  bar: { groupWidth: '100%' },
                  legend: { position: 'none' }
                }}
              />
              <TableSort />
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default Ranking
