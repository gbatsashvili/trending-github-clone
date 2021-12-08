import styled from "styled-components";


export const DevelopersItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-top: 1px solid #21262d;
`;

export const DevelopersList = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  ${DevelopersItem}{
    :first-child{
      border-top: 0;
    }
  }
`;

export const DevelopersItemLeft = styled.div`
  display: flex;
  flex-basis: 40%;
`;
export const DevelopersItemMiddle = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 40%;
`;
export const DevelopersItemRight = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-basis: 20%;
`;

export const DevLeftItemCounter = styled.div`
  color: #8b949e;
  font-size: 12px;
  margin: 4px 25px 0 0;
`;
export const DevLeftItemAvatar = styled.div`
  margin-right: 15px;
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
`;
export const DevLeftItemName = styled.div`
  line-height: 1.25;
  .name {
    a {
      text-decoration: none;
      color: #58a6ff;
      font-size: 20px;
    }
  }
  .nickname {
    font-size: 16px;
    font-weight: 300;
    color: #8b949e;
  }
`;

export const DevMiddleItemPopular = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  color: #8b949e;
  display: flex;
  align-items: center;
  line-height: normal;
  font-weight: 300;
  margin-bottom: 8px;
  span {
    display: inline-flex;
  }
  .octicon {
    margin-right: 6px;
  }
`;
export const DevMiddleItemRepoName = styled.div`
  font-size: 16px;
    color: #58a6ff;
  a {
    color: #58a6ff;
    text-decoration: none;
  }

  display: flex;
  align-items: center;
  line-height: normal;
  font-weight: 400;
  margin-bottom: 8px;
  :hover {
    text-decoration: underline;
  }
  span {
    display: inline-flex;
  }
  .octicon {
    margin-right: 6px;
  }
`;
export const DevMiddleItemDesc = styled.div`
  color: #8b949e;
  font-size: 12px;
  font-weight: 300;
  max-width: 65%;
  line-height: 1.5;
`;
export const DevRightItemSponsor = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  padding: 0 12px;
  font-size: 12px;
  font-weight: 400;
  color: #c9d1d9;
  line-height: normal;
  background-color: #21262d;
  border: 1px solid #30363d;
  border-radius: 6px;
  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  transition-property: color, background-color, border-color;
  cursor: pointer;
  margin-right: 8px;
  span {
    display: inline-flex;
  }
  .octicon {
    margin-right: 6px;
  }
  svg {
    transition: transform 0.15s cubic-bezier(0.2, 0, 0.13, 2);
    transform: scale(1);
  }
  :hover {
    background-color: #30363d;
    border-color: #8b949e;
    transition-duration: 0.1s;
    svg {
      transform: scale(1.1);
    }
  }
`;
export const DevRightItemFollow = styled.div`
  display: flex;
  align-items: center;
  height: 28px;
  padding: 0 12px;
  font-size: 12px;
  font-weight: 400;
  color: #c9d1d9;
  line-height: normal;
  background-color: #21262d;
  border: 1px solid #30363d;
  border-radius: 6px;
  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  transition-property: color, background-color, border-color;
  cursor: pointer;
  span {
    display: inline-flex;
  }
  .octicon {
    margin-right: 6px;
  }
  :hover {
    background-color: #30363d;
    border-color: #8b949e;
  }
`;
