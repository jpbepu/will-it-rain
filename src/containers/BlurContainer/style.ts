import styled from "styled-components";


type IconURL = {
    url?:string
}


export const Container = styled.div`
    height: 45vh;
    width: 100vw;

    position: fixed;
    bottom: 0;
    backdrop-filter: blur(10px) brightness(90%);

    padding: 40px 80px;

`


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;


    .upper-row{

        display: flex;
        margin-bottom: 20px;
        

        .current-weather{
            
            display: flex;
            flex-direction: row;
            color: #252525;
    
            .temp{
                font-size: 100px;
                font-weight: 700;
                padding-right: 16px;
            }

            .location{
                font-size: 20px;
                text-align: start;
            }

            .state{
                font-size: 20px;
                padding-right: 16px;
                text-align: end;
            }

            .minmax{
                font-size: 20px;
                align-self: flex-end;
                padding-left: 16px;
                border-left: solid 1px black;
            }
        }

        .infos{

            .city{
            }

            .weather-name{

            }
        }
    }

    .lower-row{

        height: 40%;

        ul{
            display: flex;
            justify-content: space-evenly;
            height: 100%;
            width: 100%;
        }


    }

`


export const ForecastItem = styled.li<IconURL>`
    width: 10%;
    height: 100%;
    padding: 4px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    
    border-radius: 8px;

    background-color: rgba(0,0,0,0.05);

    transition: 100ms;
    

    .f-temp{
        font-weight: 600;
        font-size: 24px;
    }

    i{
        background-image: url(${(props) => props.url});
        background-size: cover;
        width: 64px;
        height: 64px;
    }


    &:hover{
        transform: translateY(-5px);
    }

`