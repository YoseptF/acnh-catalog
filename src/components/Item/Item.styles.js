import styled from 'styled-components';

const Item = styled.div`
  .featured{
    width: 100vw;
  }
  h1{
    text-align: center;
    color: black;
    text-transform: capitalize;
  }
`;

const Attribute = styled.div`
  .title,.value, h1{
    min-height: 7vh;
    color: white;
    text-align: center;
  }
  .title{
    font-size: 1.5rem;
    line-height: 2.7rem;
    font-family: 'Patua One', cursive;
    text-transform: capitalize;
    background: #4545f9;
  }
  .value{
    line-height: 23px;
    text-transform: capitalize;
    font-family: 'Roboto', cursive;
    background: #6464d2;
    &.long{
      text-align: justify;
      padding: 2rem;
    }
  }
`;

export { Item, Attribute };
