import React, { Fragment } from "react";
import {
  DivPrivacyPolicyContainer,
  H1Title,
  H3SctionTitle,
  PDescription,
} from "./styles";
import { privacyPolicies } from "@/constants";

function PrivacyPolicy() {
  return (
    <DivPrivacyPolicyContainer>
      <H1Title>Privacy Policy</H1Title>

      {privacyPolicies.map((item, idx) => (
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
    </DivPrivacyPolicyContainer>
  );
}

export default PrivacyPolicy;
