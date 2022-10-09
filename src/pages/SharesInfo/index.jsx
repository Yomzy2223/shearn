import Dialog from "@mui/material/Dialog";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  DollarIcon,
  HourlyIcon,
  PriceIcon,
  TimeIcon,
} from "../../assets/images";
import { MainButton } from "../../components/botton";
import MainHeader from "../../components/header";
import BottomNav from "../../components/nav/BottomNav";
import { allShares } from "../../utils/config";
import {
  Body,
  Container,
  DetailedInfo,
  Image,
  KeyInfo,
  Quantity,
  QuantityWrapper,
} from "./styled";

const SharesInfo = () => {
  const [quantity, setQuantity] = useState(0);
  const [open, setOpen] = useState(false);

  window.onbeforeunload = () => {
    localStorage.setItem("quantity", quantity);
  };
  window.onload = () => {
    const localQuantity = localStorage.getItem("quantity");
    setQuantity(localQuantity);
  };

  const { share } = useParams();
  const selectedShare = allShares.find((selected) => selected.title === share);

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <MainHeader title="Products" />
      <Body>
        <Image>
          <p>{selectedShare.title}</p>
          <img src={selectedShare.image} alt={selectedShare.title} />
        </Image>
        <KeyInfo>
          <p>
            {" "}
            <img src={PriceIcon} alt="" /> Price: ${selectedShare.price}
          </p>
          <p>
            {" "}
            <img src={HourlyIcon} alt="" /> Hourly Income: $
            {selectedShare.hourProfit}
          </p>
          <p>
            {" "}
            <img src={DollarIcon} alt="" /> Total Income:{" "}
            {selectedShare.totalRevenue}
          </p>
          <p>
            {" "}
            <img src={TimeIcon} alt="" /> Serving Time: {selectedShare.lifeSpan}
          </p>
        </KeyInfo>
        <QuantityWrapper>
          <p>Quantity:</p>
          <Quantity>
            {[1, 2, 3, 4, 5].map((q, index) => (
              <button
                key={index}
                onClick={handleQuantity}
                value={q}
                // style={{ backgroundColor: quantity === q && "white" }}
                style={{
                  backgroundColor: quantity === q.toString() && "white",
                }}
              >
                {q}
              </button>
            ))}
          </Quantity>
        </QuantityWrapper>
        <DetailedInfo>
          <p>
            {selectedShare.title} is {selectedShare.pre} Share Earn's{" "}
            {selectedShare.post} plan that we provide to the client.
          </p>
          <p>
            The clients invests ${selectedShare.price} to obtain $
            {selectedShare.hourProfit} hourly income continuously for{" "}
            {selectedShare.lifeSpan} days and recieve $
            {selectedShare.totalRevenue} as total in the end.
          </p>
          <p>
            The daily income will be added automatically to you Balance in Share
            Earn account at 2:00pm everyday and is withdrawable around the clock
            when it reached the minimum withdrawal threshold.
          </p>
        </DetailedInfo>
        <MainButton text="Buy Now" clickAction={handleModalOpen} />
        <Dialog onClose={handleModalClose} open={open}>
          <p>I am the modal</p>
        </Dialog>
      </Body>
      <BottomNav />
    </Container>
  );
};

export default SharesInfo;
