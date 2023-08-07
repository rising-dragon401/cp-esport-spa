import { styled } from "styled-components";

export const DivHeaderContainer = styled.div`
  /* position: sticky;
  top: 0;
  z-index: 1;
  background: gray; */
  .college-logo {
    margin-left: 2rem;
  }

  border-bottom: 8px solid #e9b244;

  @media screen and (max-width: 1100px) {
    .college-logo {
      display: none;
    }
  }
`;

export const PLogo = styled.p`
  flex-grow: 1;
  font-size: 1.5rem;
  font-style: italic;
  font-family: monospace;
  background: #000;

  a {
    color: white;
  }
`;

export const DivMobileHeader = styled.div`
  ${PLogo} {
    a {
      color: #538af9;
    }
    margin: 0;
    padding: 2rem 0;
  }
`;
