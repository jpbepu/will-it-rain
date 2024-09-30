import styled from "styled-components";


export const Day = styled.div`
    width: 100vw;
    height: 100vh;

    background-image: linear-gradient(#abc9f5, rgb(240, 248, 255));

    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    div{
        display: block;
        min-width: 800px;
        min-height: 800px;

        filter: drop-shadow(16px 16px 2px #ffbb28);

        background-image: radial-gradient(
            farthest-corner at 250px 250px,
            #f49338 0%,
            #ffbb28 40%,
            rgba(240, 248, 255, 0.1) 80%
        );
        border-radius: 50%;
    }
`


export const Night = styled.div`
    width: 100vw;
    height: 100vh;

    background-image: linear-gradient(#42414d, rgb(29, 29, 29));

    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    div{
        display: block;
        min-width: 800px;
        min-height: 800px;

        transform: translate(500px, -200px);

        filter: drop-shadow(0px 0px 10px #ffffff);

        background-image: radial-gradient(
            farthest-corner at 250px 250px,
            #b4b0b0 0%,
            #64646400 80%
        );
        border-radius: 50%;
    }
`