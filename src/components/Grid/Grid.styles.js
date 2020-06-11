import styled, { createGlobalStyle } from 'styled-components';

const global = createGlobalStyle`
  body{
    background: red;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 33.33vh;
  grid-gap: 8px;
`;

const GridItem = styled.div`
  font-size: 1rem;
  color: white;
  position: relative;
  font-family: 'Roboto', sans-serif;
  h1{
    font-weight: bold;
    /* width: fit-content; */
    -webkit-text-stroke: 0.01px white;
    font-size: 1.5rem;
    font-family: 'Patua One', cursive;
    /* background: linear-gradient(0deg, rgba(0,0,0,0) 20%, rgba(0,0,0,0.65) 50%, rgba(255,255,255,0) 60%); */
  }
  img,h1{
    position: absolute; 
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  img{
    background-color: ${props => props.colors[0]};
    color: ${props => props.colors[1]};
    height: 70%;
    border-radius: 5px;
    border: 2px solid #65b2ff;
  }
`;

export { Grid, GridItem, global };
