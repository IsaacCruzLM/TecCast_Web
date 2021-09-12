import styled from 'styled-components';
import { dark } from '../../styles/themes/index';

export const Container = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    width: 400px;
    height: 50px;
    border-radius: 7px;
    background-color: transparent;
    border: 3px solid ${dark.primary2};
    margin: 15px 0;
    font-size: 18px;
    padding: 0 0 0 10px;
    color: ${dark.primary0};

    &:focus {
      border: 3px solid ${dark.secondary0};
    }
  }

  button {
    background-color: ${dark.secondary1};
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    font-weight: 700;
    color: ${dark.primary0};
    margin: 15px 0;

    &:hover {
      background-color: ${dark.secondary2};
    }
  }
`;

export const RegisterContainer = styled.div`
  font-size: 22px;
  color: ${dark.primary1};

  span {
    color: ${dark.secondary1};
    text-decoration: underline;
    margin-left: 20px;

    &:hover {
      cursor: pointer;
      color: ${dark.secondary2}
    }
  }
`;
