import styled from 'styled-components';

const Status = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #dddd;
  color: #42cb59;
  background: ${props => (props.active ? '#42cb59' : '#dddd')};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Status;
