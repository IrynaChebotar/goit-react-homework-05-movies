import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AddInform = styled.ul`
  padding: 0;
  list-style: none;
`;
export const InformItems = styled.li`
  text-align: center;
  text-decoration: none;
  width: 70px;
  font-size: 16px;

  font-weight: 400;
  background-color: rgba(235, 186, 107, 0.3);
  border-radius: 15px;
  padding: 4px 6px;
  margin-bottom: 15px;
`;

export const BackLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #0077ff;
  font-weight: 700;
  margin-bottom: 20px;

  svg {
    margin-right: 5px;
  }
`;
