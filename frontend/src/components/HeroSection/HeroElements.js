import styled from "styled-components";
import { MdArrowForward, MdArrowRight } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  @media screen and (min-height: 840px) {
    height: 1330px;
  }
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 840px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media scrren and (max-width: 840px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;
export const FormInput = styled.input`
  padding: 16px 16px;
  width: 400px;
  border: none;
  border-radius: 24px;
  margin-top: 32px;
  font-size: 15px;
  outline: none;
`;
export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: -80px;
`;

export const ReviewSection = styled.div`
  bottom: 0;
  color: #fff;
  padding-bottom: 24px;
  position: absolute;
`;

export const ReviewWrapper = styled.div`
  display: inline-block;
  color: #fff;

  padding: 24px 24px;
`;

export const ReviewText = styled.p`
  text-align: center;
  font-size: 24px;
`;
export const UserInfo = styled.div`
  flex-direction: column;
  display: flex;
  padding-top: 12px;
  align-items: center;
  justify-content: center;
`;
export const UserDp = styled.img`
  width: 10%;
  padding-top: 24px;
  padding-right: 0;
  align-self: center;
`;
export const UserName = styled.h4`
  text-align: center;
`;
export const UserTitle = styled.h5`
  text-align: center;
`;
