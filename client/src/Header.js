import React from "react";
import styled from "styled-components";
import PersonIcon from "@material-ui/icons/Person";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import IconButton from "@material-ui/core/IconButton";

const Header = () => {
  return (
    <Container>
      <IconButton>
        <HeaderIcon>
          <PersonIcon fontSize="large" />
        </HeaderIcon>
      </IconButton>
      <HeaderLogo
        src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
        alt="tinder logo"
      />
      <IconButton>
        <HeaderIcon>
          <QuestionAnswerIcon fontSize="large" />
        </HeaderIcon>
      </IconButton>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f9f9f9;
`;

const HeaderLogo = styled.img`
  height: 40px;
  object-fit: contain;
`;

const HeaderIcon = styled.div`
  padding: 20px;
`;
