import React from 'react'
import axios from 'axios'
import { BASE_URL, client_id, client_secret } from "../../utils";
import useGlobalContext from "../../Context/GlobalContext";
import { goToProfilePage } from "../../Routes/coordinators";
import { useHistory } from 'react-router';

const SearchBar = () => {
  const { searchedUser, setSearchedUser, setUser } = useGlobalContext()
  const history = useHistory()

  const getUser = () => {
    axios.get(`${BASE_URL}/${searchedUser}?client_id=${client_id}&client_secret=${client_secret}`)
    .then(res => {
      setUser(res.data)
      goToProfilePage(history, res.data.id)
      setSearchedUser('')
    })
    .catch(err => alert(`${err}: Tente inserir um usuário válido`))
  }

  return (
    <div>
      <input 
        type="search" 
        placeholder="Digite um nome de usuário..." 
        value={searchedUser} 
        onChange={ e => setSearchedUser(e.target.value)}
      />
      <button onClick={ () => getUser() }>
        Buscar
      </button>
    </div>
  )
}

export default SearchBar