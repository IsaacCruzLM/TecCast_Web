import styled from 'styled-components';
import { dark } from '../../styles/themes/index';

const Container = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${dark.background};
  justify-content: center;

  img {
    width: 300px;
    height: 300px;
    margin: 50px
  }
`;

export default Container;
