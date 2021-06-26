import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL, client_id, client_secret } from "../../utils";
import useGlobalContext from "../../Context/GlobalContext";
//components
import SearchBar from '../../components/SearchBar'
import UserInfo from '../../components/UserInfo'
//fontawesome

const ProfilePage = () => {
  const { user, repos, setRepos, starred, setStarred } = useGlobalContext()
  const [listToShow, setListToShow] = useState('repos')

  useEffect(() => {
    getRepos()
    getStarred()
  }, [user, listToShow])

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
    <div className="container">
      <div className="d-flex m-3">
        <div>
          logo
        </div>
        <SearchBar/>
      </div>
      <div className="row">
        <div className="col-4">
          <UserInfo/>
        </div>
        <div className="col-8">
          <nav>
            <button onClick={() => setListToShow('repo')}>
              Repositórios
            </button>
            <button onClick={() => setListToShow('starred')}>
              Starred
            </button>
          </nav>
          <div className="row">
            {listToShow === 'repo' 
              ? reposList
              : starredList
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
