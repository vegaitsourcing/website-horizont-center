import React from "react";

/** reactstrap */
import { Col, Row } from "reactstrap";

export const BlockMainTop = ({ items }) => {
  return (
    <section data-filter="overlay-mute" className="block-top" style={{ backgroundImage: `url(${items.image})` }}>
      <Row className="row">
        <Col xs={12} lg={9} className="text-center mx-auto border border-warning py-5 px-4 my-5">
          <span dangerouslySetInnerHTML={{ __html: items.title }}></span>
          <div className="mx-auto text-white">
            <span dangerouslySetInnerHTML={{ __html: items.body }}></span>
          </div>
        </Col>
      </Row>
    </section>
  );
};
