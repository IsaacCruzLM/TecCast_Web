import styled from 'styled-components';
import { dark } from '../../styles/themes/index';

const LineContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${dark.primary1};
  width: 100%;
  margin: 40px 0;
  
  div {
    border-bottom: 2px solid ${dark.primary1};
    filter: brightness(0.7);
    width: 100%;
  }

  span {
    font-weight: 700;
    font-size: 14px;
    margin: 0 10px;
  }
`;

export default LineContainer;
