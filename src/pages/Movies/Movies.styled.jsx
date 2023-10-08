import styled from 'styled-components';

export const SearchContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 300px;
`;

export const SearchButton = styled.button`
  background-color: #0077ff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin-left: 10px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0055cc;
  }
`;
