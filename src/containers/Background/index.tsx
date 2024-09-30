import { Day, Night } from "./style"


const Background = ({isDay}:any) => {
    console.log('isDay', isDay)
    return (
        <>
            {isDay === 1 ? (
                <Day>
                    <div></div>
                </Day>

            ) : (
                <Night>
                    <div></div>
                </Night>
            )}
        </>
    )
}

export default Background