import { Text } from "./style"


const RainText = ({days, isDay}:any) => {
    let nextRain = '';
    if (days === -1) {
        nextRain = 'Não vai chover na próxima semana';
    } else {
        nextRain = `Vai chover em ${days} dia(s)`;
    }


    return (
        <>

            <Text isDay={isDay}>
                <h1>
                    {nextRain}
                </h1>
            </Text>
            
        </>

    )
}

export default RainText