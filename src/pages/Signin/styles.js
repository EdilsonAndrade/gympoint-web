import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  background: #ee4d64;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    width: 360px;
    height: 448px;
    border-radius: 4px;

    img {
      margin: 40px 0;
    }

    button {
      padding: 15px;
      width: 300px;
      background: #ee4d64;
      border: none;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      border-radius: 4px;
      transition: 1s;
      &:hover {
        background: ${lighten(0.2, '#ee4d64')};
      }
    }
  }
  strong {
    font-size: 13px;
    color: #444444;
  }
  input {
    margin: 8px 0;
    border: 2px solid #eee;
    padding: 8px;
    border-radius: 4px;
    font-size: 12px;
    width: 300px;
    height: 45px;
  }
`;

export const Email = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Password = styled.div`
  display: flex;
  flex-direction: column;
`;
