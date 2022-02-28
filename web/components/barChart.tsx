import React from 'react'
import { Chart } from 'react-google-charts'

import { ranking, options } from './__data__/sample-data'

export function Bar() {
    return (
        <Chart
            chartType='ColumnChart'
            width='100%'
            height='400px'
            data={ranking}
            options={options}
        />
    )
}
