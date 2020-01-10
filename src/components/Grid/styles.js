import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  height: 400px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
`;
export const Content = styled.table`
  width: 95%;
  padding: 12px;
  border-spacing: 0;
  thead {
    tr {
      text-align: left;
    }
  }
  tr {
    color: #666666;
    td {
      margin: 0;
      padding: 10px 0;
      border-bottom: 1px solid #979797;
      span {
        color: #4d85ee;
        font-size: 10px;
      }
      strong {
        font-weight: lighter;
        font-size: 10px;
        color: #de3b3b;
      }
    }
  }
`;
