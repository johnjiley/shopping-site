import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function JustifiedExample() {
  return (
    <section>
      <container>
        <div>
          <Tabs
            defaultActiveKey="profile"
            id="justify-tab-example"
            className="mb-5"
            justify
          >
            <Tab eventKey="Address" title="Address">
              Mrityunjaydham, P.O.-Rajawala, Via Premnagar,, Uttarakhand 248007
            </Tab>

            <Tab eventKey="Description" title="Description">
              You May Also like
              <div class="row">
                <div class="col-3 mt-3">
                  <card>
                    <img className="john" src="stroller2.jpg" alt=" " />
                  </card>
                </div>
              </div>
              {/* <div>
                <Row>
                  <Col xs={6} md={4}>
                    <img className="john" src="stroller2.jpg" alt=" " />
                  </Col>
                </Row>                 */}
              {/* </div> */}
            </Tab>
            <Tab eventKey="Comments" title="Comments">
              {/* Content for the Comments tab */}
              <Form>
                <Form.Group controlId="comments">
                  <Form.Label>We are Happy To Help</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                  <Button variant="info">Add Comment</Button>
                </Form.Group>
              </Form>
            </Tab>
            <Tab eventKey="Reviews" title="Reviews">
              {/* Content for the Reviews tab */}
              <Form>
                <Form.Group controlId="review">
                  <Form.Label>Please Share Your Review</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                  <Button variant="dark">Add Your Review</Button>
                </Form.Group>
              </Form>
            </Tab>
          </Tabs>
        </div>
        <div className="row">
          <div className="col-md-12">{/* <Cart /> */}</div>
        </div>
      </container>
    </section>
  );
}

export default JustifiedExample;
