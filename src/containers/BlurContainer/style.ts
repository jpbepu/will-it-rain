import styled from "styled-components";


export const Container = styled.div`
    height: 40vh;
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
        

        .current-weather{
            
            display: flex;
            flex-direction: row;
            color: #252525;
    
            .temp{
                font-size: 120px;
                font-weight: 700;
                padding-right: 16px;
            }

            .location{
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


export const ForecastItem = styled.li`
    width: 10%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    border-bottom: solid 1px black;
    .f-temp{
        font-weight: 600;
        font-size: 24px;
    }

`