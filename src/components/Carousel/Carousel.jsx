/*import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import './Carousel.css';

const Carousel = ({ data, renderComponent }) => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={16}
      slidesPerView="auto"
      navigation
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          {renderComponent(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
*/


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Carousel.css';
import LeftNavButton from './LeftNavButton';
import RightNavButton from './RightNavButton';

function Carousel({ items, renderItem }) {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{renderItem(item)}</SwiperSlide>
        ))}
      </Swiper>
      <LeftNavButton />
      <RightNavButton />
    </div>
  );
}

export default Carousel;