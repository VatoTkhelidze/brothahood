import { createGlobalStyle } from "styled-components";
import  Najgabni  from "./assets/fonts/3d_unicode.ttf";



const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Najgabni';
    src: url(${Najgabni}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;


export default GlobalStyles;