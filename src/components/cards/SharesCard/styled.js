import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  flex: 1;
  gap: 20px;
  padding: 14px;
  border: 1px solid #56fe8f;
  border-radius: 5px;
  color: white;
  min-width: 265px;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  font-weight: 600;
  width: 100%;

  img {
    width: 40px;
  }
`;
export const ShareSummary = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const Info = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 5px;
  font-size: 12px;

  > p:nth-of-type(1) {
    color: #56fe8f;
  }
`;
export const Bottom = styled.div`
  display: flex;
  width: 100%;
  max-width: 97px;

  button {
    height: 31px;
    font-weight: 500;
  }
`;
