import React from "react";
import ChatSvg from "../../images/svg-1.svg";
import PaySvg from "../../images/svg-2.svg";
import GuideSvg from "../../images/svg-3.svg";
import {
  InfoWrapper,
  InfoRow,
  Column1,
  Img,
  TextWrapper,
  Heading,
  Subtitle,
  Column2,
  ImgWrap,
  InfoContainer,
  InfoCard,
  InfoTitle,
} from "./BenElements01";

const Benefits = () => {
  return (
    <>
      <InfoContainer id="benefits">
        <InfoWrapper>
          <InfoTitle>How to get into tech?</InfoTitle>
          <InfoCard>
            <InfoRow>
              <Column1>
                <TextWrapper>
                  <Heading>Chat with Dath</Heading>
                  <Subtitle>
                    Become an expert in tech by acquiring a tech skill today.
                    Don't know what skill to learn? Chat with Dath now!
                  </Subtitle>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={ChatSvg} alt="Chat" />
                </ImgWrap>
              </Column2>
            </InfoRow>
          </InfoCard>
          <InfoCard>
            <InfoRow>
              <Column1>
                <ImgWrap>
                  <Img src={PaySvg} alt="Chat" />
                </ImgWrap>
              </Column1>
              <Column2>
                <TextWrapper>
                  <Heading>Pay a $1 Coffee fee</Heading>
                  <Subtitle>
                    Become an expert in tech by acquiring a tech skill today.
                    Don't know what skill to learn? Chat with Dath now!
                  </Subtitle>
                </TextWrapper>
              </Column2>
            </InfoRow>
          </InfoCard>
          <InfoCard>
            <InfoRow>
              <Column1>
                <TextWrapper>
                  <Heading>Dath will guide you into Tech</Heading>
                  <Subtitle>
                    Become an expert in tech by acquiring a tech skill today.
                    Don't know what skill to learn? Chat with Dath now!
                  </Subtitle>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={GuideSvg} alt="Chat" />
                </ImgWrap>
              </Column2>
            </InfoRow>
          </InfoCard>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Benefits;
