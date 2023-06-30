import React, { Fragment } from "react";
import {
  DivRequirementContainer,
  H1Title,
  H3SctionTitle,
  PDescription,
} from "./styles";
import { requirements } from "@/constants";

function Requirement() {
  return (
    <DivRequirementContainer>
      <H1Title>Requirements</H1Title>

      {requirements.map((item, idx) => (
        <Fragment key={idx}>
          <H3SctionTitle>{item.subTitle}</H3SctionTitle>
          {item.descriptions.map((description, idx) => (
            <PDescription
              key={idx}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          ))}
        </Fragment>
      ))}
    </DivRequirementContainer>
  );
}

export default Requirement;
