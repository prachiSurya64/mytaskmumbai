import React from "react";
import { Card, Typography } from "antd";
import styled, { keyframes } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import gitpic from "../assets/gitpic.jpeg";

const { Text } = Typography;

// Define zigzag keyframes
const zigzagUpDown = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(10px);
  }
  75% {
    transform: translateY(-10px);
  }
`;

// Styled Components for the card with zigzag animation
const StyledCard = styled(Card)`
  width: 250px;
  margin-right: 30px;
  border-radius: 20px;
  border: 1px solid #000;
  opacity: 1;
  background-color: #2a2b31;
  color: white;
  animation: ${zigzagUpDown} 2s ease-in-out infinite;

  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.4s;
  }
  &:nth-child(3) {
    animation-delay: 0.8s;
  }
  &:nth-child(4) {
    animation-delay: 1.2s;
  }
  &:nth-child(5) {
    animation-delay: 1.6s;
  }

  .profile-pic {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    align-items: center;
    text-align: center;
    justify-content: center;
  }

  .title {
    font-family: Poppins;
    font-size: 18px;
    font-weight: 200;
    line-height: 5px;
    text-align: center;
    color: white;
  }

  .subtitle {
    font-size: 13px;
    text-align: center;
    color: white;
  }
`;

const CarouselWrapper = styled.div`
  .slick-slide {
    margin: 0 30px;
  }

  .slick-slide div {
    width: 250px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .slick-prev:before,
  .slick-next:before {
    color: white;
  }

  .slick-prev {
    left: -50px;
  }

  .slick-next {
    right: -50px;
  }
`;

function CardContent() {
  const cardData = [
    {
      title: "Marvin McKinney",
      subtitle:
        "Since switching to Swift Revel, I finally have peace of mind regarding my business finances. With their secure platform, I trust my data's protection completely. ",
      imageUrl: gitpic,
    },
    {
      title: "Jacob Jones",
      subtitle:
        "As a budding startup, we sought a financial solution that was simple, secure, and scalable. Swift Revel checked all the boxes, enabling focus on growth. ",
      imageUrl: gitpic,
    },
    {
      title: "Thereca Webb",
      subtitle:
        "Swift Revel empowers me to manage my business finances with confidence and ease. Their integrated tax solutions ensure I'm always tax compliant.",
      imageUrl: gitpic,
    },
    {
      title: "Ronald Recanals",
      subtitle:
        "We needed a payment gateway that could handle our diverse customer base. Swift Revel offers a wide range of payment options, making it easy for our clients to pay. ",
      imageUrl: gitpic,
    },
    {
      title: "Cody Fisher",
      subtitle:
        "As a Freelancer, managing invoices and chasing payments was a constant headache. Now, with automated and secure payment I am getting paid on time, every time.",
      imageUrl: gitpic,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 3, 
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 50,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <CarouselWrapper>
      <Slider {...settings}>
        {cardData.map((data, index) => (
          <div key={index}>
            <StyledCard>
              <img src={data.imageUrl} alt={data.title} className="profile-pic" />
              <div>
                <Text className="title" strong>{data.title}</Text>
              </div>
              <Text className="subtitle">{data.subtitle}</Text>
            </StyledCard>
          </div>
        ))}
      </Slider>
    </CarouselWrapper>
  );
}

export default CardContent;

