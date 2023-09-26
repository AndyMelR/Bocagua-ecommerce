import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/signup.css";
import "../../styles/index.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { store, actions } = useContext(Context);

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the last name change
  const handleLastName = (e) => {
    setLastName(e.target.value);
    setSubmitted(false);
  };

  // Handling the phone number change
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
    setSubmitted(false);
  };

  // Handling the address change
  const handleAddress = (e) => {
    setAddress(e.target.value);
    setSubmitted(false);
  };

  // Handling the postalcode change
  const handlePostalCode = (e) => {
    setPostalCode(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      lastName === "" ||
      phoneNumber === "" ||
      address === "" ||
      postalCode === "" ||
      email === "" ||
      password === ""
    ) {
      setError(true);
    } else {
      actions.setSignup(
        name,
        lastName,
        phoneNumber,
        address,
        postalCode,
        email,
        password
      );
      navigate("/login");

      setSubmitted(true);
      setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div className="success" style={{ display: submitted ? "" : "none" }}>
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Por favor rellene todos los campos</h1>
      </div>
    );
  };
  return (
    <>
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <div className="maincontainer">
        <div className="container-fluid">
          <div className="row no-gutter">
            <div className="col-md-6 bg-light">
              <div className="login d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-10 col-xl-7 mx-auto ">
                      <h3 className="d-flex justify-content-center">
                        Crea tu cuenta
                      </h3>
                      <p className="text-muted mb-4 d-flex justify-content-center">
                        Si ya tienes cuenta puedes acceder
                        <Link to="/login">
                          <a className="login " href="/login">
                            {" "}
                            aquí
                          </a>
                        </Link>{" "}
                      </p>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                          <Form.Label>Nombre</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Nombre"
                            autoFocus=""
                            onChange={handleName}
                            className="form-control rounded-pill border-0 shadow-sm px-4"
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicLastName"
                        >
                          <Form.Label>Apellido</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Apellido"
                            autoFocus=""
                            onChange={handleLastName}
                            className="form-control rounded-pill border-0 shadow-sm px-4"
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPhoneNumber"
                        >
                          <Form.Label>Teléfono</Form.Label>
                          <Form.Control
                            type="num"
                            placeholder="Telefono"
                            autoFocus=""
                            onChange={handlePhoneNumber}
                            className="form-control rounded-pill border-0 shadow-sm px-4"
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicAddress"
                        >
                          <Form.Label>Dirección</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Dirección"
                            autoFocus=""
                            onChange={handleAddress}
                            className="form-control rounded-pill border-0 shadow-sm px-4"
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPostalCode"
                        >
                          <Form.Label>C.P.</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Código Postal"
                            autoFocus=""
                            onChange={handlePostalCode}
                            className="form-control rounded-pill border-0 shadow-sm px-4"
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                            autoFocus=""
                            onChange={handleEmail}
                            className="form-control rounded-pill border-0 shadow-sm px-4"
                          />
                          <Form.Text className="text-muted">
                            Nunca compartiremos tus datos personales
                          </Form.Text>
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Contraseña</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={handlePassword}
                            className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <div className="d-grid gap-2 mt-2">
                          <Button
                            variant="primary"
                            type="button"
                            className="btnRegistration btn btn-outline-light text-uppercase mb-2 rounded-pill shadow-sm"
                            style={{
                              backgroundColor: "#A51890",
                              color: "#fff",
                            }}
                            onClick={handleSubmit}
                          >
                            Registrarme
                          </Button>
                          <Link to="/login">
                            <a
                              className="login text-align-center "
                              href="/login"
                            >
                              ¿Ya estás registrado? Accede
                            </a>
                          </Link>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-none d-md-flex bg-image"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
