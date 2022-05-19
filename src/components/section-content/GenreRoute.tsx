import { Route, Routes } from "react-router-dom";
import { NAVIGATION_LIST } from "./consts";
import { ContentWrapper } from "./styled";

export const GenreRoute: React.FC = () => (
  <ContentWrapper>
    <Routes>
      {NAVIGATION_LIST.map((item) => (
        <Route path={'/' + item.path} element={<item.component />} />
      ))}
    </Routes>
  </ContentWrapper>
);