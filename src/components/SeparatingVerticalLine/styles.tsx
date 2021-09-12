import styled from 'styled-components';
import { dark } from '../../styles/themes/index';

const Line = styled.div`
  border-left: 5px solid ${dark.primary1};
  filter: brightness(0.7);
  height: 400px;
  margin: 0 50px;
`;

export default Line;
