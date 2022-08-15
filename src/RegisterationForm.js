import React, { useState } from "react";
import './RegisterationForm.css';

function RegistrationForm() {
    const [inputValues, setInputValue] = useState({
        name: "",
        email: "",
        mobile: "",
        country: "",
        city: "",
        state: "",
        message: ""
    });

    const [validation, setValidation] = useState({
        name: "",
        email: "",
        mobile: "",
        country: "",
        city: "",
        state: "",
        message: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        if (name === 'mobile' && value.length > 10) {
            return
        }
        setInputValue({ ...inputValues, [name]: value.trim() });
    }

    const checkValidation = () => {
        let errors = validation;

        if (!inputValues.name) {
            errors.name = "Name is required";
        } else {
            errors.name = "";
        }

        const emailCond = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
        if (!inputValues.email) {
            errors.email = "Email is required";
        } else if (!inputValues.email.match(emailCond)) {
            errors.email = "Please give a valid email address";
        } else {
            errors.email = "";
        }

        if (inputValues.mobile && inputValues.mobile.length !== 10) {
            errors.mobile = "Mobile number should be of 10 digits";
        }

        setValidation({ ...errors });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        checkValidation();
    };

    return (
        <div className="outer-body">
            <div className="sign-up-form">
                <h3> Registration Form</h3>
                <form
                    id="registrationForm"
                    action="/"
                    method="POST"
                    onSubmit={handleSubmit}
                >
                    <div className="form-control">
                        <input
                            placeholder="Name"
                            type="string"
                            name="name"
                            id="name"
                            className="input-field"
                            onChange={(e) => handleChange(e)}
                            value={inputValues.name}
                            // required
                        />
                        {validation.name && <p className="error-message">{validation.name}</p>}
                        {validation.name && console.log(validation)}
                    </div>
                    <div className="form-control">
                        <input
                            placeholder="Email"
                            type="email"
                            name="email"
                            className="input-field"
                            onChange={(e) => handleChange(e)}
                            value={inputValues.email}
                            // required
                        />
                        {validation.email && <p className="error-message">{validation.email}</p>}
                    </div>
                    <div className="form-control">
                        <input
                            placeholder="Mobile"
                            type="number"
                            id="mobile"
                            name="mobile"
                            className="input-field"
                            onChange={(e) => handleChange(e)}
                            value={inputValues.mobile}
                        />
                        {validation.mobile && <p className="error-message">{validation.mobile}</p>}
                    </div>
                    <div className="form-control">
                        <input
                            placeholder="Country"
                            type="string"
                            name="country"
                            className="input-field"
                            onChange={(e) => handleChange(e)}
                            value={inputValues.country}
                        />
                    </div>
                    <div className="form-control">
                        <input
                            placeholder="State"
                            type="string"
                            name="state"
                            className="input-field"
                            onChange={(e) => handleChange(e)}
                            value={inputValues.state}
                        />
                    </div>
                    <div className="form-control">
                        <input
                            placeholder="City"
                            type="string"
                            name="city"
                            className="input-field"
                            onChange={(e) => handleChange(e)}
                            value={inputValues.city}
                        />
                    </div>
                    <div className="form-control">
                        <input
                            placeholder="Message"
                            type="string"
                            name="message"
                            className="input-field"
                            onChange={(e) => handleChange(e)}
                            value={inputValues.message}
                        />
                    </div>
                    <button type="submit" id="submit-button">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegistrationForm;