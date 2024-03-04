import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Register = () => {
  return (
    <div
      className="container-fluid "
      style={{
        backgroundImage: `url(${require("./loginbg.jpg")})`,
        minHeight: "100vh",
        backgroundSize: "cover",
        margin: "0px",
        padding: "0px",
        boxSizing: "border-box",
        opacity: "o.9px",
      }}
    >
      <button
        className="btn btn-end btn-primary position-absolute mt-2 "
        style={{ right: "10px" }}
      >
        Login
      </button>
      <div
        className="container flex-column  d-flex p-5   card bg-transparent "
        style={{ maxWidth: "400px", top: "100px", color: "white" }}
      >
        <h1 className="d-flex justify-content-center mb-5 text-white">Registration</h1>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>UserName</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-white">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group> */}
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
