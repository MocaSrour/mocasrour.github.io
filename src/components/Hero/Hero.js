import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Muka Portfolio
      </SectionTitle>
      <SectionText>
        Hello! I am a dedicated and detail-oriented Junior Quality Control Tester, passionate about ensuring the highest quality in software applications.
        <br />With a strong foundation in manual & automation testing and a keen eye for identifying and resolving issues, I bring a meticulous approach to every project I undertake.
      </SectionText>
      <Button onClick={() => (window.location = "https://www.linkedin.com/in/mukarram-srour-7b8953b3/")} >Learn More...</Button>
    </LeftSection>
  </Section>
);

export default Hero;