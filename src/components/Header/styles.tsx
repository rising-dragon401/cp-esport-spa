import { styled } from "styled-components";

export const DivHeaderContainer = styled.div`
  /* position: sticky;
  top: 0;
  z-index: 1;
  background: gray; */
`;

export const PLogo = styled.p`
  flex-grow: 1;
  font-size: 1.5rem;
  font-style: italic;
  font-family: monospace;

  a {
    color: white;
  }
`;

export const DivMobileHeader = styled.div`
  ${PLogo} {
    a {
      color: #538af9;
    }
  }
`;
