import React from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";

const Modal = ({ text, open, handleModalClose }) => {
  return (
    <Dialog onClose={handleModalClose} open={open}>
      <Container>
        <p>{text}</p>
        <button onClick={handleModalClose}>Ok</button>
      </Container>
    </Dialog>
  );
};

export default Modal;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 23px;
  background-color: #00203f;
  height: 196px;
  border-radius: 10px;
  padding-inline: 48px;
  color: white;
  font-weight: 600;

  p {
    font-size: clamp(18px, 1.8vw, 20px);
  }

  button {
    background-color: white;
    font-size: clamp(16px, 1.6vw, 18px);
    border-radius: 20px;
    font-weight: 600;
    border: none;
    width: 100%;
    height: 49px;
  }
`;
