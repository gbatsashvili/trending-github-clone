import styled from "styled-components";

export const NavItem = styled.div`
  a {
    text-decoration: none;
    padding: 7px 16px;
    border: 1px solid #30363d;
    font-size: 14px;
    color: #c9d1d9;
    font-weight: 500;
    line-height: 20px;
  }
  .active {
    background-color: #0969da;
    color: #fff;
    border-color: #0969da;
  }
`;

export const NavStyled = styled.div`
  display: flex;
  ${NavItem} {
    :first-child a {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      border-right: 0;
    }
  }
  ${NavItem} {
    :last-child a {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
      border-left: 0;
    }
  }
  @media (max-width: 740px) {
    margin-bottom: 20px;
  }
`;
