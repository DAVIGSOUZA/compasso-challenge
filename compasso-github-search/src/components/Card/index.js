import { CardContainer } from "./styles";

const Card = ({ item }) => {
  
  return (
    <CardContainer className="col-12 my-3">
      <a href={item.svn_url} target="_blank" rel="noreferrer">
        <h3> { item.name } </h3>
      </a>
      <p className="text-muted"> { item.description } </p>
    </CardContainer>
  )
}

export default Card