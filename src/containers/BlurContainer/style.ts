import styled from "styled-components";


type IconURL = {
    url?:string
}

export type isDay = {
    isDay?:number
}


export const Container = styled.div<isDay>`
    width: 100vw;

    z-index: 5;

    position: fixed;
    bottom: 0;
    backdrop-filter: blur(10px) brightness(90%);

    padding: 32px 80px;

    & *{
        color: ${(props) => props.isDay === 0? 'white' : '#252525'};
    }

    @media screen and (max-width: 880px) {
        padding: 3vh 5vw;
    }

`


export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    




    .upper-row{

        display: flex;
        margin-bottom: 40px;
        margin-right: 40px;

        
        animation-name: fadeIn;
        animation-duration: 500ms;
        animation-delay: 100ms;
        animation-fill-mode: both;
        

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

        @media screen and (max-width: 880px) {
            margin: 0;
        }
    }

    .lower-row{

        height: 100%;

        animation-name: fadeIn;
        animation-duration: 500ms;
        animation-delay: 200ms;
        animation-fill-mode: both;


        

        ul{
            display: flex;
            justify-content: space-between;
            padding: 16px;
            height: 100%;
            width: 100%;
            max-width: 1024px;
            min-width: 720px;

            
        }

        @media screen and (max-width: 880px) {
            overflow-x: scroll;
        }


    }


    @keyframes fadeIn {
        from {
            opacity: 0%;
            transform: translateY(20px);
        }

        to{
            transform: translateY(0);
            opacity: 100%;
        }
    }


    @media screen and (max-width: 1350px) {
        flex-direction: column;
        align-items: normal;
    }

`


export const ForecastItem = styled.li<IconURL>`
    width: 10%;
    min-width: 80px;
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