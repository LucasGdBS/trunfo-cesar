import { Swiper, SwiperSlide } from "swiper/react";
import Carta from "../Carta";
import PropTypes from "prop-types";
import "swiper/css";

import "swiper/css/effect-cards";

import { EffectCards, Keyboard, A11y } from "swiper/modules";

function Baralho({ cartas }) {
  return (
    <Swiper
      rewind={true}
      effect="cards"
      grabCursor={true}
      modules={[EffectCards, Keyboard, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      a11y={{enabled: true}}
      keyboard={{
        enabled: true,
      }}
    >
      {cartas.map((carta, index) => (
        <SwiperSlide key={index}>
          <Carta destinatario={carta.destinatario} texto={carta.texto} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

Baralho.propTypes = {
  cartas: PropTypes.array.isRequired,
};

export default Baralho;
