import PropTypes from 'prop-types';

const Carta = ({ texto }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-center h-full max-w-sm w-full bg-gradient-to-r from-green-400 to-green-600 rounded-3xl p-4">
        <div className="text-white text-2xl">
          {texto}
        </div>
      </div>
    </div>
  );
};

Carta.propTypes = {
  texto: PropTypes.string.isRequired,
};

export default Carta;