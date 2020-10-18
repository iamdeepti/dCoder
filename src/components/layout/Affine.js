import React, { Component } from "react";
import { Container, Form, Button, ButtonGroup, Col } from "react-bootstrap";
var mp = new Map();
mp.set(1, 1);
mp.set(3, 9);
mp.set(5, 21);
mp.set(7, 15);
mp.set(9, 3);
mp.set(11, 19);
mp.set(15, 7);
mp.set(17, 23);
mp.set(19, 11);
mp.set(21, 5);
mp.set(23, 17);
mp.set(25, 25);

class Caesar extends Component {
  state = {
    text: "",
    a: null,
    b: null,
    result: "",
  };

  setText = (e) => {
    this.setState({ result: "" });
    var temp = e.target.value;
    temp = temp.replace(/ /g, "");
    temp = temp.replace(/'/g, "");
    temp = temp.replace(/\./g, "");
    temp = temp.replace(/,/g, "");
    temp = temp.replace(/\?/g, "");
    temp = temp.toLowerCase();
    this.setState({ text: temp });
  };
  setKey1 = (e) => {
    var x = parseInt(e.target.value);
    this.setState({ a: x });
  };
  setKey2 = (e) => {
    this.setState({ result: "" });

    var x = parseInt(e.target.value);
    this.setState({ b: x });
  };

  encrypt = (e) => {
    e.preventDefault();
    this.setState({ result: "" });

    var a = this.state.a,
      b = this.state.b;

    var temp,
      str = "";
    for (var i = 0; i < this.state.text.length; i++) {
      var x = this.state.text.charCodeAt(i) - 97;
      temp = ((x * a + b) % 26) + 97;
      str += String.fromCharCode(temp);
    }
    this.setState({ result: str });
  };
  decrypt = (e) => {
    e.preventDefault();
    this.setState({ result: "" });
    var a = this.state.a,
      b = this.state.b;
    var temp,
      str = "";
    if (!mp.has(a)) {
      this.setState({
        result: "Can't be computed gcd of a and 26 should be 1",
      });
    } else {
      a = mp.get(a);
      for (var i = 0; i < this.state.text.length; i++) {
        var x = this.state.text.charCodeAt(i) - 97;
        temp = ((((x - b + 26) % 26) * a) % 26) + 97;
        str += String.fromCharCode(temp);
      }
      this.setState({ result: str });
    }
  };
  render() {
    return (
      <div>
        <Container>
          <p>Affine cipher is of the from E(x) = (ax + b) mod 26</p>
          <Form>
            <Form.Group>
              <Form.Label>Enter Plain Text/ Cipher Text</Form.Label>
              <Form.Control as="textarea" rows="3" onChange={this.setText} />
            </Form.Group>
            <Form.Group>
              <Form.Row>
                <Col>
                  <Form.Label>Enter Key a</Form.Label>
                  <Form.Control type="text" onChange={this.setKey1} />
                </Col>
                <Col>
                  <Form.Label>Enter Key b</Form.Label>
                  <Form.Control type="text" onChange={this.setKey2} />
                </Col>
              </Form.Row>
            </Form.Group>
            <Form.Group>
              <ButtonGroup>
                <Button type="submit" onClick={this.encrypt}>
                  Encrypt
                </Button>
                <Button type="submit" onClick={this.decrypt}>
                  Decrypt
                </Button>
              </ButtonGroup>
            </Form.Group>
            {this.state.result.length !== 0 && (
              <Form.Group>
                <Form.Label>Result </Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={this.state.result}
                  readOnly
                ></Form.Control>
              </Form.Group>
            )}
          </Form>
        </Container>
      </div>
    );
  }
}

export default Caesar;
