import React, { Component } from "react";
import {
  Container,
  Form,
  Button,
  ButtonGroup,
  Table,
  Col,
  Row,
} from "react-bootstrap";
class FreqAnalysis extends Component {
  state = {
    text: "",
    freq: null,
    dia: null,
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
  analyze = (e) => {
    e.preventDefault();
    var temp = {};
    for (var i = 0; i < this.state.text.length; i++) {
      var ch = this.state.text[i];
      if (!temp.hasOwnProperty(ch)) temp[ch] = 0;
      temp[ch]++;
    }
    var temp2 = [];
    for (var char in temp)
      temp2.push([char, temp[char], temp[char] / this.state.text.length]);
    temp2.sort(function (a, b) {
      return b[1] - a[1];
    });
    this.setState({ freq: temp2 });
    temp = {};
    temp2 = [];
    for (i = 0; i < this.state.text.length - 1; i += 2) {
      ch = this.state.text[i] + this.state.text[i + 1];
      if (!temp.hasOwnProperty(ch)) temp[ch] = 0;
      temp[ch]++;
    }
    for (char in temp)
      temp2.push([char, temp[char], temp[char] / this.state.text.length]);
    temp2.sort(function (a, b) {
      return b[1] - a[1];
    });
    this.setState({ dia: temp2 });
  };
  render() {
    return (
      <div>
        <Container>
          <p>
            The study of the frequency of letters or groups of letters in a
            ciphertext is used as an aid to breaking classical ciphers.
          </p>
          <Form>
            <Form.Group>
              <Form.Label>Enter Cipher Text</Form.Label>
              <Form.Control as="textarea" rows="3" onChange={this.setText} />
            </Form.Group>

            <Form.Group>
              <ButtonGroup>
                <Button type="submit" onClick={this.analyze}>
                  Analyze Frequency
                </Button>
              </ButtonGroup>
            </Form.Group>
            {this.state.freq !== null && (
              <Form.Group>
                <Form.Label>Result </Form.Label>
                <Container>
                  <Row>
                    <Col>
                      <p>Single letter frequency</p>
                      <Table bordered size="sm">
                        <thead>
                          <tr>
                            <th>S.No</th>
                            <th>Character</th>
                            <th># Occurence</th>
                            <th>Frequency</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.freq.map((content, idx) => (
                            <tr>
                              <td>{idx + 1}</td>
                              <td>{this.state.freq[idx][0]}</td>
                              <td>{this.state.freq[idx][1]}</td>
                              <td>{this.state.freq[idx][2]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Col>
                    <Col>
                      <p> Ferquency of diagrams</p>
                      <Table bordered size="sm">
                        <thead>
                          <tr>
                            <th>S.No</th>
                            <th>Diagrams</th>
                            <th># Occurence</th>
                            <th>Frequency</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.dia.map((content, idx) => (
                            <tr>
                              <td>{idx + 1}</td>
                              <td>{this.state.dia[idx][0]}</td>
                              <td>{this.state.dia[idx][1]}</td>
                              <td>{this.state.dia[idx][2]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </Container>
              </Form.Group>
            )}
          </Form>
        </Container>
      </div>
    );
  }
}

export default FreqAnalysis;
