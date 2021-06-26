import React, { useEffect } from 'react'
import axios from 'axios'
import SearchBar from '../../components/SearchBar'
import useGlobalContext from "../../Context/GlobalContext";
import { BASE_URL, client_id, client_secret } from "../../utils";

const ProfilePage = () => {
  const { user, repos, setRepos, starred, setStarred } = useGlobalContext()

  useEffect(() => {
    getRepos()
    getStarred()
  }, [user])

  const getRepos = () => {
    axios.get(`${BASE_URL}/${user.login}/repos?client_id=${client_id}&client_secret=${client_secret}`)
      .then(res => setRepos(res.data))
    }

  const getStarred = () => {
    axios.get(`${BASE_URL}/${user.login}/starred?client_id=${client_id}&client_secret=${client_secret}`)
    .then(res => setStarred(res.data))
  }

  const reposList = repos.map(item => {
    return (
      <div>
        <h3> { item.name } </h3>
      </div>
    )
  })

  const starredList = starred.map(item => {
    return (
      <div>
        <h3> { item.name } </h3>
      </div>
    )
  })
  
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
          <h3> { user.name } </h3>
          <p>seguidores . seguindo</p>
        </div>
        <div>
          <div>
            <h2> Repositórios </h2>
            <div>
              {reposList}
            </div>
            <h2> Starred </h2>
            <div>
              {starredList}
            </div>
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
