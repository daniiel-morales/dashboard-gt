import { Chart as GChart } from 'react-google-charts'

export enum chartType {
    bar = 'ColumnChart',
    sidebar = 'Bar',
    table = 'Table',
    pie = 'PieChart',
}

type Props = {
    type: chartType
    width?: string
    data: string[]
    options?: string[]
}

const Chart = ({ type, width, data, options }: Props) => {
    return (
        <GChart
            chartType={type}
            width={width}
            height='inherit'
            data={data}
            options={options}
        />
    )
}

export default Chart
