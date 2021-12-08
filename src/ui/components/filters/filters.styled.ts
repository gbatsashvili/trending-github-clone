import styled from "styled-components";

export const FilterItem = styled.div`
  margin-right: 20px;
`;

export const FiltersSyled = styled.div`
  display: flex;
  ${FilterItem} {
    :last-child {
      margin-right: 0;
    }
  }
`;
