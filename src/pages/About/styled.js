import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  gap: 28px;
  width: 100%;
  color: white;
  padding-bottom: 60px;
`;

export const Body = styled.div`
  display: flex;
  flex-flow: column;
  gap: 20px;
  padding: 0 24px;
  font-weight: 400;
  font-size: clamp(13px, 1.5vw, 15px);
`;

export const SHImage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: white;

  img {
    max-width: 100%;
  }
`;
export const AboutInfo = styled.div`
  position: relative;
`;
export const AboutBlock = styled.div`
  span {
    position: absolute;
    left: 20px;
    top: 13px;
    z-index: 2;
    color: black;
    font-size: clamp(18px, 1.4vw, 20px);
    font-weight: 500;
  }
`;
