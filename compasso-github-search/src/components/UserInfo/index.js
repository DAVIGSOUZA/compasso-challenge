import React from 'react'
import useGlobalContext from "../../Context/GlobalContext";
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, UserInfoContainer } from "./styles";


const UserInfo = () => {
  const { user } = useGlobalContext()
  
  return (
    <UserInfoContainer>
      <Avatar className="mx-2">
        <img src={ user.avatar_url } alt={`Foto de usuário de ${ user.name }`}/>
      </Avatar>
      <h2 className="mt-3 font-weight-bold"> { user.name } </h2>
      <h3 className="text-muted"> { user.login } </h3>
      <h4>
        <a href={ user.html_url } target="_blank" rel="noreferrer"> ver no github </a>
      </h4>
      <div className="mt-3">
        <span>
          <FontAwesomeIcon icon={ faUserFriends }/>
        </span>
        <span> { user.followers } seguidores · { user.following } seguindo</span>
      </div>
    </UserInfoContainer>
  )
}

export default UserInfo
