import { Swiper, SwiperSlide } from "swiper/react";
import Carta from "../Carta";
import SwipeHint from "../SwipeHint";
import PropTypes from "prop-types";
import "swiper/css";

import "swiper/css/effect-cards";

import { EffectCards, Keyboard, A11y } from "swiper/modules";
import { useEffect, useState } from "react";

function Baralho({ cartas }) {
  const [visible, setVisible] = useState(true);
  const [touchEnabled, setTouchEnabled] = useState(false);

  // Timer para desaparecer a SwipeHint
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTouchEnabled(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Swiper
      key={touchEnabled ? 'enabled' : 'disabled'}
      allowTouchMove={touchEnabled}
      rewind={true}
      effect="cards"
      grabCursor={true}
      modules={[EffectCards, Keyboard, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      a11y={{ enabled: true }}
      keyboard={{
        enabled: true,
      }}
    >
      {visible && (
        <SwiperSlide>
          <SwipeHint />
        </SwiperSlide>
      )}
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
