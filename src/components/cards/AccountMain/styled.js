import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: clamp(7px, 3%, 16px);
  padding: 14px 12px;
  color: white;
  font-size: clamp(14px, 1.4vw, 16px);
  text-decoration: none;
  border-bottom: ${({ $border }) => ($border ? "1px solid #f2f7f866" : "")};

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
  }
`;
