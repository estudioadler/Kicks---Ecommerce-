import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface Shoe {
  id: number;
  name: string;
  price: number | null;
  imageUrl: string;
}

interface CardShoesProps {
  shoes: Shoe[];
}

export const CardShoes = ({ shoes }: CardShoesProps) => {
  console.log(shoes);

  // Verifica se a largura da tela é menor que 520 pixels
  const isMobile = window.innerWidth < 520;

  // Se for menor que 520, renderiza 4 cards sem o carrossel
  if (isMobile) {
    return (
      <div className="grid grid-cols-2 gap-4">
        {shoes.map((item: Shoe, index: number) => (
          <div key={index} className="flex-col flex gap-4">
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={302}
              height={334}
              className="border-cinza1 border-8 rounded-2xl"
            />
            <h3 className="text-Cinza4 text-2xl font-semibold uppercase font-rubik">
              {item.name}
            </h3>
            <span className="text-Sunshade font-bold font-opensans">
              ${item.price}
            </span>
          </div>
        ))}
      </div>
    );
  }

  // Caso contrário, renderiza o carrossel
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={4}
      pagination={{ clickable: true }}
      breakpoints={{
        520: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {shoes.map((item: Shoe, index: number) => (
        <SwiperSlide key={index}>
          <div className="flex-col flex gap-4">
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={302}
              height={334}
              className="border-cinza1 border-8 rounded-2xl"
            />
            <h3 className="text-Cinza4 lg:text-2xl text-base font-semibold uppercase font-rubik">
              {item.name}
            </h3>
            <span className="text-Sunshade font-bold font-opensans">
              ${item.price}
            </span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
