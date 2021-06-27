import styled from "styled-components";

export const NavBarContainer = styled.nav`
  position: absolute;
  width: 100%;
  border-bottom: 1px solid gray;
  button {
    padding: 10px;
    border: none;
    background: none;
  }
  button:hover {
    border-bottom: 2px solid gray;
    color: lightgray !important;
  } 
  @media (max-width: 420px) {
    width: 80%;
  }   
`

export const ActiveTab = styled.button`
  padding: 10px;
  border: none;
  background: none;
  border-bottom: 2px solid #F2AE2E !important;
  color: lightgray !important;

`
