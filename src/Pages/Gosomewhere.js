// GoSomewhere.js
import React from "react";
import { Container } from "react-bootstrap";
import ImageSliderComponent from "./../components/imageGallary.js";
import Button from "react-bootstrap/Button";
import { Link, useSearchParams } from "react-router-dom";
import productCart from "./../data/cartDetail.json";

function GoSomewhere() {
  var [searchParams] = useSearchParams();
  // var id = searchParams.get("id");
  // console.log(productCart.product_id);
  const data = productCart.filter((carts) => {
    return carts.product_id === parseInt(searchParams.get("id"));
  });

  return (
    <>
      <section>
        <Container className="my-3">
          <div className="row">
            <div className="col-sm-6">
              <ImageSliderComponent product_data={data[0].m_image} />
            </div>
            <div className="col-sm-6">
              <h1 className="product-title">{data[0].product_name}</h1>
              <ul className="List-unstyled price-container">
                <li className="price-old">
                  <p>{data[0].product_detail}</p>
                  <p> {data[0].product_price}</p>
                  {/* <br></br> */}
                  <p>{data[0].product_description}</p>
                  {/* <br></br> */}
                  <div className="">
                    <Button
                      to={"/mycart"}
                      variant="dark"
                      size="m"
                      onClick={() => {}}
                    >
                      DEAL OF THE DAY
                    </Button>
                  </div>
                  <p>{data[0].product_offer}</p>
                  <p>{data[0].productprice_before}</p>
                  <p>{data[0].productprice_after}</p>
                  <p>{data[0].product_discount}</p>
                  <p>{data[0].product_size}</p>
                  <p>{data[0].product_color}</p>
                  <p>{data[0].product_material}</p>
                  <p>{data[0].product_brand}</p>

                  {/* <ul>
                    <li>Product ID: 13905871</li>
                    <li>Before</li>
                    <li>
                      MRP incl. all taxes, Add'l charges may apply on discounted
                      price
                    </li>

                    <li>Save Rs 5000</li>
                  </ul> */}
                </li>
                {/* <br></br>
                <li>After</li>
                <li>Pay This Rs 5000.00 </li>
                <li>Discount Price(Offer)</li>
                <br></br>
                <li className="col-sm-3">Product Description</li>
                <li>
                  taking a stroll with your little one in the city can be
                  tricky. The stylish Babyhug Cocoon Stroller makes your outing
                  comfortable and safe with easy to move swivel wheels and
                  sturdy frame. The reversible handle allows the baby to face
                  you when he or she is younger and face forward as they get
                  older. Three reclining positions for added comfort including
                  flat position for newborn. Its easy to fold and compact design
                  is convenient for storage at home and during travel.
                </li> */}
              </ul>
              <div className="d-grid gap-1">
                <Button
                  as={Link}
                  to={"/mycart"}
                  variant="danger"
                  size="lg"
                  onClick={() => {}}
                >
                  ADD TO CART
                </Button>
              </div>

              <div className="d-grid gap-1 mt-2">
                <Button as={Link} to={"/unproceed"} variant="primary" size="lg">
                  Proceed To CheckOut
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default GoSomewhere;
