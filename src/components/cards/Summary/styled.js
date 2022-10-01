import styled from "styled-components";

export const Summary = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 119px;
  width: 100%;
  height: 100%;
  margin-bottom: 11px;
  font-weight: 700;
  font-size: clamp(12px, 1.4vw, 14px);

  > div {
    display: flex;
    flex-flow: column;
    justify-content: center;
    gap: 9px;
    align-items: center;
    width: 50%;
    min-height: inherit;
    color: white;

    > span:nth-of-type(1) {
      color: white;
      line-height: 20px;
    }
    @media screen and (max-width: 400px) {
      > span {
        max-width: 70px;
      }
    }
  }

  > div:nth-of-type(1) {
    width: 50%;
    border-right: 1px solid #56fe8f;
    mask-image: linear-gradient(transparent, black 26% 65%, transparent);

    > span:nth-of-type(1) {
      color: white;
    }
  }

  span {
    text-align: center;
    color: #56fe8f;
    font-size: clamp(14px, 1.4vw, 16px);
  }
`;
