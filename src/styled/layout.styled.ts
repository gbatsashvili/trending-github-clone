import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    line-height: 1.15; 
    -webkit-text-size-adjust: 100%; 
  }
  body {
    height: 100%;
    margin:0;
    padding:0;
    background-color: #0d1117;
  }
  #root{
    height: 100%;
  }
`;

export const MainContainerStyled = styled.div`
  height: 100%;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
`;

export const Container = styled.div<{ padding?: string }>`
  max-width: 1024px;
  margin: 0 auto;
  padding: ${({ padding }) => padding || "0"};
`;

export const LoadingWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 550px;
`;

export const ErrorWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  color: #dd3636;
`;
