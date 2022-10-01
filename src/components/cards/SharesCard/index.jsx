import React from "react";
import { useNavigate } from "react-router-dom";
import { MainButton } from "../../botton";
import { Body, Bottom, Container, Header, Info, ShareSummary } from "./styled";

const SharesCard = ({
  title,
  image,
  price,
  hourProfit,
  lifeSpan,
  totalRevenue,
  path,
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/shares/${path}`);
  };

  return (
    <Container>
      <Header>
        <img src={image} alt={title} />
        <h2>{title}</h2>
      </Header>
      <ShareSummary>
        <Info>
          <p>{"$" + price}</p>
          <p>Price</p>
        </Info>
        <Info>
          <p>{"$" + hourProfit}</p>
          <p>Profit/hr</p>
        </Info>
        <Info>
          <p>{lifeSpan + "Days"}</p>
          <p>Life Span</p>
        </Info>
        <Info>
          <p>{"$" + totalRevenue}</p>
          <p>Total Revenue</p>
        </Info>
      </ShareSummary>
      <Bottom>
        {" "}
        <MainButton text="Buy" clickAction={handleNavigate} />
      </Bottom>
    </Container>
  );
};

export default SharesCard;
