import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0 ;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;

}

body { 
    display: flex;
    align-items: center;
    justify-content: center;
    place-items: center;
    min-height: 100vh;
    

    background-color: #333333;
    color: #BCBCBC;
}
`;
