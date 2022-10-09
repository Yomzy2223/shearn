import React from "react";
import { Body, Container, Image, Info, Title } from "./styled";

const OrderCard = ({
  date,
  time,
  orderNo,
  image,
  title,
  quantity,
  price,
  hourly,
  total,
  servingTime,
}) => {
  return (
    <Container>
      <Title>
        <span>{date}</span>
        <span>{time}</span>
      </Title>
      <Body>
        <p>Order No. {orderNo}</p>
        <Image>
          <p>{title}</p>
          <div>
            <img src={image} alt={title} />
            <Info>
              <div>
                Quantity: <span>{quantity}</span>
              </div>
              <div>
                Price: <span>${price}</span>
              </div>
              <div>
                Hourly Income: <span>${hourly}</span>
              </div>
              <div>
                Total Income: <span>${total}</span>
              </div>
              <div>
                Span: <span>{servingTime}days</span>
              </div>
            </Info>
          </div>
        </Image>
      </Body>
    </Container>
  );
};

export default OrderCard;
