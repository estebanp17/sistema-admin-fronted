import { useState } from "react";
import { useHistory } from "react-router";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

export default function Login() {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    if ((userName === "") | (password === ""))
      return window.alert("Los campos son obligatorios");
    history.push("/");
  };
  return (
    <>
      <div
        style={{ height: "100vh" }}
        className=" container-fluid d-flex justify-content-center align-items-center"
      >
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h5 className="title text-center">Iniciar Sesi&oacute;n</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row className="d-flex justify-content-center align-items-center">
                    <Col md="8" sm="12">
                      <FormGroup>
                        <label>Usuario</label>
                        <Input
                          placeholder="Usuario"
                          type="text"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="8" sm="12">
                      <FormGroup>
                        <label>Contrase&ntilde;a</label>
                        <Input
                          placeholder="Ingrese el password...."
                          type="password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter className="d-flex justify-content-center align-items-center">
                <Button
                  className="btn-fill mx-auto"
                  color="primary"
                  type="submit"
                  onClick={handleLogin}
                >
                  Ingresar
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
