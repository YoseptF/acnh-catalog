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

const Loader = styled.div`
  width:100vw;
  height: 100vh;
  position:fixed;
  background: ${`hsla(${360 * Math.random()},70%,50%,0.8)`};
  z-index: 100;
  visibility: ${props => (props.hidden ? 'hidden' : 'visible')};
  position: relative;
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

export { Filter, Loader };
