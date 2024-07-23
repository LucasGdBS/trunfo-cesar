import PropTypes from "prop-types";

const Carta = ({ destinatario, texto}) => {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-screen bg-gradient-to-r from-green-400 to-green-600 rounded-3xl p-4 sm:min-h-[calc(100vh-7rem)] select-none">
      <div className="text-white text-2xl text-center font-bold mb-9">
        Esta mensagem é para: {destinatario}
      </div>
      <div className="text-white text-2xl text-center">{texto}</div>
    </div>
  );
};

Carta.propTypes = {
  destinatario: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  onSwipeLeft: PropTypes.func,
  onSwipeRight: PropTypes.func,
};

export default Carta;
