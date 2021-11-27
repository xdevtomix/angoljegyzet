import styled, { StyleSheetManager } from "styled-components";

import Header from "./components/Header";
import TagQuestions from "./components/TagQuestions";

export default function App() {
  return (
    <StyleSheetManager disableVendorPrefixes>
      <Container data-component="app">
        <Header />
        <TagQuestions />
      </Container>
    </StyleSheetManager>
  )
}

const Container = styled.div`
  width: 100%;
`;