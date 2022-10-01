import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  gap: 28px;
  width: 100%;
  color: #56fe8f;
  padding-bottom: 60px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 15vw;
    min-width: 90px;
    max-width: 150px;
    margin-top: 28px;
  }
`;
export const Body = styled.div`
  display: flex;
  flex-flow: column;
  gap: 21px;
  padding: 0 24px;
`;
export const Info = styled.div`
  display: flex;
  flex-flow: column;
  background-color: #084784;
  border-radius: 8px;
`;
