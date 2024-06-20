import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/carouselComponent.css';
import userImg from "../assets/image/user.png";

const CarouselComponent = () => {
  const testimonials = [
    {
      name: "Gagan N Bangaragiri",
      image: userImg,
      testimonial: "JetSetMed made it so much easier to get malaria medication for our 5-day safari. We felt protected the entire time we were out exploring the amazing Sabi Sands Game Reserve!",
      memberSince: "2023",
      destination: "South Africa"
    },
    {
      name: "Jane Doe",
      image: userImg,
      testimonial: "JetSetMed provided excellent service during our trip to Kenya. Highly recommend!",
      memberSince: "2022",
      destination: "Kenya"
    },
    {
      name: "John Smith",
      image: userImg,
      testimonial: "Great service and support for our travel needs!",
      memberSince: "2021",
      destination: "Brazil"
    },
    {
      name: "Alice Johnson",
      image: userImg,
      testimonial: "Wonderful experience, hassle-free travel!",
      memberSince: "2020",
      destination: "Australia"
    },
    {
      name: "Robert Brown",
      image: userImg,
      testimonial: "Excellent customer service and reliable!",
      memberSince: "2019",
      destination: "Canada"
    },
    {
      name: "Gagan N Bangaragiri",
      image: userImg,
      testimonial: "JetSetMed made it so much easier to get malaria medication for our 5-day safari. We felt protected the entire time we were out exploring the amazing Sabi Sands Game Reserve!",
      memberSince: "2023",
      destination: "South Africa"
    },
    {
      name: "Jane Doe",
      image: userImg,
      testimonial: "JetSetMed provided excellent service during our trip to Kenya. Highly recommend!",
      memberSince: "2022",
      destination: "Kenya"
    },
    {
      name: "John Smith",
      image: userImg,
      testimonial: "Great service and support for our travel needs!",
      memberSince: "2021",
      destination: "Brazil"
    },
    {
      name: "Alice Johnson",
      image: userImg,
      testimonial: "Wonderful experience, hassle-free travel!",
      memberSince: "2020",
      destination: "Australia"
    },
    {
      name: "Robert Brown",
      image: userImg,
      testimonial: "Excellent customer service and reliable!",
      memberSince: "2019",
      destination: "Canada"
    },
  ];

  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  const testimonialChunks = chunkArray(testimonials, 4); // Adjust the number to show more/less items per slide

  return (
    <div className="container mt-5 carousel-container">
      <h1 className="text-center heading-1">What makes us different?</h1>
      <p className="text-center desc mb-4 heading-desc">We'll pass that question to our users</p>
      <Carousel>
        {testimonialChunks.map((chunk, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center">
              {chunk.map((testimonial, idx) => (
                <div key={idx} className="card mx-2 rounded" style={{ width: '18rem', height: '23rem' }}>
                    <small className="travel-to">Travelled to: {testimonial.destination}</small>
                  <div className="card-title-img">
                    <h5 className="card-title">{testimonial.name}</h5>
                    <img src={testimonial.image} className="card-img-top" alt={testimonial.name} />
                  </div>
                  <div className="card-body">
                    <p className="card-text card-desc">{testimonial.testimonial}</p>
                    <p className="card-text member-since rounded-bottom">Member since: {testimonial.memberSince}</p>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;