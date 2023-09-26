import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/login.css";
import "../../styles/index.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const { actions, store } = useContext(Context);

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

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError(true);
    } else {
      actions.setUser(email, password);
      navigate("/productos/panes");

      setSubmitted(true);
      setError(false);
    }
  };

  // Showing success message
const successMessage = () => {
  return (
  <div className="success" style={{display: submitted ? '' : 'none',}}>
<h1>User {email} successfully registered!!</h1>
</div>
);
};

// Showing error message if error is true
const errorMessage = () => {
return (
  <div
  className="error"
  style={{
  display: error ? '' : 'none',
  }}>
  <h1>Por favor rellene todos los campos</h1>
  </div>
);
};

  return (
    <>
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
      <div className="maincontainer">
        <div className="container-fluid">
          <div className="row no-gutter">
            <div className="col-md-6 d-none d-md-flex bg-image"></div>
            <div className="col-md-6 bg-light">
              <div className="login d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-10 col-xl-7 mx-auto ">
                      <h3 className="d-flex justify-content-center">Login</h3>
                      
                      <Form onSubmit={handleLogin}>
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
                            type="submit"
                            className="btn btnRegistration text-uppercase mb-2 rounded-pill shadow-sm"
                            style={{
                              backgroundColor: "#A51890",
                              color: "#fff",
                            }}
                            
                          >
                            Acceder
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
