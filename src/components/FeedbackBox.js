import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import FeedbackBox from "./FeedbackBox";

class FeedbackBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: "",
    };
  }

  handleChange = (event) => {
    this.setState({ feedback: event.target.value });
  };

  handleSubmit = (event) => {
    alert("Feedback submitted: " + this.state.feedback);
    event.preventDefault();
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h2>Feedback Box</h2>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="feedback">
                <Form.Label>Your Feedback</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={this.state.feedback}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default FeedbackBox;
