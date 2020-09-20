import React from "react";
import Section from "components/Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "components/SectionHeader";
import Card from "react-bootstrap/Card";
import Features from "components/Features";

function Benefits(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-center">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
        />
        <Card>
          <Features
            columns={2}
            imageRatio="4by3"
            items={[
              {
                title: "Automation",
                body:
                  "Don’t waste your employees’ valueable time. Automate the boring stuff.",
                image: "https://raw.githubusercontent.com/andheller/CL/dadf4858096f7ade15fea9df6101589a14f56e22/src/assets/undraw_spreadsheet_69ax.svg",
              },
              {
                title: "Natural Language Processing",
                body:
                  "Discover your own treasure trove of historical text and spreadsheet data.",
                image: "https://raw.githubusercontent.com/andheller/CL/dadf4858096f7ade15fea9df6101589a14f56e22/src/assets/undraw_file_analysis_8k9b.svg",
              },
              {
                title: "Computer Vision",
                body:
                  "Images can hold a tremendous amount of valuable data and insights. ",
                image:
                  "https://raw.githubusercontent.com/andheller/CL/dadf4858096f7ade15fea9df6101589a14f56e22/src/assets/undraw_Surveillance_re_8tkl.svg",
              },
              {
                title: "Data Insights",
                body:
                  "Use the data you have to drive business value.",
                image:
                  "https://raw.githubusercontent.com/andheller/CL/dadf4858096f7ade15fea9df6101589a14f56e22/src/assets/undraw_usability_testing_2xs4.svg",
              },
            ]}
          />
        </Card>
      </Container>
    </Section>
  );
}

export default Benefits;
