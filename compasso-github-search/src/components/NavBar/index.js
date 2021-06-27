import { useEffect } from 'react';
import useGlobalContext from '../../Context/GlobalContext'
import { NavBarContainer, ActiveTab } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faStar } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  const { listToShow, setListToShow } = useGlobalContext()

  useEffect(() => {
    activeTab()
  }, [listToShow])

  const activeTab = () => {
    if (listToShow === 'repo') {
      return (
        <div>
          <ActiveTab className="text-muted" onClick={() => setListToShow('repo')}>
            <FontAwesomeIcon icon={ faBook } className="mx-1"/>
            Repositórios
          </ActiveTab>
          <button className="text-muted" onClick={() => setListToShow('starred')}>
            <FontAwesomeIcon icon={ faStar } className="mx-1"/>
            Starred
          </button>
        </div>
      )
    } else {
      return (
        <div>
          <button className="text-muted" onClick={() => setListToShow('repo')}>
            <FontAwesomeIcon icon={ faBook } className="mx-1"/>
            Repositórios
          </button>
          <ActiveTab className="text-muted" onClick={() => setListToShow('starred')}>
            <FontAwesomeIcon icon={ faStar } className="mx-1"/>
            Starred
          </ActiveTab>
      </div>
      )
    }
  }
  
  return (
    <NavBarContainer className="d-flex justify-content-center">
      { activeTab() }
    </NavBarContainer>
  )
}

export default NavBar