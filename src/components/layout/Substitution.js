import React, { Component } from "react";
import { Container, Form, Button, ButtonGroup } from "react-bootstrap";
var mp = new Map();
class Caesar extends Component {
  state = {
    text: "",
    key: "",
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
    this.setState({ text: temp, result:"" });
  };
  setKey = (e) => {
    console.log(e.target.value);
    this.setState({ key: e.target.value.toLowerCase() , result:""});
  };
  encrypt = (e) => {
    e.preventDefault();
    mp.clear();
    for(var i=0;i<26;i++)
    {
        mp.set(String.fromCharCode(i+97),this.state.key.charAt(i));
    }
    var str="";
    for(var i=0;i<this.state.text.length;i++)
    {

        str += mp.get(this.state.text.charAt(i));
    }
    this.setState({ result: str });
  };
  decrypt = (e) => {
     e.preventDefault();
    mp.clear();
    for(var i=0;i<26;i++)
    {
        mp.set(this.state.key.charAt(i),String.fromCharCode(i+97));
    }
    var str="";
    for(var i=0;i<this.state.text.length;i++)
    {

        str += mp.get(this.state.text.charAt(i));
    }
    this.setState({ result: str });
  };
  render() {
    return (
      <div>
        <Container>
          <p>
            It is an improvement to the Caesar Cipher. Instead of shifting the
            alphabets by some number, this scheme uses some permutation of the
            letters in alphabet.
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
