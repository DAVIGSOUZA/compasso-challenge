import React, { useState, useContext, createContext } from 'react'

const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [starred, setStarred] = useState([])
  const [listToShow, setListToShow] = useState('repo')

  return(
    <GlobalContext.Provider value={
      { 
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
  const { user, setUser, repos, setRepos, starred, setStarred, listToShow, setListToShow } = data
  return { user, setUser, repos, setRepos, starred, setStarred, listToShow, setListToShow }
}