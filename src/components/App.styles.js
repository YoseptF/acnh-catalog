import styled from 'styled-components';

const Filter = styled.nav`
  display: flex;
  align-items: center;
  background: #219eef;
  height: 10vh;
  position: sticky;
  top:0;
  z-index: 100;
  padding: 0 20px;
  /* transition: all 100ms ease-in-out; */
  a{
    img{
    height: 32px;
  }
  }
  &.hidden{
    top: -100px;
  }
`;

const Item = styled.div`
  .featured{
    width: 100vw;
  }
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

export { Filter, Item };
