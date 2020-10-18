import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Caesar from '../layout/Caesar'
class Home extends Component {
    
  render() {
    return (
      <Container>
        <br/>
        <h1>Dcoder</h1>
        <h3>A tool for Cryptography</h3>
        <p> Dcoder, as the name suggests, decodes or encodes all popular encodings.</p>
          <Caesar/>

      </Container>
    );
  }
}

export default Home;
