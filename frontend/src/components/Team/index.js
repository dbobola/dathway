import React from "react";
import Photo from "../../images/team1.jpg";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

import {
  TeamSec,
  TeamWrapper,
  TeamHeading,
  TeamContainer,
  TeamCard,
  TeamCardInfo,
  TeamName,
  TeamTitle,
  ImgWrap,
  Img,
  SocialIconLink,
  SocialIcons,
} from "./Team.elements";

export function TeamSection() {
  return (
    <TeamSec id="team">
      <TeamWrapper>
        <TeamHeading>Founding Team</TeamHeading>
        <TeamContainer>
          <TeamCard to="/sign-up">
            <TeamCardInfo>
              <ImgWrap>
                <Img src={Photo} alt="" />
              </ImgWrap>
              <TeamName>Adams Victor</TeamName>
              <TeamTitle>CEO/Co-founder</TeamTitle>
              <SocialIcons>
                <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                  <FaTwitter />
                </SocialIconLink>
              </SocialIcons>
            </TeamCardInfo>
          </TeamCard>
          <TeamCard to="/sign-up">
            <TeamCardInfo>
              <ImgWrap>
                <Img src={Photo} alt="" />
              </ImgWrap>
              <TeamName>Adams Victor</TeamName>
              <TeamTitle>CEO/Co-founder</TeamTitle>
              <SocialIcons>
                <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                  <FaTwitter />
                </SocialIconLink>
              </SocialIcons>
            </TeamCardInfo>
          </TeamCard>
          <TeamCard to="/sign-up">
            <TeamCardInfo>
              <ImgWrap>
                <Img src={Photo} alt="" />
              </ImgWrap>
              <TeamName>Adams Victor</TeamName>
              <TeamTitle>CEO/Co-founder</TeamTitle>
              <SocialIcons>
                <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                  <FaTwitter />
                </SocialIconLink>
              </SocialIcons>
            </TeamCardInfo>
          </TeamCard>
          <TeamCard to="/sign-up">
            <TeamCardInfo>
              <ImgWrap>
                <Img src={Photo} alt="" />
              </ImgWrap>
              <TeamName>Adams Victor</TeamName>
              <TeamTitle>CEO/Co-founder</TeamTitle>
              <SocialIcons>
                <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                  <FaTwitter />
                </SocialIconLink>
              </SocialIcons>
            </TeamCardInfo>
          </TeamCard>
        </TeamContainer>
      </TeamWrapper>
    </TeamSec>
  );
}
export default TeamSection;
