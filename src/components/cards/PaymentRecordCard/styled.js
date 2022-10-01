import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  gap: 4px;
  font-size: clamp(12px, 1.4vw, 14px);
  background-color: white;
  padding: 10px;
  color: black;
  font-weight: 500;
`;

export const Title = styled.div`
  color: #e69b08;
`;

export const Amount = styled.div`
  align-self: flex-end;
  font-weight: 600;
`;

export const Details = styled.div`
  font-size: clamp(10px, 1.4vw, 14px);
`;

export const Status = styled.div`
  font-size: clamp(10px, 1.4vw, 14px);
  margin-top: 5px;
  color: ${({ $success }) => ($success ? "#2D973E" : "")};
  color: ${({ $failed }) => ($failed ? "#FF5858" : "")};
`;
