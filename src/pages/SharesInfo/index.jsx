import Dialog from "@mui/material/Dialog";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  DollarIcon,
  HourlyIcon,
  PriceIcon,
  TimeIcon,
} from "../../assets/images";
import { MainButton } from "../../components/botton";
import MainHeader from "../../components/header";
import Modal from "../../components/modal";
import BottomNav from "../../components/nav/BottomNav";
import { allShares } from "../../utils/config";
import { getProductsFromDb } from "../../utils/dbCalls";
import { mergeProductsInfo } from "../../utils/globalFunctions";
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
  const [shareInfo, setShareInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  const { share } = useParams();

  window.onbeforeunload = () => {
    localStorage.setItem("quantity", quantity);
  };
  window.onload = () => {
    const localQuantity = localStorage.getItem("quantity");
    setQuantity(localQuantity);
  };

  const handleShares = async () => {
    setLoading(true);
    const dbShares = await getProductsFromDb();
    const shareInfoFromDb = dbShares.find(
      (selected) => selected.title === share
    );
    const selectedShare = allShares.find(
      (selected) => selected.title === share
    );
    const merged = { ...selectedShare, ...shareInfoFromDb };
    setShareInfo(merged);
    setLoading(false);
  };

  useEffect(() => {
    handleShares();
  }, []);

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
          <p>{shareInfo.title}</p>
          <img src={shareInfo.image} alt={shareInfo.title} />
        </Image>
        <KeyInfo>
          <p>
            {" "}
            <img src={PriceIcon} alt="" /> Price: ${shareInfo.price}
          </p>
          <p>
            {" "}
            <img src={HourlyIcon} alt="" /> Hourly Income: $
            {shareInfo.hourProfit}
          </p>
          <p>
            {" "}
            <img src={DollarIcon} alt="" /> Total Income:{" "}
            {shareInfo.totalRevenue}
          </p>
          <p>
            {" "}
            <img src={TimeIcon} alt="" /> Serving Time: {shareInfo.lifeSpan}
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
            {shareInfo.title} is {shareInfo.pre} Share Earn's {shareInfo.post}{" "}
            plan.
          </p>
          <p>
            The clients invests ${shareInfo.price} to obtain $
            {shareInfo.hourProfit} hourly income continuously for{" "}
            {shareInfo.lifeSpan} days and recieve ${shareInfo.revenue} as total
            in the end.
          </p>
          <p>
            The daily income will be added automatically to your balance every
            24hrs. It is withdrawable when it reaches the minimum withdrawal
            threshold.
          </p>
        </DetailedInfo>
        <MainButton text="Buy Now" clickAction={handleModalOpen} />
        <Modal
          text="Purchase Successful"
          open={open}
          handleModalClose={handleModalClose}
        />
      </Body>
      <BottomNav />
    </Container>
  );
};

export default SharesInfo;
