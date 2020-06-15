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
width: 100%;
input{
  margin-left: 24px;
  background: none;
  border: none;
  border-bottom: 1px solid white;
  color: white;
  font-size: 1.5rem;
  max-width: 250px;
  &:focus{
    outline: none;
  }
  &::placeholder{
    color: white;
  }
}
a{
  img{
  height: 32px;
}

}
&.hidden{
  top: -100px;
}
`;

const Loader = styled.div`
  width:100%;
  height: 100vh;
  max-width: 800px;
  position:absolute;
  background: ${`hsla(${360 * Math.random()}, 70%, 50%, 1)`};
  z-index: 101;
  visibility: ${props => (props.hidden ? 'hidden' : 'visible')};
  h1{
    position: absolute;
    left: 50%;
    top: 75%;
    transform: translate(-50%,-75%);
    font-family: 'Patua One', cursive;
    background-color: white;
    color: black;
  }
  img{
    position: absolute;
    left: 50%;
    top: 50%;
    animation: jumping 500ms ease-in-out 0s infinite normal none;
  }
  @keyframes jumping {
    0%{
        transform: translate(-50%,-50%);
    }
    50%{
        transform: translate(-50%,-40%);
    }
    100%{
        transform: translate(-50%,-50%);
    }
}
`;

const Credits = styled.div`
`;

export { Filter, Loader, Credits };
