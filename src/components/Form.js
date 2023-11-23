
import React, { useState } from 'react';
import MapContainer from './MapContainer';
import Logo from '../images/3sigma-logo.png';
import { Form, FormGroup, FormControl, Button, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Forms() {
    const [formData, setFormData] = useState({
        leadname: '',
        email: '',
        phonenumber: '',
        formAddress: '',
        salevalue: '',
        date: '',
        time: '',
        formOption: 'Select option',
        formProduct: '',
        note: '',
    });

    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            formData.leadname === '' ||
            formData.email === '' ||
            formData.phonenumber === '' ||
            formData.formOption === 'Select option' ||
            formData.formProduct === ''
        ) {
            alert('Please fill in all required fields.');
            return;
        }

        const storedData = JSON.parse(localStorage.getItem('formData')) || [];
        storedData.push(formData);
        localStorage.setItem('formData', JSON.stringify(storedData));

        setShowAlert(true);

        setFormData({
            leadname: '',
            email: '',
            phonenumber: '',
            formAddress: '',
            salevalue: '',
            date: '',
            time: '',
            formOption: 'Select option',
            formProduct: '',
            note: '',
        });
    };

    return (
        <>
            <div className="container form-section p-5 col-lg-8">
                <div className="d-flex justify-content-between items-center header">
                    <h4 className="title">Magnabox Private limited</h4>
                    <a href="#">
                        <img className="img-fluid" src={Logo} alt="logo" />
                    </a>
                </div>
                <div className="d-flex justify-content-between items-center mt-3 button">
                    <h6 className="subtitle">Add new lead form</h6>
                    <button type="button" class="btn btn-outline-danger btn-sm">Cancel</button>
                </div>

                <Form className="form" onSubmit={handleSubmit}>
                    <Form.Group controlId="formLeadname" className="mt-3">
                        <Form.Label className="form-label">Lead name <span>*</span></Form.Label>
                        <div className="input">
                            <Form.Control
                                className="px-5"
                                name="leadname"
                                type="text"
                                placeholder="Enter lead name"
                                onChange={handleChange}
                            />

                            <FontAwesomeIcon className="icon" icon="fa-solid fa-user" />
                        </div>
                    </Form.Group>
                    <Form.Group controlId="formEmail" className="mt-3">
                        <Form.Label className="form-label">Email ID <span>*</span></Form.Label>
                        <div className="input">
                            <Form.Control
                                className="px-5"
                                name="email"
                                type="text"
                                placeholder="Example@anyemail.com"
                                onChange={handleChange}
                            />

                            <FontAwesomeIcon className="icon" icon="fas fa-envelope" />
                        </div>
                    </Form.Group>
                    <Form.Group controlId="formPhonenumber" className="mt-3">
                        <Form.Label className="form-label">Phone number <span>*</span></Form.Label>
                        <div className="input">
                            <Form.Control
                                className="px-5"
                                name="phonenumber"
                                type="text"
                                placeholder="+91 8800688763"
                                onChange={handleChange}
                            />

                            <FontAwesomeIcon className="icon" icon="fas fa-phone" />
                        </div>
                    </Form.Group>
                    <Form.Group controlId="formAddress" className="mt-3">
                        <Form.Label className="form-label">Address</Form.Label>
                        <div className="input">
                            <Form.Control
                                name="formAddress"
                                className="px-5"
                                type="text"
                                placeholder="Gugurgram ,India"
                                onChange={handleChange}
                            />
                            <FontAwesomeIcon className="icon" icon="fas fa-globe" />
                        </div>
                    </Form.Group>
                    <Form.Group controlId="formMap" className="mt-3">
                        <MapContainer />
                    </Form.Group>
                    <Form.Group controlId="formSaleValue" className="mt-3">
                        <Form.Label className="form-label">Sale value</Form.Label>
                        <div className="input">
                            <Form.Control
                                name="salevalue"
                                className="px-5"
                                type="text"
                                placeholder="50,00,000"
                                onChange={handleChange}
                            />
                            <FontAwesomeIcon className="icon" icon="fas fa-rupee" />

                        </div>
                    </Form.Group>
                    <Form.Group controlId="formDate" className="mt-3">
                        <Form.Label className="form-label">Date</Form.Label>
                        <div className="input">
                            <Form.Control
                                name="date"
                                className="px-5"
                                type="text"
                                placeholder="29 August 2023"
                                onChange={handleChange}
                            />
                            <FontAwesomeIcon className="icon" icon="fas fa-calendar" />
                        </div>
                    </Form.Group>
                    <Form.Group controlId="formTime" className="mt-3">
                        <Form.Label className="form-label">Time</Form.Label>
                        <div className="input">
                            <Form.Control
                                name="time"
                                className="px-5"
                                type="text"
                                placeholder="20:21 pm"
                                onChange={handleChange}
                            />
                            <FontAwesomeIcon className="icon" icon="fas fa-clock" />
                        </div>
                    </Form.Group>
                    <FormGroup controlId="formOption" className="mt-3">
                        <Form.Label className="form-label">Options</Form.Label>
                        <div className="input">
                            <FormControl as="select" className="px-5" onChange={handleChange}>
                                <option>Select option</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                            </FormControl>
                            <FontAwesomeIcon className="icon" icon="fas fa-list" />
                            <FontAwesomeIcon className="icon-2" icon="fas fa-chevron-circle-down" />
                        </div>
                    </FormGroup>
                    <Form.Group controlId="formProduct" className="mt-3">
                        <Form.Label className="form-label">Products</Form.Label>
                        <div className="input">
                            <FormControl as="select" className="px-5" onChange={handleChange}>
                                <option></option>
                                <option>product-1</option>
                                <option>product-2</option>
                                <option>product-3</option>
                            </FormControl>
                            <FontAwesomeIcon className="icon" icon="fas fa-list-alt" />
                            <FontAwesomeIcon className="icon-2" icon="fas fa-chevron-circle-down" />

                        </div>

                    </Form.Group>
                    <Form.Group controlId="formNote" className="mt-3">
                        <Form.Label className="form-label">Note</Form.Label>
                        <div className="input">
                            <Form.Control
                                name="note"
                                className="px-5 pt-3 textarea"
                                as="textarea"
                                rows={4}
                                placeholder="Enter note"
                                type="text"
                                onChange={handleChange}
                            />
                        </div>
                    </Form.Group>
                    <Button type="submit" className="button mt-5">
                        Add lead
                    </Button>
                </Form>

                {showAlert && (
                    <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                        Form submitted successfully!
                    </Alert>
                )}
            </div>
        </>
    );
}

export default Forms;
