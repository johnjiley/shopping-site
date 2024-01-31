import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import productCart from "./../data/cartDetail.json";
function BasicExample() {
  return (
    <div className="row">
      {productCart.map((cart, i) => (
        <div className="col-3 mt-3" key={i}>
          <Card>
            <Card.Img variant="top" src={cart.product_image} />
            <Card.Body>
              <Card.Title>{cart.product_name}</Card.Title>
              <Card.Text>{cart.product_description}</Card.Text>
              <Card.Text>{cart.product_price}</Card.Text>
              <Button
                as={Link}
                to={"/go-somewhere?id=" + cart.product_id}
                variant="primary"
              >
                ADD TO CART
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default BasicExample;
