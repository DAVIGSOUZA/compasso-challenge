import React, { useEffect } from 'react'
import axios from 'axios'
import { BASE_URL, client_id, client_secret } from '../../utils'
import useGlobalContext from '../../Context/GlobalContext'
import SearchBar from '../../components/SearchBar'
import UserInfo from '../../components/UserInfo'
import Logo from "../../components/Logo";
import Card from '../../components/Card'
import NavBar from '../../components/NavBar'
import { DefaultLayout } from "../../Layout/DefaultLayout";


const ProfilePage = () => {
  const { user, repos, setRepos, starred, setStarred, listToShow } = useGlobalContext()

  useEffect(() => {
    getRepos()
    getStarred()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <Card key={item.id} item={item}/>
    )
  })

  const starredList = starred.map(item => {
    return (
      <Card key={item.id} item={item}/>
    )
  })

  return (
    <DefaultLayout>
      <div className="container">
        <div className="row align-items-center pt-4 pb-md-5">
          <div className="col-12 col-md-1 d-flex justify-content-center">
            <Logo/>
          </div>
          <div className="col-12 col-md-8 mx-md-3 my-3 my-md-0 d-flex justify-content-center justify-content-md-start">
            <SearchBar/>
          </div>
        </div>
      </div>
      <div className="d-none d-md-block">
        <NavBar/> 
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="d-flex justify-content-center justify-content-md-start mb-3">
              <UserInfo/>
            </div>
            <div className="col-12 d-md-none">
              <NavBar/>
            </div>
          </div>
          <div className="col-12 col-md-8 mt-5 pt-3">
            <div className="row">
              {listToShow === 'repo' 
                ? reposList
                : starredList
              }
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default ProfilePage
