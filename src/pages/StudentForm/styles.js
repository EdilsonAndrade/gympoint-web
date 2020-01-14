import styled from 'styled-components';

const Content = styled.div`
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
  }
`;
export default Content;
