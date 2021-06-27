import styled from "styled-components";

export const SearchWrapper = styled.div`
  width: 400px;
  max-height: 36px;
  @media (max-width: 420px) {
    width: 260px;
  }     
`

export const SearchInput = styled.input`
  width: 100%;
  background: none;
  border-radius: 4px;
  border: 1px gray solid;
  
`

export const SearchButton = styled.button`
  border: none;
  background: none;
`