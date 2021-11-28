import styled, { StyleSheetManager } from "styled-components";
import { HashNavigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Header from "./components/Header";
import Home from "./components/Home";
import TagQuestions from "./components/TagQuestions";
import Passive from "./components/Passive";
import Causative from "./components/Causative";

import 'swiper/css';

export default function App() {
  return (
    <StyleSheetManager disableVendorPrefixes>
      <Container data-component="app">

        <Header />

        <SwiperContainer>
          <Swiper
            modules={[HashNavigation]}
            hashNavigation={{ watchState: true }}
          >

            <SwiperSlide data-hash="home">
              <Home />
            </SwiperSlide>
            <SwiperSlide data-hash="tag-questions">
              <TagQuestions />
            </SwiperSlide>
            <SwiperSlide data-hash="passive">
              <Passive />
            </SwiperSlide>
            <SwiperSlide data-hash="causative">
              <Causative />
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