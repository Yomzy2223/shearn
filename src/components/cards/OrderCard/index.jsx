import React from "react";
import { Body, Container, Image, Info, Title } from "./styled";

const OrderCard = ({ orderNo, order }) => {
  let day = 1000 * 60 * 60 * 24;
  let timeDiff = Date.now() - order.date.seconds * 1000;
  let servingTimeInMilSec = order.lifeSpan * day;
  let timeLeftInMilSec = servingTimeInMilSec - timeDiff;
  console.log(timeLeftInMilSec);

  let timeDiffInDays = timeLeftInMilSec / day;
  let timeDiffInHrs = (timeDiffInDays - Math.floor(timeDiffInDays)) * 24;
  let timeDiffInMins = (timeDiffInHrs - Math.floor(timeDiffInHrs)) * 60;

  let timeLeft = `${Math.floor(timeDiffInDays)}days ${Math.floor(
    timeDiffInHrs
  )}hrs ${Math.floor(timeDiffInMins)}mins`;

  return (
    <Container>
      <Title>
        <span>{order.date.toDate().toDateString()}</span>
        <span>{order.time}</span>
      </Title>
      <Body>
        <p>Order No. {orderNo}</p>
        <Image>
          <p>{order?.title}</p>
          <div>
            <img src={order?.image} alt={order?.title} />
            <Info>
              <div>
                Price: <span>${order?.price}</span>
              </div>
              <div>
                Hourly Income: <span>${order?.hourProfit}</span>
              </div>
              <div>
                Total Income: <span>${order?.revenue}</span>
              </div>
              <div>
                Span: <span>{order?.lifeSpan}days</span>
              </div>
              <div>
                Time Left: <span>{timeLeft}</span>
              </div>
            </Info>
          </div>
        </Image>
      </Body>
    </Container>
  );
};

export default OrderCard;
