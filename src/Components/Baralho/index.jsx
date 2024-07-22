import PropTypes from "prop-types";
import { useState } from 'react';
import Carta from '../Carta';

const Baralho = ({ cartas }) => {
  const [cards, ] = useState(cartas);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleSwipeLeft = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handleSwipeRight = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div>
      <Carta
        destinatario={cards[currentCardIndex].destinatario}
        texto={cards[currentCardIndex].texto}
        onSwipeLeft={handleSwipeLeft}
        onSwipeRight={handleSwipeRight}
      />
    </div>
  );
};

Baralho.propTypes = {
  cartas: PropTypes.arrayOf(
    PropTypes.shape({
      destinatario: PropTypes.string.isRequired,
      texto: PropTypes.string.isRequired,
    })
  ),
}

export default Baralho;


