import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import NavBar from '../components/navbar'
import Card from '../components/card'
import Chart, { chartType } from '../components/chart'
import { needs, expenses } from '../components/__data__/sample-data'
import { getAssigned } from '../components/__data__/entity-sample'
import {
    bar_options,
    table_options,
    sidebar_options,
    cube_options,
    pie_options,
} from '../components/config'

const Entities = {
    maga: 1,
    mcd: 2,
    mindef: 3,
    mineduc: 4,
    mem: 5,
    minfin: 6,
    minex: 7,
    mspas: 8,
    mintrab: 9,
    usac: 10,
}

const Entity: NextPage = () => {
    const router = useRouter()
    const { entity } = router.query
    let data_from
    switch (entity?.toString()) {
        case 'maga':
            data_from = Entities.maga
            break
        case 'mcd':
            data_from = Entities.mcd
            break
        case 'mindef':
            data_from = Entities.mindef
            break
        case 'mineduc':
            data_from = Entities.mineduc
            break
        case 'mem':
            data_from = Entities.mem
            break
        case 'minfin':
            data_from = Entities.minfin
            break
        case 'minex':
            data_from = Entities.minex
            break
        case 'mspas':
            data_from = Entities.mspas
            break
        case 'mintrab':
            data_from = Entities.mintrab
            break
        case 'usac':
            data_from = Entities.usac
            break
        default:
            data_from = Entities.minex
    }

    return (
        //(entity as string) in Entities ? (
        <>
            <NavBar />
            <Card title={'¿Se le asigno más Presupuesto?'}>
                <Chart
                    data={getAssigned(data_from) as unknown as string[]}
                    type={chartType.sidebar}
                    options={bar_options as unknown as string[]}
                />
            </Card>
            <Card title={'¿En que ejecutan sus ingresos?'}>
                <Chart
                    data={expenses as unknown as string[]}
                    type={chartType.pie}
                    options={pie_options as unknown as string[]}
                />
            </Card>
            <Card title={'¿Que importa más para la entidad?'}>
                <Chart
                    data={needs as unknown as string[]}
                    type={chartType.cube}
                    options={cube_options as unknown as string[]}
                />
            </Card>
        </>
    )
    //   : (  <p>ERROR</p>
    // )
}

export default Entity
