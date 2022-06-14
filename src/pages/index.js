import React from "react";
import Seo from "../components/seo";
import styled from "@emotion/styled";
import "../styles/global.css";
import LogoSVG from "../assets/logo.svg";
import { MessageBubble } from "../components/MessageBubble";
import { Form } from "../components/Form";
import { H1, H2, Body2 } from "../components/Fonts";
// import useMedia from "use-media";

const Layout = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  font-family: outfit;

  @media screen and (min-width: 1224px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Title = styled.h1`
  ${H1}

  display: flex;
  flex-direction: column;
  margin: 20px 0 20px 0;

  @media screen and (min-width: 720px) {
    flex-direction: row;
    text-align: left;
    margin-top: 24px;
    white-space: nowrap;
    margin-bottom: 18px;
  }
`;

const PrimaryContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (min-width: 720px) {
    align-items: flex-start;
    justify-content: flex-start;
  }

  @media screen and (min-width: 1224px) {
    width: 50%;
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 550px;
  margin: auto;
  padding: 40px 0px 40px 0px;

  @media screen and (min-width: 720px) {
    padding: 120px 0px 100px 0px;
    align-items: flex-start;
  }
`;

const Subtitle = styled.h2`
  ${H2}
  font-size: 18px;
  text-align: center;
  margin-bottom: 50px;

  @media screen and (max-width: 400px) {
    text-align: start;
  }
`;

const MessageContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 0px 40px 0px;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(253, 75, 14, 1) 0%,
    rgba(199, 52, 126, 1) 50%,
    rgba(143, 26, 241, 1) 100%
  );

  @media screen and (min-width: 720px) {
    padding: 100px 0px 100px 0px;
  }

  @media screen and (min-width: 1224px) {
    width: 50%;
    padding: 0;
  }
`;

const MessageContainerInner = styled.div`
  margin: 0 20px 0 20px;

  /** set animations on the children */
  div {
    opacity: 0;
    animation: incoming 1.2s cubic-bezier(0, 1, 0.75, 1) forwards;
    /*animation: animation-name animation-duration animation-direction animation-iteration-count */  
    transition: .25s ease-in-out;
  
  }

  div:first-of-type {
    animation-delay: 0.05s;
  }

  div + div {
    animation-delay: 1.25s;
  }

  div + div + div {
    animation-delay: 2.25s;
  }

  @keyframes incoming {
    0%{
      transform: translateY(300px);
      opacity: 0;
    }
    100%{
      transform: translateY(0px);
      opacity: 1
    }

`;

const ContactDetails = styled.p`
  ${Body2}
  padding: 14px 0 42px 0;
  max-width: 217px;
  margin: auto;

  @media screen and (min-width: 720px) {
    text-align: start;
  }
`;

const Logo = styled(LogoSVG)`
  width: 83.23px;
  height: 80px;
`;

const IndexPage = () => {
  // const isDesktop = useMedia({ minWidth: "1224px" });

  return (
    <>
      <Seo title="Home" />
      <Layout>
        <PrimaryContainer>
          <Inner>
            <Logo />

            <Title>
              <span>HibanaPay</span>
              <span>&nbsp;is coming soon</span>
            </Title>
            <Subtitle>Fast, efficient and secure open banking.</Subtitle>
            <Form />
          </Inner>

          <ContactDetails>
            Contact: info@hibanapay.com Developed by{" "}
            <a
              href="https://www.velopayments.com/"
              rel="noreferrer"
              target="_blank"
            >
              Velo Payments
            </a>
          </ContactDetails>
        </PrimaryContainer>
        <MessageContainer>
          <MessageContainerInner>
            <MessageBubble
              title="Fast Setup"
              message="Register and start requesting open banking payments in minutes."
            />
            <MessageBubble
              title="Lower costs, faster payments"
              message="Leverage open banking technology to save on traditional costs and receive your money instantly."
            />
            <MessageBubble
              title="Collect the information you need"
              message="Curate your payment requests to gather information from your customers, with your own branding and QR codes."
            />
          </MessageContainerInner>
        </MessageContainer>
        {/* {!isDesktop && (
          <ContactDetails>
            Contact: info@hibanapay.com Developed by{" "}
            <a href="">Velo Payments</a>
          </ContactDetails>
        )} */}
      </Layout>
    </>
  );
};

export default IndexPage;
