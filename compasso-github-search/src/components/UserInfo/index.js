import React from 'react'
import useGlobalContext from "../../Context/GlobalContext";
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar } from "./styles";


const UserInfo = () => {
  const { user } = useGlobalContext()
  
  return (
    <div>
      <Avatar className="mx-2">
        <img src={ user.avatar_url } alt={`Foto de usuário de ${ user.name }`}/>
      </Avatar>
      <h2 className="mt-3"> { user.name } </h2>
      <h3 className="text-muted"> { user.login } </h3>
      <div>
        <FontAwesomeIcon icon={ faUserFriends }/>
        <span> { user.followers } seguidores · { user.following } seguindo</span>
      </div>
    </div>
  )
}

export default UserInfo
