import RainText from "../../components/RainText"
import Background from "../Background"
import BlurContainer from "../BlurContainer"

const weatherToken = '38f114272b3040ea9a8160421241009'

async function getWeather() {

    try {
        // 1ª requisição: pega a cidade do usuario
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) {
            throw new Error('Erro na requisição da API de IP do usuário');
        }
        const ip = await response.json();

        console.log(ip)

        // 2ª requisição: usa a cidade do IP obtido para fazer a segunda chamada
        const response2 = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${weatherToken}&q=${ip.city}&days=7&aqi=no&alerts=no`);
        if (!response2.ok) {
        throw new Error('Erro na requisição da API 2');
        }
        const weather = await response2.json();

        // Manipula os dados recebidos da segunda API
        console.log('Resposta da Weather API:', weather);

    } catch (error) {
        console.error('Erro durante as requisições:', error);
    }
}

getWeather();



const Main = () => {
    return (
        <>
            <Background/>
            <RainText isRaining={false} days={3}/>
            <BlurContainer/>
        </>
    )
}

export default Main