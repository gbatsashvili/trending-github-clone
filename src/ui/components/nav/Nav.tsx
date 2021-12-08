import { NavLink } from "react-router-dom";
import { NavItem, NavStyled } from "./nav.styled";

const Navigation = (): JSX.Element => {
  return (
    <NavStyled>
      <NavItem>
        <NavLink to="/">Repositories</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/developers">Developers</NavLink>
      </NavItem>
    </NavStyled>
  );
};

export default Navigation;
