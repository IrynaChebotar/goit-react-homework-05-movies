import styled from 'styled-components';

export const MoviesListContainer = styled.div`
  text-align: center;
`;

export const MovieItem = styled.li`
  display: inline-block;
  margin: 20px;
  max-width: 250px;
  text-align: left;
`;

export const MovieImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const MovieTitle = styled.p`
  font-size: 18px;
  margin: 10px 0;
  font-weight: bold;
`;

export const ReleaseDate = styled.p`
  font-size: 14px;
  color: #776c78;
`;
