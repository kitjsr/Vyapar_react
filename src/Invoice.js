import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import "./Invoice.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MDBIcon } from "mdb-react-ui-kit";
import Alert from "react-bootstrap/Alert";
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Sidebar from "./Sidebar";
import DescriptionOutlined from '@mui/icons-material/DescriptionOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
export const Invoice = () => {
  const [balance, invoiceAmount, received, setBalance] = useState(0.0);
  const balance1 = () => {
    setBalance(invoiceAmount - received);
  };
  return (
    <Container className="top">
          <Row className="invoice">
            <Col md={6} className="heading">
              <h3>Enter details to make your first Sale 🚀</h3>
              <p className="para">
                First sale is made in less than a minute on Vyapar
              </p>
              <Form>
                <Row className="invoice1">
                  <Col md={6}>
                    <p>
                      <DescriptionOutlined className="desc"/> Invoice Details :
                    </p>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Invoice Number</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter invoice number"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Invoice Date</Form.Label>
                      <Form.Control type="date" placeholder="Invoice date" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <p><PersonOutlineOutlinedIcon className="person"/>Bill To :</p>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Customer Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter customer name"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="invoice2">
                  <Col>
                    <p><ViewInArOutlinedIcon/>Add Sample item</p>
                  </Col>
                </Row>
                <Row className="invoice1">
                  <Col>
                    <p><CurrencyRupeeIcon className="person"/>Invoice calculation : </p>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Invoice Amount</Form.Label>
                      <Form.Control type="number" placeholder="0.00" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Received</Form.Label>
                      <Form.Control type="number" placeholder="0.00" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Alert variant="success">
                      <Row>
                        <Col md={6}>Balance</Col>
                        <Col md={6} className="am">
                          {balance}
                        </Col>
                      </Row>
                    </Alert>
                  </Col>
                </Row>
                <Row>
                  <Col className="but2">
                    <Button type="submit" className="but3">
                      Create your invoice
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col md={6} className="sample">
              <h5>Sample Invoice</h5>
              <br />
              <Image
                src="https://consumercomplaintscourt.com/wp-content/uploads/IMG-20230413-WA0068.jpg"
                className="img"
              />
            </Col>
          </Row>
    </Container>
  );
};

export default Invoice;
