import { PageTypeEnum } from "interfaces/global-enums";
import { Container, MainContainerStyled } from "styled/layout.styled";
import Header from "ui/components/header/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import Repositories from "ui/pages/repositories/Repositories.page";
import Developers from "ui/pages/developers/Developers.page";
import { QueryClient, QueryClientProvider } from "react-query";
const Main = () => {
  const location = useLocation();

  const headerType =
    location.pathname === "/developers"
      ? PageTypeEnum.DEVELOPERS
      : PageTypeEnum.REPOSITORIES;

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <MainContainerStyled>
        <Header pageType={headerType} />
        <Container padding="40px 16px">
          <Routes>
            <Route path="/" element={<Repositories />} />
            <Route path="/developers" element={<Developers />} />
          </Routes>
        </Container>
      </MainContainerStyled>
    </QueryClientProvider>
  );
};

export default Main;
