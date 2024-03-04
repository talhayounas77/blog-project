import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// import { Button, Checkbox, Form, Input  } from "antd";
// const onFinish = (values) => {
//   console.log("Success:", values);
// };
// const onFinishFailed = (errorInfo) => {
//   console.log("Failed:", errorInfo);
// };

const Login = () => {
  return (
    <div
      className="container-fluid "
      style={{
       backgroundImage:`url(${require('./loginbg.jpg')})`,
        minHeight: "100vh",
        backgroundSize:"cover",
        margin: "0px",
        padding: "0px",
        boxSizing: "border-box",
        opacity:"o.9px"

        // display:"flex",
        // justifyContent:"start"

      }}
    > 
    <button className="btn btn-end btn-warning position-absolute mt-2 "style={{right:"10px"}}>Register</button>
      <div
        className="container flex-column  d-flex p-5  card-item card bg-transparent "
        style={{ maxWidth: "400px",top:"100px", color:"white" }}
      >
        <h1 className="d-flex justify-content-center mb-5 ">Login</h1>

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
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        {/* <Form
        className="form"
          name="basic"
          
        
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 500,
            
          }}
          initialValues={{
            remember: false,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
          
            label="Username "
            name="username"
            rules={[
              {
                color:"white",
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form> */}
      </div>
    </div>
  );
};

export default Login;
