import React, { useEffect } from 'react'
import { requestData } from "../../utils/request";
import useGlobalContext from '../../Context/GlobalContext'
import SearchBar from '../../components/SearchBar'
import UserInfo from '../../components/UserInfo'
import Logo from "../../components/Logo";
import Card from '../../components/Card'
import NavBar from '../../components/NavBar'
import { DefaultLayout } from "../../Layout/DefaultLayout";


const ProfilePage = () => {
  const { user, repos, setRepos, starred, setStarred, listToShow, error } = useGlobalContext()

  useEffect(() => {
    if (user && user.id) {
      getRepos()
      getStarred()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const getRepos = () => {
    const promise = requestData(`${user.login}/repos`)
    promise.then(res => setRepos(res))
  }

  const getStarred = () => {
    const promise = requestData(`${user.login}/starred`)
    promise.then(res => setStarred(res))
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
      { user && user.id ?
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
                  ? repos.length 
                    ? reposList
                    : <p className="text-muted mt-5"> Este usuário não possui repositórios públicos </p>
                  : starred.length
                    ? starredList
                    : <p className="text-muted mt-5"> Este usuário não possui uma starred list</p>
                }
              </div>
            </div>
          </div>
        </div>
        :
        <div className="container d-flex flex-column justify-content-center align-items-center mt-5 pt-5">
          <p className="text-muted"> { error }</p>
        </div>

      }
    </DefaultLayout>
  )
}

export default ProfilePage
