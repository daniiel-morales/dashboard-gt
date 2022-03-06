import styled from 'styled-components'

type Styles = {
    readonly show?: boolean
}
export const Box = styled.div`
    width: auto;
    height: inherit;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.6);
`
export const Details = styled.div`
    width: inherit;
    padding: 0 0.5rem 1rem 0.5rem;
    display: box;
    justify-content: center;
`

export const Title = styled.h1`
    padding: 1rem;
`
