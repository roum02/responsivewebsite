import React from "react";
import styled, { css } from "styled-components";

const sizes = {
  desktop: 1024,
  tablet: 768,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const About = styled.div``;

const Banner = styled.img`
  width: 90%;
  height: 70vh;
  margin-left: 5%;
  margin-top: 2rem;
  font-size: 5rem;
  ${media.tablet`
  width: 100%;
  margin: 0;
  `}
`;

const Title = styled.h1`
  color: white;
  position: relative;
  left: 10%;
  top: -8rem;
  ${media.tablet`
  left: 25%;
  top: -25rem;
  `}
`;

const Text = styled.h1`
  text-align: center;
`;

const ContentBox = styled.div`
  display: flex;
`;

const Img = styled.div`
  background: lightsalmon;
  margin-left: 2rem;
  margin-bottom: 2rem;
  width: 25rem;
  height: 25rem;
  ${media.tablet`
  display: none;
  `}
`;

const TextBox = styled.div`
  margin-left: 3rem;
  ${media.tablet`
  text-align: center;
  margin: 0 auto;
  `}
`;

const Contents = () => {
  return (
    <div>
      <About>
        <Banner src="https://cdn.pixabay.com/photo/2014/05/27/23/32/matrix-356024_960_720.jpg" />
        <Title>반응형 웹 사이트 만들기 실습</Title>
      </About>
      <Text>Contents</Text>
      <ContentBox>
        <Img />
        <TextBox>
          <h3>제목텍스트</h3>
          <p>엄청 긴 내용 텍스트</p>
        </TextBox>
      </ContentBox>
    </div>
  );
};

export default Contents;
