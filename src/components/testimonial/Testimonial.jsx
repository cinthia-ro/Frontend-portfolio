import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './testimonials.css'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination'

const Testimonial = () => {
  const[data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://ill-gray-snail-gear.cyclic.app/api/testimonial")
      .then((response) => {
        const formattedData = response.data.data.map((item) => ({
          id: item._id,
          avatar: item.avatar,
          name: item.name,
          review: item.review,
        }));
        setData(formattedData);
      })
      .catch((error) => {
        console.log("error fetching portfolio data:", error);
      });
  }, []);

  return (
    <section id="testimonials">
    <h5>Review from Clients</h5>
    <h2>Testimonials</h2>
    <Swiper
      className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {
        data.map(({ id, avatar, name, review }) => (
        
        <SwiperSlide key={id} className="testimonial">
          <div className="client_avatar">
            <img src={avatar} alt={name} />
          </div>
          <h5>{name}</h5>
          <small className="client_review">{review}</small>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
  )
}

export default Testimonial