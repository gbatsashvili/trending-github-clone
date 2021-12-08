import { PageTypeEnum } from "interfaces/global-enums";
import {
  HeaderStyled,
  HeaderTitle,
  HeaderSubTitle,
} from "ui/components/header/header.styled";
import { Container } from "styled/layout.styled";

export interface IPageTypes {
  pageType: PageTypeEnum;
}

const Header = (props: IPageTypes):JSX.Element => {
  const { pageType } = props;

  const renderSubTitle = (): String => {
    if (pageType === PageTypeEnum.REPOSITORIES) {
      return "See what the GitHub community is most excited about today.";
    }
    if (pageType === PageTypeEnum.DEVELOPERS) {
      return "These are the developers building the hot tools today.";
    }
    return "";
  };

  return (
    <HeaderStyled>
      <Container padding="40px 16px">
        <HeaderTitle>Trending</HeaderTitle>
        <HeaderSubTitle>{renderSubTitle()}</HeaderSubTitle>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
