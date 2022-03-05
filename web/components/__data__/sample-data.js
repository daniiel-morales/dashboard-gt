const data = [
    { year: '2020', total: 74304064000 },
    { entity: 'MAGA', value: 1440407000 },
    { entity: 'MCD', value: 622959000 },
    { entity: 'MINDEF', value: 2702699000 },
    { entity: 'MINEDUC', value: 16522586425 },
    { entity: 'MEM', value: 80992000 },
    { entity: 'MINFIN', value: 381240000 },
    { entity: 'MINEX', value: 577712000 },
    { entity: 'MSPAS', value: 7908657000 },
    { entity: 'MINTRAB', value: 797236000 },
    { entity: 'USAC', value: 1764252000 },
]

const top = data.sort((a, b) => {
    if (a.value > b.value) return -1
})

export const ranking = [
    [
        '',
        '% PRESUPUESTO',
        { role: 'style' },
        {
            sourceColumn: 0,
            role: 'annotation',
            type: 'string',
            calc: 'stringify',
        },
    ],
    [
        '',
        (top[2].value / top[0].total) * 100,
        'color: #737D89',
        `2. ${top[2].entity}`,
    ],
    [
        '',
        (top[1].value / top[0].total) * 100,
        'color: #FEC97F',
        `1. ${top[1].entity}`,
    ],
    [
        '',
        (top[3].value / top[0].total) * 100,
        'color: #F59A8E',
        `3. ${top[3].entity}`,
    ],
]

export const ranking_table = [
    ['', '% PRESUPUESTO'],
    ...top.splice(4).map((data) => {
        const porcentage = (data.value / top[0].total) * 100
        return [
            data.entity,
            { v: porcentage, f: porcentage.toString().substring(0, 4) + ' %' },
        ]
    }),
]

export const covid = [
    ['ENTIDAD', '% EJECUTADO'],
    ['MIDES', 86],
    ['MINFIN', 73],
    ['MSPAS', 49],
    ['MAGA', 10],
    ['MINEDUC', 15],
    ['MINGOB', 30],
    ['MINDEF', 25],
    ['CIV', 1],
    ['MCD', 0],
]
