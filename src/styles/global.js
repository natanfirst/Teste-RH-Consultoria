import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    a{
        text-decoration: none;
    }

    #main{
        width: 100%;
        height: 100vh;

        @media(max-width: 768px){
        }
    }

    #content{
        width: 100%;
        height: 100%;
    }

    /* body, input, button {
        font: 14px sans-serif;
    } */


`;
