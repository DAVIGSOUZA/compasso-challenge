import SearchBar from '../../components/SearchBar'
import useGlobalContext from "../../Context/GlobalContext";



import React from 'react'
import axios from 'axios'
import { BASE_URL, client_id, client_secret } from "../../utils";
import { goToProfilePage } from "../../Routes/coordinators";
import { useHistory } from 'react-router';



const ProfilePage = () => {
  const { user } = useGlobalContext()
  
  return (
    <div>
      <div>
        logo
      </div>
      <SearchBar/>
      <div>
        <div>
          <h2> side bar </h2>
          <img src="" alt="profile pic" />
          <h3>user name</h3>
          <p>seguidores . seguindo</p>
        </div>
        <div>
          <div>
            <p> Repositórios </p>
            <p> Starred </p>
          </div>
          <div>
            <p> api return content </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
