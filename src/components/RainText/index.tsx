import { Text } from "./style"


const RainText = ({days, isDay}:any) => {
    return (
        <>

            <Text isDay={isDay}>
                <h1>
                    Vai chover em {days} dia(s)
                </h1>
            </Text>
            
        </>

    )
}

export default RainText