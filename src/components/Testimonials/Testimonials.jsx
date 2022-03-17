/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Testimonials.css";
import client from "../assets/model.png";
import client2 from "../assets/model_2.png";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const TestimonialsData = [
  {
    id: 1,
    name: "Rori Firmin",
    image: client,
    review:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
  },
  {
    id: 2,
    name: "Pail Shiels",
    image: client2,
    review:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  },
  {
    id: 3,
    name: "Davis Decker",
    image: client,
    review:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  },
  {
    id: 4,
    name: "Kalina Meagher",
    image: client2,
    review:
      "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
  },
  {
    id: 5,
    name: "Nikita Elfitt",
    image: client,
    review:
      "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
  },
  {
    id: 6,
    name: "Wilhelm Van den Bosch",
    image: client2,
    review:
      "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
  },
  {
    id: 7,
    name: "Stanford Ezzy",
    image: client,
    review:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  },
  {
    id: 8,
    name: "Aubrey Balk",
    image: client2,
    review:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
  },
  {
    id: 9,
    name: "Ari Haldane",
    image: client,
    review:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
  },
  {
    id: 10,
    name: "Ranique Slimming",
    image: client,
    review:
      "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  },
];

const Testimonials = () => {
  const [data, setData] = useState(TestimonialsData);
  return (
    <section id="testimonials">
      <h5>Review Form Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ id, name, review, image }) => (
          <SwiperSlide className="testimonial" key={id}>
            <div className="client_avater">
              <img src={image} alt={image} />
            </div>
            <h5 className="client_name">{name} </h5>
            <small className="client_review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
