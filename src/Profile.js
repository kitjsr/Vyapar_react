import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import "./Profile.css";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Button from 'react-bootstrap/Button';

export const Profile = () => {
  return (
    <Container className='heading'>
        <Row style={{padding:'0 10px'}}>
            <Col>
                <Row>
            <Col>
                <h3>Create Profile</h3>
            </Col>
        </Row>
        <Form>
            <Row>
                <Col md={2}>
                    <p className='add'>Add <br/>logo<EditOutlinedIcon /></p>
                </Col>
            </Row>
            <Row className='heading1'>
                <Col md={4}>
                    <p>Business Details</p>
                </Col>
                <Col md={4}>
                    <p>More Details</p>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Business name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Business Name" />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Business type</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Select Business Type</option>
                            <option value="1">Retail</option>
                            <option value="2">Wholesale</option>
                            <option value="3">Distributor</option>
                            <option value="4">Manufacturing</option>
                            <option value="5">Service</option>
                            <option value="6">Others</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md={4} rowspan={2}>
                    <Form.Group className="mb-3" controlId="formBasicCategory">
                        <Form.Label>Business Category</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Select Business Category</option>
                            <option value="1">Retail</option>
                            <option value="2">Wholesale</option>
                            <option value="3">Distributor</option>
                            <option value="4">Manufacturing</option>
                            <option value="5">Service</option>
                            <option value="6">Others</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Form.Group className="mb-3" controlId="formBasicMobile">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control type="digit" placeholder="Enter Phone Number" />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>GSTIN</Form.Label>
                        <Form.Control type="number" placeholder="Enter GSTIN" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Form.Group className="mb-3" controlId="formBasicCategory">
                        <Form.Label>State</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Select state</option>
                            <option value="1">Retail</option>
                            <option value="2">Wholesale</option>
                            <option value="3">Distributor</option>
                            <option value="4">Manufacturing</option>
                            <option value="5">Service</option>
                            <option value="6">Others</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Pincode</Form.Label>
                        <Form.Control type="number" placeholder="Enter pincode" />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Business Address</Form.Label>
                        <Form.Control as="textarea" placeholder='Enter Business Address' rows={3} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col className='but'>
                    <Button variant="danger">Save</Button>
                </Col>
            </Row>
        </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default Profile
