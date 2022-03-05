import type { NextPage } from 'next'
import Head from 'next/head'

import Card from '../components/card'
import Chart, { chartType } from '../components/chart'
import {
    ranking,
    ranking_table,
    covid,
} from '../components/__data__/sample-data'
import {
    bar_options,
    table_options,
    sidebar_options,
} from '../components/config'

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Ponte Pilas GT</title>
                <meta name='description' content='Guatemalan Entity Graphs' />
                <link
                    rel='icon'
                    href={`${process.env.BACKEND_URL}/favicon.png`}
                />
            </Head>
            <Card title={'¿A que entidad se le asigna mas presupuesto? '}>
                <>
                    <Chart
                        data={ranking as unknown as string[]}
                        type={chartType.bar}
                        options={bar_options as unknown as string[]}
                    />
                    <Chart
                        width='95%'
                        data={ranking_table as unknown as string[]}
                        type={chartType.table}
                        options={table_options as unknown as string[]}
                    />
                </>
            </Card>
            <Card
                title={'¿Cuanto ejecuto cada entidad de su presupuesto COVID?'}
            >
                <Chart
                    data={covid as unknown as string[]}
                    type={chartType.sidebar}
                    options={sidebar_options as unknown as string[]}
                />
            </Card>
        </div>
    )
}

export default Home
