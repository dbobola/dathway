import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: #ebfafa;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 1300px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoTitle = styled.h1`
  font-size: 3rem;
  color: black;
  margin: 64px 0;
`;
export const InfoCard = styled.div`
  height: 400px;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 840px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col2 col1'` : `'col1 col2' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-top: 50px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-top: 50px;
  padding: 0 15px;
  grid-area: col2;
`;
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 30px;
  line-height: 1.1;
  font-weight: 600;
  color: #010606;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #010606;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 80%;
`;

export const Img = styled.img`
  width: 80%;
  margin: 0 0 70px 0;
  padding-right: 0;
`;