import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
// import { Grid } from "react-bootstrap";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        More Info
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Our Motive</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Electronic commerce (e-commerce) refers to companies and individuals
          that buy and sell goods and services over the internet. E-commerce
          operates in different types of market segments and can be conducted
          over computers, tablets, smartphones, and other smart devices. Nearly
          every imaginable product and service is available through e-commerce
          transactions, including books, music, plane tickets, and financial
          services such as stock investing and online banking. As such, it is
          considered a very disruptive technology.eCommerce websites have become
          an integral part of any business’ success. The 55% increase in online
          sales during the pandemic saw business owners moving from physical
          storefronts to digital solutions to sell online, helping to expand
          their reach and increase revenue.Whether you’re a beginner or already
          have a physical store, building an eCommerce site requires careful
          attention to design, aesthetics, navigation, and accessibility. These
          elements are vital for leaving a lasting impression and delivering a
          smooth shopping experience.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;
