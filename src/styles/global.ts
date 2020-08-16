import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  outline: 0;
  box-sizing: border-box;
   }

   body {
     background-color: #ea3f2d;
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
