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

export const ReferralCode = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  align-self: center;
  justify-content: center;
  gap: 11px;
  padding: 8px 10px;
  background-color: #084784;
  border-radius: 8px;
  max-width: 100%;
  width: max-content;

  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 90%;
  }
  p:nth-of-type(2) {
    position: absolute;
    right: 15px;
    top: -40px;
    background-color: #084784;
    box-shadow: 0 0 10px 4px #e1e1e122;
    border-radius: 8px;
    padding: 5px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-flow: column;
  align-self: center;
  gap: 20px;
  background: #084784;
  border: 1px solid #56fe8f;
  border-radius: 5px;
  padding: 12px 17px;
  max-width: 500px;

  > div {
    p {
      line-height: 25px;
    }
  }
  span {
    color: #56fe8f;
  }
`;

export const ReferralTable = styled.table`
  background-color: #56fe8f;
  border-radius: 10px 10px 0px 0px;

  > thead {
    tr {
      color: black;
      line-height: 50px;
      font-weight: 600;
      font-size: clamp(14px, 1.5vw, 16px);
    }
  }

  tr {
    text-align: center;
    line-height: 40px;
  }
  tbody {
    background: #084784;
    border: 1px solid #ded2d2;

    tr:nth-of-type(1) {
      color: #56fe8f;
    }
  }
`;
