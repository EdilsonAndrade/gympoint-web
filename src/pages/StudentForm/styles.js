import styled, { keyframes } from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

const rotate = keyframes`
  from{
    transform: rotate(0deg)
  }
  to{
    transform: rotate(360deg)
  }
`;
export const Spinner = styled(FaSpinner)`
  animation: ${rotate} 2s linear infinite;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  justify-content: flex-start;
  padding: 20px;

  > label,
  input,
  div {
    width: 100%;
    > div {
      & + div {
        margin-left: 5px;
      }
    }
  }
  label,
  strong {
    font-size: 18px;
    margin-top: 15px;
    font-weight: bold;
    text-transform: uppercase;
  }
  input {
    padding: 15px;
    border: 1px solid #eee;
    border-radius: 4px;
    margin-top: 4px;
    margin-bottom: 12px;
    text-transform: uppercase;
  }
  span {
    text-align: left;
    color: #f49494;
    font-weight: bold;
  }
`;
