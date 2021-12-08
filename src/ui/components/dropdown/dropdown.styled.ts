import styled from "styled-components";

export const DropdownStyled = styled.div`
  display: flex;
  align-items: center;
  line-height: normal;
  cursor: pointer;
  .react-custom-select__control {
    background: transparent;
    border: none;
    font-size: 14px;
    font-weight: normal;
    min-height: auto;
    padding: 0;
    height: auto;
    line-height: normal;
  }
  .react-custom-select__control--is-focused {
    border: none;
    box-shadow: none;
  }
  .react-custom-select__single-value {
    color: #8b949e;
    font-weight: 300;
  }
  .react-custom-select__placeholder {
    color: #8b949e;
    font-weight: 400;
  }
  .react-custom-select__indicator-separator {
    display: none;
  }
  .react-custom-select__value-container {
    padding: 0;
  }
  .react-custom-select__indicator {
    color: #8b949e;
    padding: 0;
    svg {
      width: 14px;
      height: 14px;
    }
  }
  .react-custom-select__menu {
    min-width: 300px;
    right: 0;
    background-color: #161b22;
    border: 1px solid #30363d;
  }
  .react-custom-select__menu-list {
    padding-bottom: 0;
  }
  .react-custom-select__option {
    background-color: transparent;
    padding: 8px 8px 8px 30px;
    color: #f0f6fc;
    font-size: 12px;
    font-weight: 300;
    border-bottom: 1px solid #21262d !important;
    :hover {
      background-color: #1f6feb;
    }
    :last-child {
      border-bottom: 0;
    }
  }
`;
export const SelectTrigger = styled.div`
  color: #8b949e;
  font-size: 14px;
  padding-right: 3px;
  font-weight: 300;
  :hover {
    color: #c9d1d9;
  }
`;
export const SelectWrapper = styled.div``;
