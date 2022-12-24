import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1;
  min-height: 200px;
  max-height: 250px;
  min-width: 250px;
  max-width: 350px;
`;
export const Title = styled.div`
  display: flex;
  flex-flow: row wrap;
  /* flex: 1; */
  gap: 13px;
  background-color: #56fe8f;
  font-size: 15px;
  font-weight: 700;
  padding: 14px 11px;
  border-radius: 10px 10px 0 0;

  span {
    color: black;
    font-size: clamp(15px, 1.4vw, 17px);
    font-weight: 700;
  }
`;
export const Body = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1;
  gap: 10px;
  font-size: clamp(12px, 1.4vw, 14px);
  color: white;
  font-weight: 400;
  padding: 5px 11px 10px;
  background-color: #084784;
  border: 1px solid #56fe8f;
`;
export const Image = styled.div`
  display: flex;
  flex-flow: column;
  gap: 10px;

  > p {
    font-weight: 600;
  }
  img {
    height: 94px;
    max-width: 50%;
  }
  > div {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    gap: 14px;
    color: #56fe8f;

    span {
      color: white;
    }
  }
`;
export const Info = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  height: 100%;
`;
