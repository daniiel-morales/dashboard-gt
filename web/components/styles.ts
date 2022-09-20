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
    display: flex;
    justify-content: center;
`

export const Title = styled.h1`
    padding: 1rem;
`

export const Layout = styled.div`
    @media only screen and (min-width: 600px) {
        margin-left: 15%;
        margin-right: 15%;
    }
    @media only screen and (min-width: 1000px) {
        margin-left: 25%;
        margin-right: 25%;
    }
`

export const InLine = styled.div`
    display: box;
`
