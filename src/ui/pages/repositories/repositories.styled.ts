import styled from "styled-components";

export const RepositoriesItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-top: 1px solid #21262d;
`;

export const RepositoriesList = styled.div`
  display: flex;
  flex-direction: column;
  ${RepositoriesItem} {
    :first-child {
      border-top: 0;
    }
  }
`;

export const RepositoriesItemTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;
export const RepositoriesItemMiddle = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
export const RepositoriesItemBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const RepoTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  line-height: 1px;
  color: #58a6ff;
  cursor: pointer;
  a {
    color: #58a6ff;
    text-decoration: none;
  }
  .octicon {
    margin: 1px 6px 0 0;
  }
  :hover {
    text-decoration: underline;
  }
`;
export const RepoDesc = styled.div`
  color: #8b949e;
  font-size: 14px;
  line-height: 1.5;
  max-width: 72%;
`;
export const RepoStar = styled.div`
  display: flex;
  align-items: center;
  height: 28px;
  padding: 0 12px;
  font-size: 12px;
  font-weight: 300;
  color: #c9d1d9;
  line-height: normal;
  background-color: #21262d;
  border: 1px solid #30363d;
  border-radius: 6px;
  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  transition-property: color, background-color, border-color;
  cursor: pointer;
  :hover {
    background-color: #30363d;
    border-color: #8b949e;
  }
  .octicon {
    margin-right: 6px;
  }
  span {
    display: inline-flex;
  }
`;
export const RepoBottomLeft = styled.div`
  display: flex;
  .item {
    display: flex;
    align-items: center;
    line-height: normal;
    font-size: 12px;
    color: #8b949e;
    margin-right: 18px;
    :last-child {
      margin-right: 0;
    }
    span {
      display: inline-flex;
    }
    .octicon {
      margin-right: 4px;
    }
  }
  .stars,
  .forks {
    cursor: pointer;
    :hover {
      color: #58a6ff;
      svg {
        fill: #58a6ff;
      }
    }
  }
`;
export const RepoBottomRight = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #8b949e;
  line-height: normal;
  font-weight: 300;
  span {
    display: inline-flex;
  }
  .octicon {
    margin-right: 6px;
  }
`;

export const BuiltByUsers = styled.div`
  display: flex;
  img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 2px;
    :first-child {
      margin-left: 2px;
    }
  }
`;
