import React, { Component } from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import Caesar from "../layout/Caesar";
import Affine from "../layout/Affine";
import Substitution from "../layout/Substitution";
class Home extends Component {
  state = {
    key: "Caesar",
  };
  setKey = (K) => {
    this.setState({ key: K });
  };
  render() {
    return (
      <Container>
        <br />
        <h1>dCoder</h1>
        <h3>A tool for Cryptography</h3>
        <p>
          Dcoder, as the name suggests, decodes or encodes all popular
          encodings.
        </p>
        <Tabs
          id="controlled-tab-example"
          activeKey={this.state.key}
          onSelect={(k) => this.setKey(k)}
        >
          <Tab eventKey="Caesar" title="Caesar">
            <Caesar />
          </Tab>
          <Tab eventKey="Affine" title="Affine">
            <Affine />
          </Tab>
          <Tab eventKey="Substituion" title="Substituion">
            <Substitution />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default Home;
