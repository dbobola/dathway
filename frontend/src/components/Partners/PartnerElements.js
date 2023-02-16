import styled from "styled-components";

export const PartnerSection = styled.div`
  bottom: 0;
  width: 100%;
  height: 120px;
  background-color: #ebfafa;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 150px;
  @media screen and (max-width: 960px) {
    padding: 0;
  }
`;
export const PartnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 130px;
  justify-content: center;
  position: absolute;
  border-bottom: solid;
  border-bottom-color: #a1a1a1;
  border-bottom-width: 1px;
  align-items: center;
  @media screen and (max-width: 960px) {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }
`;
export const PartnerTitle = styled.h3`
  font-size: 1.7rem;
  padding-left: 30px;
  color: #a8a8a8;
  width: 350%;
  @media screen and (max-width: 960px) {
    font-size: 1rem;

    padding: 0;
  }
`;

export const PartnerLogos = styled.div`
  padding-top: 15px;
`;

export const PartnerLogo = styled.img`
  width: 11%;
`;
