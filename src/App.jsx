import styled, { StyleSheetManager } from "styled-components";
import { HashNavigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Header from "./components/Header";
import Home from "./components/Home";
import TagQuestions from "./components/TagQuestions";

import 'swiper/css';

export default function App() {
  const onSlideChange = () => {
    if (document.scrollingElement.scrollTop > innerHeight) {
      document.scrollingElement.scrollTop = 0;
    }
  };

  return (
    <StyleSheetManager disableVendorPrefixes>
      <Container data-component="app">

        <Header />

        <SwiperContainer>
          <Swiper
            modules={[HashNavigation]}
            hashNavigation={{ watchState: true }}
            onSlideChange={() => onSlideChange()}
          >

            <SwiperSlide data-hash="home">
              <Home />
            </SwiperSlide>
            <SwiperSlide data-hash="tag-questions">
              <TagQuestions />
            </SwiperSlide>

          </Swiper>
        </SwiperContainer>

      </Container>
    </StyleSheetManager>
  )
}

const Container = styled.div`
  width: 100%;
`;

const SwiperContainer = styled.div`
  width: 100%;
  margin-top: 4rem;
`;