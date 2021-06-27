import React, { useState, useContext } from 'react'

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {
  const [searchedUser, setSearchedUser] = useState('')
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [starred, setStarred] = useState([])
  const [listToShow, setListToShow] = useState('repos')

  return(
    <GlobalContext.Provider value={
      { 
        searchedUser,
        setSearchedUser,
        user,
        setUser,
        repos,
        setRepos,
        starred,
        setStarred,
        listToShow,
        setListToShow
      }
    }>
      {children}
    </GlobalContext.Provider>
  )
}

export default function useGlobalContext() {
  const data = useContext(GlobalContext)
  const { searchedUser, setSearchedUser, user, setUser, repos, setRepos, starred, setStarred, listToShow, setListToShow } = data
  return { searchedUser, setSearchedUser, user, setUser, repos, setRepos, starred, setStarred, listToShow, setListToShow }
}