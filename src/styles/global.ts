import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', serif;
        --swiper-pagination-color: ${({ theme }) => theme.COLORS.PRIMARY_MAIN};
    }
    
    body{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.WHITE};
        -webkit-font-smoothing: antialiased;
        font-family: 'Roboto', serif;
    }

    body, input, textarea, button {
        font-size: 16px;
        outline: none;
    }

    a{
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }
`