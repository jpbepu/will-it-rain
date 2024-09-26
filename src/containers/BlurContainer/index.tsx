import { Container, ForecastItem, Wrapper } from "./style"


const BlurContainer = () => {
    return (
        <Container>
            <Wrapper>


                <div className="upper-row">
                    <div className="current-weather">
                        <div className="temp-wrapper">
                            <p className="temp">
                                34&deg;C
                            </p>
                            <p className="location">
                                Sao Paulo, Brazil
                            </p>
                        </div>
                        <p className="minmax">
                            min 18
                            <br />
                            max 35
                        </p>
                    </div>
                </div>


                <div className="lower-row">
                    <ul>

                        <ForecastItem>
                            <p className="weekday">qui</p>
                            <p className="f-temp">30&deg;C</p>
                            <p>zzz</p>
                        </ForecastItem>

                        <ForecastItem>
                            <p className="weekday">qui</p>
                            <p className="f-temp">30&deg;C</p>
                            <p>zzz</p>
                        </ForecastItem>

                        <ForecastItem>
                            <p className="weekday">qui</p>
                            <p className="f-temp">30&deg;C</p>
                            <p>zzz</p>
                        </ForecastItem>

                        <ForecastItem>
                            <p className="weekday">qui</p>
                            <p className="f-temp">30&deg;C</p>
                            <p>zzz</p>
                        </ForecastItem>

                        <ForecastItem>
                            <p className="weekday">qui</p>
                            <p className="f-temp">30&deg;C</p>
                            <p>zzz</p>
                        </ForecastItem>

                        <ForecastItem>
                            <p className="weekday">qui</p>
                            <p className="f-temp">30&deg;C</p>
                            <p>zzz</p>
                        </ForecastItem>

                        <ForecastItem>
                            <p className="weekday">qui</p>
                            <p className="f-temp">30&deg;C</p>
                            <p>zzz</p>
                        </ForecastItem>

                    </ul>
                </div>


            </Wrapper>
        </Container>
    )
}

export default BlurContainer