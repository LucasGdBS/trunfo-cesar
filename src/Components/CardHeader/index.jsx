import PropTypes from "prop-types";
import classNames from "classnames";

function CardHeader({
  remetente,
  underlineColor = "decoration-black",
  textColor = "text-white",
  bgColor = "bg-black",
  borderColor = "border-black",
}) {
  return (
    <div>
      <div>
        <p
          className={classNames(
            "underline decoration-double underline-offset-8 font-bold text-xl",
            underlineColor,
            textColor
          )}
        >
          Esta mensagem é para:
        </p>
      </div>
      <div className={classNames("relative m-5 rounded-md", bgColor)}>
        <p className={classNames("text-center font-bold text-2xl", textColor)}>
          {remetente}
        </p>
        <div
          className={classNames(
            "absolute top-0 left-0 right-0 h-2 rounded-t-lg -mt-1 border",
            borderColor
          )}
        ></div>
      </div>
    </div>
  );
}

CardHeader.propTypes = {
  remetente: PropTypes.string.isRequired,
  underlineColor: PropTypes.string,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
  borderColor: PropTypes.string,
};

export default CardHeader;
