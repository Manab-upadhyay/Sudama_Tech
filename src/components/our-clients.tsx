import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const clients = [
  { id: 1, src: "/pic1.jpg", alt: "Client 1" },
  { id: 2, src: "/pic2.jpg", alt: "Client 2" },
  { id: 3, src: "/pic3.jpg", alt: "Client 3" },
  { id: 4, src: "/pic4.jpg", alt: "Client 4" }
];

export default function OurClients() {
  return (
    <div className="py-16 bg-white">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Our Clients
      </h2>

      {/* Swiper Carousel for all screen sizes */}
      <div className="px-4 sm:px-8">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            640: { slidesPerView: 2 }, // Show 2 slides on screens >= 640px
            1024: { slidesPerView: 3 }, // Show 3 slides on screens >= 1024px
          }}
          className="mySwiper"
        >
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="flex justify-center">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <Image
                    src={client.src}
                    alt={client.alt}
                    width={250}
                    height={250}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
