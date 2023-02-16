import styled from "styled-components";

export const TeamSec = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #4b59f7;
`;

export const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const TeamHeading = styled.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const TeamContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const TeamCard = styled.div`
  background: transparent;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 250px;
  height: 500px;
  text-decoration: none;
  border-radius: 4px;
  margin: 14px;

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const TeamCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 450px;
  align-items: center;
  color: #fff;
`;

export const TeamName = styled.h3`
  margin: 5px 0;
  font-size: 18px;
`;

export const TeamTitle = styled.h4`
  font-size: 20px;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  height: 80%;
  padding-right: 0;
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70px;
  margin-top: 5px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
