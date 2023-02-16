import React from "react";
import PLogo from "../../images/partner-logo.png";
import {
  PartnerLogo,
  PartnerSection,
  PartnerLogos,
  PartnerTitle,
  PartnerWrapper,
} from "./PartnerElements";
const Partners = () => {
  return (
    <PartnerSection>
      <PartnerWrapper>
        <PartnerTitle>Trusted By:</PartnerTitle>
        <PartnerLogos>
          <PartnerLogo src={PLogo} />
          <PartnerLogo src={PLogo} />
          <PartnerLogo src={PLogo} />
          <PartnerLogo src={PLogo} />
          <PartnerLogo src={PLogo} />
          <PartnerLogo src={PLogo} />
          <PartnerLogo src={PLogo} />
          <PartnerLogo src={PLogo} />
          <PartnerLogo src={PLogo} />
        </PartnerLogos>
      </PartnerWrapper>
    </PartnerSection>
  );
};

export default Partners;
