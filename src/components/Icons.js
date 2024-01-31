import React from "react";
import { MDBBadge, MDBBtn, MDBIcon } from "mdb-react-ui-kit";

export default function App() {
  return (
    <>
      <MDBBtn style={{ backgroundColor: "#3b5998" }} href="#">
        <MDBIcon fab icon="facebook-f" />
        <MDBBadge color="danger" className="ms-2">
          8
        </MDBBadge>
      </MDBBtn>

      <button
        type="button"
        className="btn btn-primary position-relative mx-3"
        style={{ backgroundColor: "#ac2bac" }}
      >
        <i className="fab fa-instagram"></i>
        <MDBBadge
          pill
          color="danger"
          className="position-absolute top-0 start-100 translate-middle"
        >
          +99 <span className="visually-hidden">unread messages</span>
        </MDBBadge>
      </button>

      <button
        type="button"
        className="btn btn-primary position-relative"
        style={{ backgroundColor: "#55acee" }}
      >
        Twitter <i className="fab fa-twitter ms-1"></i>
        <MDBBadge
          pill
          color="danger"
          className="position-absolute top-0 start-100 translate-middle border border-light p-2"
        >
          <span className="visually-hidden">unread messages</span>
        </MDBBadge>
      </button>
    </>
  );
}
