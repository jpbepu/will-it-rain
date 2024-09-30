import styled from "styled-components";
import { isDay } from "../../containers/BlurContainer/style";



export const Text = styled.div<isDay>`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 200px;
    width:100vw;
    z-index: 5;




    h1{
        font-size: 80px;
        margin: 0 5vw;
        color: ${(props) => props.isDay === 0? 'white' : '#252525'};
        
        @media screen and (max-width: 500px) {
            font-size: 15vw;
        }
    }

    animation-name: fadeIn;
    animation-duration: 500ms;
    animation-fill-mode: both;

    @keyframes fadeIn {
        from {
            transform: translateY(20px);
            opacity: 0%;
        }

        to{
            transform: translateY(0);
            opacity: 100%;
        }
    }


`