import { Box, Title, Details } from './styles'

type Props = {
    title: string
    show?: boolean
    children?: JSX.Element
}

const Card = ({ title, show, children }: Props) => {
    return (
        <Box>
            <Title>{title}</Title>
            <Details>{children}</Details>
        </Box>
    )
}

export default Card
