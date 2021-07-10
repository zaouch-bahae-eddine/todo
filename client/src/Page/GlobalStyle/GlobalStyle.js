import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/roboto-v27-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/src/font/roboto-v27-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/src/font/roboto-v27-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/src/font/roboto-v27-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/src/font/roboto-v27-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/src/font/roboto-v27-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */
  }
  body {
    margin: 0;
    padding: 0;
    background: #f9f8ff;
    font-family: 'Roboto', Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;