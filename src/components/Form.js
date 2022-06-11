import React from "react";
import { Button } from "../components/Button";
import { Body1 } from "./Fonts";
import styled from "@emotion/styled";

const FormContainer = styled.form`
  flex-direction: column;
`;

const Description = styled.h3`
  ${Body1}
  text-align: center;
  padding: 0 20px 0px 20px;

  @media screen and (min-width: 720px) {
    text-align: start;
    padding: 0;
  }
`;

const StyledInput = styled.input`
  padding: 20px 48px 20px 48px;
  border-radius: 6px;
  border: solid 1px #d6daff;
  max-width: -webkit-fill-available;
  width: 100%;
  background-color: #f5f4fe;

  ::-webkit-input-placeholder {
    font-family: var(--main-font-family);
    font-size: 16px;
    font-weight: 300;
  }

  @media screen and (min-width: 720px) {
    margin: 0;
    border-radius: 6px 0px 0px 6px;
    padding: 20px 5px 20px 20px;
  }
`;

const InputWrapper = styled.div`
  margin: 0px 24px 0px 24px;

  @media screen and (min-width: 720px) {
    margin: 0;
    display: flex;
  }
`;

export const Form = () => {
  return (
    <FormContainer>
      <Description>
        If you are interested in trying out HibanaPay today, submit your email
        and we will get in touch.
      </Description>
      <InputWrapper>
        <StyledInput placeholder="Please enter your email address" />
        <Button />
      </InputWrapper>
    </FormContainer>
  );
};
