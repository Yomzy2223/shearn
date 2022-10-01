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
  gap: 120px;
  padding: 0 24px;
  font-weight: 500;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-flow: column;
  gap: 12px;

  color: #56fe8f;
  font-size: clamp(14px, 1.4vw, 16px);

  margin-bottom: 100px;
`;

export const Bottom = styled.div`
  display: flex;
  flex-flow: column;
  gap: 34px;
`;

export const BottomInfo = styled.div`
  padding: 15px;
  background-color: #084784;
  border: 1px solid #56fe8f;
`;
