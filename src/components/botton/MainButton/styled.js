import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:disabled {
    background-color: #78fca4;
    &:hover {
      transform: scale(1);
    }
  }

  background-color: #56fe8f;
  color: black;

  font-weight: 700;
  font-size: clamp(16px, 1.5vw, 18px);
  height: clamp(40px, 13vw, 56px);
  text-transform: capitalize;
  width: 100%;
  border-radius: 5px;
  border: none;
  outline: none;
  transition: 0.3s all ease;

  &:hover {
    transform: scale(1.01);
  }
  &:active {
    transform: scale(0.99);
  }
  &:focus {
    background-color: #78fca4;
  }
`;
