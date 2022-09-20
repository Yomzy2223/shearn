import styled from "styled-components";

export const Input = styled.input`
  height: clamp(40px, 13vw, 56px);
  background-color: #00203f;
  color: #b6adad;
  font-size: clamp(14px, 1.5vw, 16px);
  font-weight: 600;
  border: 1px solid #56fe8f;
  border-radius: 5px;
  padding-inline: 15px;
  width: 100%;
  transition: 0.3s all ease;

  &::placeholder {
    color: #b6adaddc;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 5px 1px #56fe8f;
  }
`;