import React from "react";
import { DivFooterContainer, PDescription } from "./styles";
import Link from "next/link";

function Footer() {
  return (
    <DivFooterContainer>
      <PDescription>
        We prioritize the privacy and security of your personal information.
        When you submit information through our online forms, we want to assure
        you that it will be handled with utmost care and used exclusively for
        the purpose of contacting you regarding scholarship opportunities for
        online degree programs in the fields of Associates, Bachelors, or
        Masters.
      </PDescription>
      <PDescription>
        We have implemented robust security measures to protect your data and
        comply with all applicable data protection regulations. Rest assured
        that your information will not be shared with any third parties without
        your explicit consent. We maintain strict confidentiality and will only
        use your provided information to facilitate communication related to the
        scholarship opportunities.
      </PDescription>
      <PDescription>
        For further details on how we handle your personal data, please refer to
        our <Link href="/privacy-policy">privacy policy</Link>.
      </PDescription>
      <PDescription>
        Your privacy matters to us, and we are committed to ensuring the
        confidentiality and security of your information throughout the process.
      </PDescription>
    </DivFooterContainer>
  );
}

export default Footer;
