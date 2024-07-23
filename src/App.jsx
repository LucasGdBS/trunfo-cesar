import Container from "./Components/Container"
import Baralho from "./Components/Baralho";
import cards from "../cards.json";
import Informacao from "./Components/Informacao";

function App() {
  const cartas = cards

  return (
    <>
      <Container>
        <Baralho cartas={cartas}/>
        <Informacao />
      </Container>
    </>
  )
}

export default App
