import styled from 'styled-components';

export const MoviesListContainer = styled.ul`
  background-color: #e8fee8;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px 40px;
`;

export const MovieItem = styled.li`
  display: inline-block;
  margin: 20px;
  max-width: 250px;
  text-align: left;
`;
