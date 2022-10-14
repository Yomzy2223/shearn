import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  width: 100%;
`;
export const Form = styled.form`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 62px;
  justify-content: center;

  width: 90%;
  padding: 60px 0;
`;
export const Inputs = styled.div`
  display: flex;
  flex-flow: column;
  gap: 21px;
  width: 100%;
`;

export const Main = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;

  img {
    max-width: 200px;
  }
`;
export const Middle = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 17px;
  width: 100%;
`;

export const MainError = styled.div`
  font-size: 13px;
  top: 25px;
  right: 0;
  padding: 5px 10px;
  border-radius: 5px;
  color: white;
  background-color: red;
`;
