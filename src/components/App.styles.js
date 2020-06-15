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

export { Filter };
