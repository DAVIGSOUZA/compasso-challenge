import React, { useState, useContext } from 'react'

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {
  const [searchedUser, setSearchedUser] = useState('')
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [starred, setStarred] = useState([])

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
        setStarred
      }
    }>
      {children}
    </GlobalContext.Provider>
  )
}

export default function useGlobalContext() {
  const data = useContext(GlobalContext)
  const { searchedUser, setSearchedUser, user, setUser, repos, setRepos, starred, setStarred } = data
  return { searchedUser, setSearchedUser, user, setUser, repos, setRepos, starred, setStarred }
}