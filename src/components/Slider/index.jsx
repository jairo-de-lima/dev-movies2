import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../Card';

function Slider({ info, title, type }) {
  const navigate = useNavigate();

  const DetailNavigation = (id) => {
    let route = '';
    if (type === 'movie') {
      route = `/detalhe/${id}`;
    } else if (type === 'series') {
      route = `/serie/detalhe/${id}`;
    } else if (type === 'person') {
      route = `/person/${id}`;
    } else {
      alert('Tipo de item não reconhecido');
      return;
    }
    navigate(route);
  };

  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        grabCursor
        spaceBetween={10}
        slidesPerView={"auto"}
        className="swiper"
      >
        {info.map((item, index) => (
          <SwiperSlide key={index} onClick={() => DetailNavigation(item.id)}>
            <Card item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default Slider;
