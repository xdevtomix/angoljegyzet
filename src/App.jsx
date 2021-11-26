import styled, { StyleSheetManager } from "styled-components";

import TagQuestions from "./components/TagQuestions";

export default function App() {
  return (
    <StyleSheetManager disableVendorPrefixes>
      <Container data-component="app">
        <TagQuestions />
      </Container>
    </StyleSheetManager>
  )
}

const Container = styled.div`
  width: 100%;
`;