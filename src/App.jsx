import Container from "./Components/Container"
import Baralho from "./Components/Baralho";
import cards from "../cards.json";
import Informacao from "./Components/Informacao";

function App() {

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
    }
    return array;
  }

  const cartas = shuffleArray(cards)

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
