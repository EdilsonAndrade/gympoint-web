import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
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
      button#edit {
        color: #4d85ee;
        font-size: 12px;
        border: none;
        background: transparent;
      }
      button#delete {
        color: #de3b3b;
        font-size: 12px;
        border: none;
        background: transparent;
      }
    }
  }
`;
