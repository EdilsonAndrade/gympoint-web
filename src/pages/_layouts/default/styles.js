import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: #f2f2f2;
`;
export const Container = styled.div``;

export const Content = styled.div`
  max-width: 85%;
  margin: 35px auto;
  strong {
    font-size: 24px;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      padding: 6px 9px;
      border-radius: 4px;
      border: none;
    }
  }
`;
