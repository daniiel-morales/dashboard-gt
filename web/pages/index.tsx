import type { NextPage } from 'next'
import Head from 'next/head'

import NavBar from '../components/navbar'
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
import { InLine, Layout } from '../components/styles'

const Home: NextPage = () => {
    return (
        <>
            <NavBar />
            <Layout>
                <Head>
                    <title>Ponte Pilas GT</title>
                    <meta
                        name='description'
                        content='Guatemalan Entity Graphs'
                    />
                    <link
                        rel='icon'
                        href={`${process.env.BACKEND_URL}/favicon.png`}
                    />
                </Head>
                <Card title={'¿A quién se asigna más presupuesto? '}>
                    <InLine>
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
                    </InLine>
                </Card>
                <Card title={'¿Como ejecutó su presupuesto COVID?'}>
                    <Chart
                        data={covid as unknown as string[]}
                        type={chartType.sidebar}
                        options={sidebar_options as unknown as string[]}
                    />
                </Card>
            </Layout>
        </>
    )
}

export default Home
