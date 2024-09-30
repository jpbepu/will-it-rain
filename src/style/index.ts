import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Archivo", sans-serif;

        list-style: none;

    }

    .loading-screen{
        width: 100vw;
        height: 100vh;
        display: flex;
        background-color: #0e0e0eef;
        filter: grayscale(100%);
        align-items: center;
        justify-content: center;
        position: absolute;
    }

    .loader {
        width: 120px;
        height: 120px;
        border: 10px solid #FFF;
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
    }

        
    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    } 

`


export default GlobalStyle