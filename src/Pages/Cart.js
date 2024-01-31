import React from "react";
import { Container } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import addCart from "./../data/addCart.json";
import ImageSliderComponent from "./../components/imageGallary.js";

function Cart() {
  var [searchParams] = useSearchParams();
  const data = addCart.filter((addCart) => {
    return addCart.product_id === parseInt(searchParams.get("id"));
  });
  return (
    <section>
      <Container className="ms-10">
        <div>
          <img className="d-block w-50" src="stroller5.jpg" alt=" " />
        </div>
        <div className="col-sm-6">
          <ImageSliderComponent product_data={data[0].m_image} />
          <h5 className="Product-title">
            Babyhug Cocoon Stroller With Mosquito Net & Reversible Handle - Blue
          </h5>
          <ol className="Container Price ol xxx">
            <li className="Size"></li>
            <li>L 65 x B 53 x H 98 cm</li>
            <li> Get it by Monday, Sep 04 Dispatch Within: 24 Hours</li>
          </ol>
          <div className="col-sm-3">
            <h3 className="Price Rate">Discount Price</h3>
            <ol className="Rate">
              <li>
                {"Rs"}
                5110.35 MRP 5495 7%{" "}
              </li>
              <li>OFF club logo Club Price</li>
              <h6>5000.45 MRP Includes all taxes</h6>
            </ol>
          </div>
          <div className="col-sm-12">
            <lable for="quantity">Quantity</lable>
            <select id="quantity" value="{selected Quantity}">
              <option value={1}></option>
              <option value={2}></option>
            </select>
          </div>
        </div>
      </Container>
    </section>
  );
}
export default Cart;
