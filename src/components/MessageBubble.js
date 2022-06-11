import React from "react";
import styled from "@emotion/styled";
import { H2, Body2 } from "./Fonts";

const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  position: relative;
  max-width: 366px;
  padding: 34px 12px 32px 24px;
  margin: 14px 8px 58px 8px;

  &:first-child {
    margin-top: 0;
  }

  @media screen and (min-width: 720px) {
    max-width: 440px;
    width: 100%;
  }

  @media screen and (min-width: 1224px) {
    max-width: 500px;
  }

  //rounded corner triangle styling
  &:after {
    width: 38px;
    height: 32px;
    border-top-right-radius: 30%;
    content: "";
    position: absolute;
    background-color: inherit;
    right: -3px;
    bottom: 9px;
  }

  &:before {
    transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707)
      translate(0, -50%);
  }
  &:after {
    transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%);
  }
`;

const Title = styled.h2`
  ${H2}
`;

const Message = styled.p`
  ${Body2}
  text-align: left;
  line-height: 20.16px;
`;

export const MessageBubble = ({ title, message }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Message>{message}</Message>
    </Container>
  );
};
