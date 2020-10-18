import React, { Component } from "react";
import { Container, Form, Button, ButtonGroup } from "react-bootstrap";
class Caesar extends Component {
  state = {
    text: "",
    key: null,
    result: "",
  };
  setText = (e) => {
    var temp = e.target.value;
    temp = temp.replace(/ /g, "");
    temp = temp.replace(/'/g, "");
    temp = temp.replace(/\./g, "");
    temp = temp.replace(/,/g, "");
    temp = temp.replace(/\?/g, "");
    temp = temp.toLowerCase();
    this.setState({ text: temp, result: "" });
  };
  setKey = (e) => {
    var x = parseInt(e.target.value);
    this.setState({ key: x, result: "" });
  };
  encrypt = (e) => {
    e.preventDefault();
    var temp,
      str = "";
    for (var i = 0; i < this.state.text.length; i++) {
      temp = ((this.state.text.charCodeAt(i) - 97 + this.state.key) % 26) + 97;
      str += String.fromCharCode(temp);
    }
    this.setState({ result: str });
  };
  decrypt = (e) => {
    e.preventDefault();
    var temp,
      str = "";
    for (var i = 0; i < this.state.text.length; i++) {
      temp =
        ((this.state.text.charCodeAt(i) - 97 - this.state.key + 26) % 26) + 97;
      str += String.fromCharCode(temp);
    }
    this.setState({ result: str });
  };
  render() {
    return (
      <div>
        <Container>
          <p>
            In Caesar Cipher,each letter in the plaintext is replaced by a
            letter some fixed number of positions down the alphabet
          </p>
          <Form>
            <Form.Group>
              <Form.Label>Enter Plain Text/ Cipher Text</Form.Label>
              <Form.Control as="textarea" rows="3" onChange={this.setText} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Enter Key </Form.Label>
              <Form.Control type="text" onChange={this.setKey} />
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
