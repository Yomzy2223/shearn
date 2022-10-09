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
  gap: 50px;

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

export const ResetText = styled.p`
  color: rgba(255, 255, 255, 0.57);
  font-weight: 400;
  font-size: clamp(20px, 1.4vw, 22px);
  width: 90%;
  text-align: center;
  margin-top: -200px;
`;
