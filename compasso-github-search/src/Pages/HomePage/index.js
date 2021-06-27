import SearchBar from '../../components/SearchBar'
import { DefaultLayout } from "../../Layout/DefaultLayout";
import Logo from "../../components/Logo";
import { Title } from "./styles";


const HomePage = () => {
  
  return (
    <DefaultLayout>
      <div className="container d-flex flex-column align-items-center justify-content-center p-5">
        <div className="d-flex align-items-center mt-5">
          <Logo/>
          <Title className="m-2">
            Compasso Github Search
          </Title>
        </div>
        <div className="mt-5">
          <SearchBar/>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default HomePage
