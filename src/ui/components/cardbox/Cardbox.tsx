import { CardBoxBody, CardBoxHeader, CardBoxStyled } from "./cardbox.styled";
import Filters from "../filters/Filters";
import Navigation from "../nav/Nav";
import { ReactNode } from "react";

export interface ICardboxTypes {
  children: ReactNode;
}

const Cardbox = (props: ICardboxTypes): JSX.Element => {
  const { children } = props;
  return (
    <CardBoxStyled>
      <CardBoxHeader>
        <Navigation />
        <Filters />
      </CardBoxHeader>
      <CardBoxBody>{children}</CardBoxBody>
    </CardBoxStyled>
  );
};

export default Cardbox;
