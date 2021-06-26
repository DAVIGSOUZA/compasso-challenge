import SearchBar from '../../components/SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const HomePage = () => {
  
  return (
    <div>
      <h1>
        Compasso Github Search
      </h1>
      <SearchBar/>
      <FontAwesomeIcon icon={faCoffee} />
    </div>
  )
}

export default HomePage
