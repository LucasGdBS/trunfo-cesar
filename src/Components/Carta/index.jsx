import PropTypes from "prop-types";
import classNames from "classnames";
import CardHeader from "../CardHeader";

const Carta = ({ destinatario, texto, className }) => {
  return (
    <div
      className={classNames(
        "flex flex-col items-center w-full h-full min-h-screen bg-gradient-to-br from-slate-600 to-slate-950 rounded-3xl p-4 py-16 sm:min-h-[calc(100vh-7rem)] select-none",
        className
      )}
    >
      {destinatario && (
        <div className="w-full flex justify-start">
          <CardHeader remetente={destinatario}/>
        </div>
      )}
      <div className="flex-grow flex items-center justify-center w-full">
        <div className="text-white text-2xl text-center ">{texto}</div>
      </div>
    </div>
  );
};

Carta.propTypes = {
  destinatario: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Carta;
