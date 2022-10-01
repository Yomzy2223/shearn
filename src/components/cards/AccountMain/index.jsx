import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styled";
import { IoIosArrowForward } from "react-icons/io";

const AccountMainCard = ({ icon, text, link, $border }) => {
  return (
    <Container to={link} $border={$border}>
      <img src={icon} alt="" />
      <div>
        <span>{text}</span>
        <IoIosArrowForward />
      </div>
    </Container>
  );
};

export default AccountMainCard;
