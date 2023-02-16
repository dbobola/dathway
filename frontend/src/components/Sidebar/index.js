import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="how-it-works" onClick={toggle}>
            How It Works
          </SidebarLink>
          <SidebarLink to="browse-skills" onClick={toggle}>
            Browse Skills
          </SidebarLink>
          <SidebarLink to="resources" onClick={toggle}>
            Resources
          </SidebarLink>
          <SidebarLink to="about-us" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="login" onClick={toggle}>
            Login
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Chat with Dath</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
