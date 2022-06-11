import { css } from "@emotion/react";

export const H1 = css`
  font-family: var(--main-font-family);
  font-weight: 700;
  line-height: 40.32px;
  font-size: 32px;

  @media screen and (min-width: 720px) {
    font-size: 46px;
  }
`;

export const H2 = css`
  font-family: var(--main-font-family);
  font-size: 24px;
  font-weight: 500;

  @media screen and (min-width: 720px) {
    font-size: 24px;
  }
`;

export const Body1 = css`
  font-family: var(--main-font-family);
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0em;
  text-align: center;

  @media screen and (min-width: 720px) {
    font-size: 18px;
  }
`;

export const Body2 = css`
  font-family: var(--main-font-family);
  font-size: 16px;
  font-weight: 300;
  text-align: center;
`;
