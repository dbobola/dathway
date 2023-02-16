import React from "react";
import Icon1 from "../../images/svg-5.svg";
import Icon2 from "../../images/svg-6.svg";
import Icon3 from "../../images/svg-7.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./FeaturesElements";

const Features = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>What you will get?</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Access to 10,000 + courses</ServicesH2>
          <ServicesP>We help reduce yiurjndshd wk oieheiohk</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Flexible Chat Experience</ServicesH2>
          <ServicesP>We help reduce yiurjndshd wk oieheiohk</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Detailed Masterclass</ServicesH2>
          <ServicesP>We help reduce yiurjndshd wk oieheiohk</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Roadmap</ServicesH2>
          <ServicesP>We help reduce yiurjndshd wk oieheiohk</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Features;
