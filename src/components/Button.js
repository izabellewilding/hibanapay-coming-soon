import React from "react";
import styled from "@emotion/styled";
import { Body2 } from "./Fonts";

const StyledButton = styled.button`
  ${Body2}
  color: white;
  text-align: center;

  background-color: #181e52;
  &:hover {
    background-color: #283070;
  }

  padding: 20px 50px 20px 50px;
  border-radius: 6px;
  width: 100%;
  max-width: -webkit-fill-available;
  margin-top: 15px;
  cursor: pointer;

  border-width: 0;
  border-style: none;
  border-color: none;
  border-image: none;

  @media screen and (min-width: 720px) {
    margin: 0;
    width: auto;
    white-space: nowrap;
    border-radius: 0px 6px 6px 0px;
    padding: 20px;
  }
`;

export const Button = () => {
  return <StyledButton>Request early access</StyledButton>;
};
