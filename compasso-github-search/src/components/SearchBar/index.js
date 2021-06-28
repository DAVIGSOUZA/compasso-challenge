import React, { useEffect, useState } from 'react'
// import { api } from "../../utils/request";
// import { client_id, client_secret } from "../../utils";
import useGlobalContext from "../../Context/GlobalContext";
import { goToProfilePage } from "../../Routes/coordinators";
import { useHistory, useParams } from 'react-router';
import { SearchWrapper, SearchInput, SearchButton } from "./styles";
import { requestData } from "../../utils/request";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchBar = () => {
  const { setUser } = useGlobalContext()
  const [searchedUser, setSearchedUser] = useState('')
  const history = useHistory()

  const { userName } = useParams()

  useEffect(() => {
    if ( userName !== undefined) {
      getUser()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName])

  const getUser = () => {
    const promise = requestData(`${searchedUser.length ? searchedUser : userName}`)
    promise.then(res => {
      setUser(res)
      goToProfilePage(history, res.login)
      setSearchedUser('')
    }).catch(err => alert(`${err}: Tente inserir um usuário válido`))

    // api.get(`/${searchedUser.length ? searchedUser : userName}?client_id=${client_id}&client_secret=${client_secret}`)
    // .then(res => {
    //   console.log(res.data)
    //   setUser(res.data)
    //   goToProfilePage(history, res.data.login)
    //   setSearchedUser('')
    // })
    // .catch(err => alert(`${err}: Tente inserir um usuário válido`))
  }

  return (
    <SearchWrapper className="d-flex">
      <SearchInput 
        type="search" 
        placeholder="Digite um nome de usuário..." 
        value={searchedUser} 
        onChange={ e => setSearchedUser(e.target.value)}
        className="text-muted bg-none p-1"
        onKeyDown={ (e) => e.key === 'Enter' ? getUser() : null }
      />
      <SearchButton className="text-muted mx-1 p-1" onClick={ () => getUser() }>
          <FontAwesomeIcon icon={ faSearch }/>
      </SearchButton>
    </SearchWrapper>
  )
}

export default SearchBar