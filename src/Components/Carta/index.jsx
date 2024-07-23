import PropTypes from "prop-types";

const Carta = ({ destinatario, texto}) => {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-screen bg-gradient-to-br from-slate-600 to-slate-950 rounded-3xl p-4 sm:min-h-[calc(100vh-7rem)] select-none">
      <div className="text-white text-2xl text-center font-bold mb-9">
        Esta mensagem é para: {destinatario}
      </div>
      <div className="text-white text-2xl text-center">{texto}</div>
      <div className="absolute top-0 left-0 w-16 h-16 border-b-8 border-r-8 border-b-orange-500 border-r-orange-500 rounded-full"></div>
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
