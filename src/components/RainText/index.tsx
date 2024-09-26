import { Text } from "./style"


type Props = {
    isRaining: boolean,
    days?: number
}

const RainText = ({isRaining, days}:Props) => {
    return (
        <>
            {isRaining
                ? <Text>Esta chovendo</Text>
                : <Text>Vai chover em {days} dias</Text>
            }
        </>

    )
}

export default RainText