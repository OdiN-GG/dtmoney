import { createGlobalStyle} from 'styled-components';

export const GlobalStyled = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --grenn: #33CC95;
        --red: #E52E4D;
        --blue: #5429FF;

        --blue-light: #6933FF;

        --text-title: #363F5F;
        --text-body: #969CB3;

        --shape: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93,75%; // 15px
        }

        @media (max-width: 720px){
            font-size: 85,5% //15px
        }
    }

    body {
        background: var(--background);
        --webkit-font-smoothing: antialised;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400; // tirar fonte padrão de 500
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-family: 600; 
    }

    button {
        cursor: pointer;
    }
    
    [display] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`