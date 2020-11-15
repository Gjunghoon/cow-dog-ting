import React from "react";
import styled, { css } from "styled-components";

import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

const SwipeButtons = () => {
  return (
    <Container>
      <StyledIconButton button="repeat">
        <ReplayIcon fontSize="large" />
      </StyledIconButton>
      <StyledIconButton button="left">
        <CloseIcon fontSize="large" />
      </StyledIconButton>
      <StyledIconButton button="star">
        <StarRateIcon fontSize="large" />
      </StyledIconButton>
      <StyledIconButton button="right">
        <FavoriteIcon fontSize="large" />
      </StyledIconButton>
      <StyledIconButton button="lightning">
        <FlashOnIcon fontSize="large" />
      </StyledIconButton>
    </Container>
  );
};

export default SwipeButtons;

const Container = styled.div`
  position: fixed;
  bottom: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  > .MuiIconButton-root {
    background-color: white;
    box-shadow: 0px 10px 53px 0px rgba(0, 0, 0, 0.3) !important;
  }
`;

const StyledIconButton = styled(IconButton)`
  ${(props) =>
    props.button === "repeat" &&
    css`
      padding: 3vw !important;
      color: #f5b748 !important;
    `}
  ${(props) =>
    props.button === "left" &&
    css`
      padding: 3vw !important;
      color: #ec5e6f !important;
    `}
  ${(props) =>
    props.button === "star" &&
    css`
      padding: 3vw !important;
      color: #62b4f9 !important;
    `}
  ${(props) =>
    props.button === "right" &&
    css`
      padding: 3vw !important;
      color: #76e2b3 !important;
    `}
  ${(props) =>
    props.button === "lightning" &&
    css`
      padding: 3vw !important;
      color: #915dd1 !important;
    `}
`;
