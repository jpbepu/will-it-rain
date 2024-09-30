import { Container, ForecastItem, Wrapper } from "./style"
import weekdays from "../../data/weekdays"


const BlurContainer = (props : any) => {

    
    const currentTemp = parseInt(props.weather.current.temp)
    const city = props.weather.city
    const country = props.weather.country
    const description = props.weather.current.condition.description
    const min = props.weather.current.min
    const max = props.weather.current.max
    const forecast = props.weather.forecast
    const isDay = props.isDay


    

    const getWeekday = (timestamp:number) => {
        const date = new Date(timestamp*1000)
        return weekdays[date.getDay()]
    }


    return (
        <Container isDay={isDay}>
            <Wrapper>


                <div className="upper-row">
                    <div className="current-weather">
                        <div className="temp-wrapper">
                            <p className="location">
                                {city}, {country}
                            </p>
                            <p className="temp">
                                {currentTemp}&deg;C
                            </p>
                            <p className="state">
                                {description}
                            </p>
                        </div>
                        <p className="minmax">
                            min {parseInt(min)}&deg;C
                            <br />
                            max {parseInt(max)}&deg;C
                        </p>
                    </div>
                </div>


                <div className="lower-row">
                    <ul>
                        {forecast.map((item: any) => (
                            <ForecastItem
                                url={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                                key={item.moon_phase}
                            >
                                <p className="weekday">{getWeekday(item.dt)}</p>
                                <i></i>
                                <p className="f-temp">{parseInt(item.temp.day)}&deg;C</p>
                            </ForecastItem>
                        ))}

                    </ul>
                </div>


            </Wrapper>
        </Container>
    )
}

export default BlurContainer