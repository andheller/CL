import React from "react";
import HeroSection from "components/HeroSection";
import Steps from "components/Steps";
import Benefits from "components/Benefits";
import CtaSection from "components/CtaSection";
import { useRouter } from "next/router";
import Document, { Html, Head, Main, NextScript } from 'next/document'



function IndexPage(props) {
  const router = useRouter();

  return (
    <>
<div id="stripes">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
        <title>Cofocus Labs- Using AI to Drive Business Value</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
     
      <HeroSection
        bg=""
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="We build custom software to automate your business"
        subtitle=""
        buttonText="Get Started"
        buttonColor="primary"
        image="https://raw.githubusercontent.com/andheller/CL/80c470053ccf825bb24aabdd54701d61b76282ba/src/assets/undraw_Data_points_ubvs.svg"
        buttonOnClick={(e) => {
           {e.preventDefault(); window.artibotApi.trigger('bot:expand'); return false; }
        }}
      />
      <Steps
        bg=""
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        image="https://raw.githubusercontent.com/andheller/CL/dadf4858096f7ade15fea9df6101589a14f56e22/src/assets/undraw_google_analytics_a57d.svg"
      />
      <Benefits
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="We help make your data useful."
        subtitle=""
      />
      <CtaSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Ready to get started?"
        subtitle="We help businesses create clear websites that drive business growth. Creating a clear message is the simplest, most effective way to supercharge your website."
        buttonText="Get Started"
        buttonColor="primary"
        buttonOnClick={(e) => {
          {e.preventDefault(); window.artibotApi.trigger('bot:expand'); return false; }
        }}
      />

       </>
  );
}

export default IndexPage;
