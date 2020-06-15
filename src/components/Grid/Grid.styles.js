import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: calc(33.333vh - 5px);
  grid-gap: 8px;
  background-color: #02305d;
  color: #8a8abf;
`;

const GridItem = styled.div`
  font-size: 1rem;
  color: white;
  position: relative;
  font-family: 'Roboto', sans-serif;
  h1{
    text-align: center;
    font-weight: bold;
    font-family: 'Patua One', cursive;
    background-color: white;
    color: black;
    position: absolute; 
    left: 50%;
    top: 100%;
    transform: translate(-50%,-100%);
    font-size: ${props => {
    const title = props.title.split('');
    const titleTooLong = title.includes(' ') || title.length > 10;
    return titleTooLong ? '1.2rem' : '2rem';
  }};
  }
  img{
    
    position: absolute; 
    left: 50%;
    top: 35%;
    transform: translate(-50%,-35%);
    background-color: ${props => props.colors[0]};
    color: ${props => props.colors[1]};
    height: 70%;
    border-radius: 5px;
    border: 2px solid #65b2ff;
  }
`;

export { Grid, GridItem };
