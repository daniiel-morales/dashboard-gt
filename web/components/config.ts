export const bar_options = {
    bar: { groupWidth: '100%' },
    legend: { position: 'none' },
    vAxis: { gridlines: { count: 0 }, textPosition: 'none' },
}

export const table_options = {
    showRowNumber: true,
    firstRowNumber: 4,
    sort: false,
    width: '100%',
}

export const pie_options = {
    width: '100%',
    sliceVisibilityThreshold: 0.0,
    pieHole: 0.2,
    legend: { position: 'left' },
    pieSliceText: 'none',
    slices: {
        0: { color: '#8ED1FC', offset: 0.1 },
        1: { color: '#F3B0C3' },
        2: { color: '#FFCCB6' },
        3: { color: '#FFFFB5' },
        4: { color: '#CBAACB' },
        5: { color: '#ABBEE6' },
    },
}

export const sidebar_options = {
    width: '100%',
    colors: ['#FEC97F'],
    legend: { position: 'none' },
    bars: 'horizontal',
}

export const cube_options = {
    minColor: '#FFFFB5',
    midColor: '#F3B0C3',
    maxColor: '#8ED1FC',
    headerHeight: 0,
    fontColor: 'grey',
    showScale: true,
}
