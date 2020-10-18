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
    this.setState({ text: temp });
  };
  setKey = (e) => {
    var x = parseInt(e.target.value);
    this.setState({ key: x });
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
          <Form>
            <Form.Group>
              <Form.Label>Enter Plain Text/ Cipher Text</Form.Label>
              <Form.Control as="textarea" rows="3" onChange={this.setText} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Enter Key </Form.Label>
              <Form.Control type="text" onChange={this.setKey} />
            </Form.Group>
            <ButtonGroup>
              <Button type="submit" onClick={this.encrypt}>
                Encrypt
              </Button>
              <Button type="submit" onClick={this.decrypt}>
                Decrypt
              </Button>
            </ButtonGroup>
          </Form>
          <p>{this.state.result}</p>
        </Container>
      </div>
    );
  }
}

export default Caesar;
