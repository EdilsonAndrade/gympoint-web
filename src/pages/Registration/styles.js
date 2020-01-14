import styled from 'styled-components';

export const Status = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #dddd;
  color: #42cb59;
  background: ${props => (props.active ? '#42cb59' : '#dddd')};
  display: flex;
  justify-content: center;
  align-items: center;
  tr {
    td {
      span {
      }
    }
  }
`;

export const Actions = styled.p`
  font-size: 15px;
  color: ${props => (props.delete ? '#de3b3b' : '#4d85ee')};
`;
