import React from "react";
import {
  DivBannerContainer,
  DivDescriptionWrapper,
  PDescription,
} from "./styles";
import { bannerDescriptions } from "@/constants";

function Banner() {
  return (
    <DivBannerContainer>
      <DivDescriptionWrapper>
        {bannerDescriptions.map((description, idx) => (
          <PDescription key={idx}>{description}</PDescription>
        ))}
      </DivDescriptionWrapper>
    </DivBannerContainer>
  );
}

export default Banner;
