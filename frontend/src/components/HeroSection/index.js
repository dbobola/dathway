import React, { useState } from "react";
import { Button } from "../ButtonElements";

import {
  HeroBg,
  HeroContainer,
  VideoBg,
  HeroContent,
  HeroBtnWrapper,
  HeroH1,
  HeroP,
  // ReviewWrapper,
  ArrowForward,
  ArrowRight,
  FormContent,
  FormInput,
  // ReviewSection,
  // ReviewText,
  // UserInfo,
  // UserDp,
  // UserName,
  // UserTitle,
} from "./HeroElements";
import Video from "../../videos/video.mp4";

// const reviews = [
//   {
//     dp: require("../../images/pic1.png"),
//     caption: '"I love your platform! It helped me get into Tech"',
//     name: "Matt",
//     title: "Graphics Designer",
//   },
//   {
//     dp: require("../../images/pic1.png"),
//     caption: '"I love your platform! It helped me get into Tech"',
//     name: "Matt",
//     title: "Graphics Designer",
//   },
//   {
//     dp: require("../../images/pic1.png"),
//     caption: '" I love your platform! It helped me get into Tech"',
//     name: "Matt",
//     title: "Graphics Designer",
//   },
// ];

const HeroSection = ({ disabled = true }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>

      <HeroContent>
        <HeroH1>Tech Career Choice Made Easy</HeroH1>
        <HeroP>
          Talk to Dath and let Dath decipher the best tech skill for you to
          learn. Proceed to chat now!
        </HeroP>
        <FormContent>
          <FormInput type="text" placeholder="Enter first name" required />
          <HeroBtnWrapper type="submit">
            <Button
              to="chat"
              primary="true"
              hovprimary="false"
              hovcolor="false"
              dark="true"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              disabled={disabled}
            >
              Chat with Dath {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </FormContent>
      </HeroContent>
      {/* <ReviewSection>
        {reviews.map((review, index) => (
          <ReviewWrapper key={index}>
            <ReviewText>{review.caption}</ReviewText>
            <UserInfo>
              <UserName>{review.name}</UserName>
              <UserTitle>{review.title}</UserTitle>
              <UserDp src={review.dp} />
            </UserInfo>
          </ReviewWrapper>
        ))}
      </ReviewSection> */}
    </HeroContainer>
  );
};

export default HeroSection;
