import { createGlobalStyle, css } from "styled-components";

const styled = { createGlobalStyle };

export const GlobalStyle = styled.createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: transparent;
    }

    html {
      @media (max-width: 768px) {
        font-size: 87.5%;
      }
    }

    :focus-visible {
      box-shadow: 0 0 0 2px ${theme.gray[100]};
    }

    body {
      background: ${theme.gray[600]};
      color: ${theme.gray[300]};
      -webkit-font-smoothing: antialiased;
    }

    body,
    input,
    textarea,
    button {
      font-family: "Inter", sans-serif;
      font-size: 1rem;
      font-weight: 400;
      line-height: 140%;
    }

    .flatPickr {
      width: 50px;
      border: none;
      border-radius: 6px;
      padding: 1rem;
      background-color: ${theme.blueDark};
      color: ${theme.blueDark};
      transition: 0.25s ease-out;
      cursor: pointer;

      &:hover {
        background-color: ${theme.blue};
        color: ${theme.blue};
      }

      &:checked + & {
        color: ${theme.gray[100]};
      }

      @media (max-width: 768px) {
        width: 100%;
        padding: 0.5rem;
      }
    }
  `}
`;
