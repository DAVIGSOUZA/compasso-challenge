import styled from "styled-components";

export const UserInfoContainer = styled.div`
  h2 {
    color: lightgray
  }
  span {
    color: lightgray
  }
`

export const Avatar = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid gray;
  border-radius: 50%;
  background-color: #0D1017;
  img {
    border-radius: 50%;
    width: 100%;
    object-fit: cover;
  }
`