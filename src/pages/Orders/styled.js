import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  gap: 28px;
  width: 100%;
  color: #56fe8f;
  padding-bottom: 60px;
`;

export const Body = styled.div`
  display: flex;
  flex-flow: column;
  gap: 21px;
  padding: 0 24px;

  ol {
    display: flex;
    flex-flow: column;
    gap: 10px;
    font-weight: 400;
    font-size: clamp(12px, 1.4vw, 14px);
    margin-left: 15px;
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  h2 {
    color: white;
    font-size: clamp(15px, 1.4vw, 17px);
    text-decoration: underline;
    text-transform: uppercase;
    width: 100%;
  }

  > div {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 15px;
    /* display: flex;
    flex-flow: row wrap;
    gap: 15px;
    width: 100%; */

    @media screen and (max-width: 850px) {
      grid-template-columns: auto auto;
    }
    @media screen and (max-width: 550px) {
      grid-template-columns: auto;
    }
  }
`;
