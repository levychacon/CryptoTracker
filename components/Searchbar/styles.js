import styled from "styled-components";

export const SearchInputWrapper = styled.div`
  margin-bottom: 64px;
  display: flex;
  align-items: center;
  width: 300px;
`;
export const SearchInput = styled.input`
  background: #222531;

  border: none;
  padding: 16px;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  outline: none;

  &::placeholder {
    color: #e2e2e2;
  }
`;
