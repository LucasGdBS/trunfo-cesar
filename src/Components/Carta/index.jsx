import PropTypes from "prop-types";
import classNames from "classnames";
import CardHeader from "../CardHeader";

const Carta = ({ destinatario, texto, className }) => {

  const colors = {
    LIDERADO: {
      underlineColor: "decoration-orange-500",
      bgColor: "bg-orange-500",
      borderColor: "border-orange-500",
      textColor: "text-white",
      emoji: "🎯",
    },
    LIDER: {
      underlineColor: "decoration-blue-500",
      bgColor: "bg-blue-500",
      borderColor: "border-blue-500",
      textColor: "text-white",
      emoji: "🧭",
    },
    COLEGA: {
      underlineColor: "decoration-green-500",
      bgColor: "bg-green-500",
      borderColor: "border-green-500",
      textColor: "text-white",
      emoji: "🤝",
    },
    DEFAULT: {
      underlineColor: "decoration-black",
      bgColor: "bg-black",
      borderColor: "border-black",
      textColor: "text-white",
      emoji: "🌟",
    },
  };

  if (typeof destinatario == "string") {
    destinatario = destinatario.toUpperCase();
  }
  const style = colors[destinatario] || colors["DEFAULT"];

  return (
    <div
      className={classNames(
        "flex flex-col items-center w-full h-full min-h-screen bg-gradient-to-br from-slate-600 to-slate-950 rounded-3xl p-4 py-16 sm:min-h-[calc(100vh-7rem)] select-none",
        className
      )}
    >
      {destinatario && (
        <div className="w-full flex justify-start">
          <CardHeader
            remetente={destinatario+" "+style["emoji"]}
            bgColor={style["bgColor"] }
            borderColor={style["borderColor"]}
            textColor={style["textColor"]}
            underlineColor={style["underlineColor"]}
          />
        </div>
      )}
      <div className="flex-grow flex items-center justify-center w-full">
        <div className="text-white text-2xl text-center ">{texto}</div>
      </div>
    </div>
  );
};

Carta.propTypes = {
  destinatario: PropTypes.string,
  texto: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Carta;
