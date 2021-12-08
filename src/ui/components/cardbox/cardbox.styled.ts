import styled from "styled-components";

export const CardBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const CardBoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #161b22;
  border: 1px solid #30363d;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding: 22px;
  @media (max-width: 740px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const CardBoxBody = styled.div`
  background-color: #0d1117;
  border: 1px solid #30363d;
  border-top: none;
  height: auto;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;
