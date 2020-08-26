import { createGlobalStyle } from 'styled-components';
import keysCrossed from '../images/keys-crossed.svg';

export default createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  outline: 0;
  box-sizing: border-box;
   }

   body {
     background: #1B2432 url(${keysCrossed}) no-repeat;
     -webkit-font-smoothing: antialiased;

   }
  
   body, button {
     font: 16px Roboto, sans-serif;
   }

   #root {
     max-width: 960px;
     margin: 0 auto; 
     padding: 40px 20px;
   }

   button {
     cursor: pointer;
   }
`;
