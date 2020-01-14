import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  justify-content: flex-start;
  padding: 20px;

  > label,
  select {
    width: 100%;
  }

  > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    > div {
      width: 25%;
      margin-right: 5px;
    }
  }
  select {
    flex: 1;
    padding: 10px;
    border: 1px solid #eee;
    background: #fff;
  }
  label,
  strong {
    font-size: 18px;
    margin-top: 15px;
    font-weight: bold;
    text-transform: uppercase;
  }
  input {
    padding: 10px;
    border: 1px solid #eee;
  }
  > div {
    display: flex;
    align-items: center;
    label {
      position: block;
    }
    > div {
      display: flex;
      flex-direction: column;
    }
  }

  input[name='total'] {
    background: #e6e6e6;
  }
  input#enddate {
    background: #e6e6e6;
  }
`;
export default Content;
