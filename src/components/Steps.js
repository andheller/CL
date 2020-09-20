import React from "react";
import Section from "components/Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Features2 from "components/Features2";
import "components/Steps.scss";

function Steps(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center text-lg-left">
            <figure className="Steps__image-container mx-auto">
              <Image src={props.image} fluid={true} />
            </figure>
          </Col>
          <Col className="offset-lg-1 mt-5 mt-lg-0 ">
            <Features2
              items={[
                {
                  title: "Schedule a Key Value Analysis",
                  description:
                    "Find a time that works for you. Before our meeting, we get a little information from you so we can make the most of our time.",
                  iconClass: "",
                  iconColor: "primary",
                },
                {
                  title: "Development",
                  description:
                    "We develop a prototype solution with your feedback until you are more than satisfied. We aim to always provide 10x more value than we charge.",
                  iconClass: "",
                  iconColor: "primary",
                },
                {
                  title: "Implementation",
                  description:
                    "Liftoff! We work with you to launch your new solution. We work to make sure everything stays updated and continues working even after launch.",
                  iconClass: "",
                  iconColor: "primary",
                },
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default Steps;
