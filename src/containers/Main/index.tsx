import { useEffect, useState } from "react";
import RainText from "../../components/RainText"
import Background from "../Background"
import BlurContainer from "../BlurContainer"

const weatherAPIToken = process.env.REACT_APP_WEATHERAPI_TOKEN
const openWeatherToken = process.env.REACT_APP_OPENWEATHER_TOKEN



const Main = () => {

    const [weatherData, setWeatherData] = useState(null)
    const [nextRain, setnextRain] = useState(-1)
    const [isDay, setIsDay] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    


    //calcula quantos dias ate a proxima chuva
    const daysTillRain = (forecast: any) => {
        for (let i = 0; i < forecast.length; i++) {

            const weatherId = forecast[i].weather[0].id.toString().charAt(0)

            if (weatherId === '2' || weatherId === '3' || weatherId === '5') {
                return i; // retorna o indice do primeiro dia com chuva
            }
        }
            return -1; // retorna -1 se não houver previsao de chuva
    }

    //Funcao que faz as chamadas nas APIs
    async function getWeather() {

        try {
            // 1a requisição: pega a cidade do usuario
            const response = await fetch('https://ipapi.co/json/');
            if (!response.ok) {
                throw new Error('Erro na requisição da API de IP do usuário');
            }
            const ip = await response.json();
            console.log(ip)
    
            // 2a requisição: usa a cidade do IP obtido para fazer a segunda chamada para a WeatherAPI
            const response2 = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${weatherAPIToken}&q=${ip.city}&days=3&aqi=no&alerts=no&lang=en_us`);
            if (!response2.ok) {
            throw new Error('Erro na requisição da API do WeatherAPI');
            }
            const weatherAPI = await response2.json();

            // 3a requisição: usa a latitude/longitude do IP obtido para fazer a terceira chamada para a OpenWeatherMap
            const response3 = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${ip.latitude}&lon=${ip.longitude}&exclude=hourly,minutely,alerts&appid=${openWeatherToken}&units=metric&lang=pt_br`);
            if (!response3.ok) {
            throw new Error('Erro na requisição da API do OpenWeatherMap');
            }
            const openWeatherMap = await response3.json();

            const tempForecast = openWeatherMap.daily.slice(1)

            const customObject: any = {
                current: {
                    condition: openWeatherMap.current.weather[0],
                    temp: weatherAPI.current.temp_c,
                    max: weatherAPI.forecast.forecastday[0].day.maxtemp_c,
                    min: weatherAPI.forecast.forecastday[0].day.mintemp_c
                },
                forecast: tempForecast,
                city: ip.city,
                country: ip.country_name,
            }
    
 

            // Armazena a resposta da api no estado
            setWeatherData(customObject)

            // Armazena o numero de dias ate a proxima chuva
            setnextRain(daysTillRain(openWeatherMap.daily)) 

            // Armazena no estado se esta de dia
            setIsDay(weatherAPI.current.is_day)
    
    
            console.log('Resposta da Weather API:', weatherAPI);
            console.log('Resposta da OpenWeather:', openWeatherMap)
            
    
        } catch (error) {
            console.error('Erro durante as requisições:', error);
        } finally {
            // Desativa o estado de carregamento
            setTimeout(() => {setIsLoading(false)}, 1000)
            
        }
    }

    //Faz as requisicoes quando o componente e renderizado
    useEffect(() => {
        getWeather();
    }, []);

    console.log('Estado:', weatherData)
    return (
        <>
            {isLoading ? (
                // Tela de carregamento
                <div className="loading-screen">
                    <span className="loader"></span>
                </div>
            ) : (
                <>
                    <RainText days={nextRain} isDay={isDay}/>
                    <BlurContainer weather={weatherData} isDay={isDay} />
                    <Background isDay={isDay}/>
                </>
            )}
        </>
    )
}

export default Main