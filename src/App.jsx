import Container from "./Components/Container"
import Baralho from "./Components/Baralho";
import cards from "../cards.json";

function App() {
  const cartas = cards

  return (
    <>
      <Container>
        {/* <Baralho cartas={cartas} /> */}
        <Baralho cartas={cartas}/>
      </Container>
    </>
  )
}

export default App
