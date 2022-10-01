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
  gap: 12px;
  padding: 0 24px;
  font-weight: 400;
`;

export const BasicInfo = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: clamp(13px, 1.4vw, 15px);
  padding: 17px 24px;
  background-color: #084784;
  border: 1px solid #56fe8f;
  border-radius: 5px;
  margin: 10px 0;

  span {
    color: #56fe8f;
    font-size: clamp(16px, 1.4vw, 18px);
    font-weight: 700;
  }
`;

export const SubHeader = styled.div`
  display: flex;
  height: 67px;
  justify-content: space-around;
  align-items: flex-end;
  color: white;
  background-color: #084784;
  border-radius: 8px;
  padding: 12px;

  a {
    display: flex;
    align-items: center;
    /* background-color: yellow; */
    height: 55%;
    color: white;
    text-decoration: none;
    padding-inline: 5px;
  }
`;
