import { styled } from "styled-components";

export const DivApplicationForm = styled.div`
  padding: 2rem;
`;
export const DivFormGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const H3SectionTitle = styled.h3`
  margin: 1rem 0;
  color: #fff;
  /* padding-left: 0.5rem;
  border-left: 3px solid #538af6; */
`;

export const DivButtonWrapper = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

export const PDescription = styled.p`
  color: #ddd;
`;
