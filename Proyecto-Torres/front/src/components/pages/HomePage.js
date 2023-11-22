import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import "../styles/components/pages/HomePage.css";

const HomePage = (props) => {
    return (
        <Container className="holder">
            <Container className="fs-3 mt-5">
                <p>Probando tamaño texto</p>
            </Container>
            <Container className="mb-5">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione debitis ipsum nostrum architecto. Harumariatur provident nemo officiis ad inventore vitae, non reprehenderit sed consectetur nostrum eligendi, eocumque laboriosam!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione debitis ipsumnostrum architecto. Harumpariatur provident nemo officiis ad inventore vitae, non reprehenderit sed consectetur nostrum eligendi, eos cumque laboriosam!Lorem
                </p>
            </Container>
            <Container className="text-center">
                <Row>
                    <Col lg={8}>
                        <Card className="mb-3" style={{ maxWidth: 'auto' }}>
                            <Row className="g-0">
                                <Col md={4}>
                                    <Card.Img src={'https://facundo-torres.github.io/Diplomatura-Reactjs/Git-5-Proyecto-1/img/Casa.png'} className="img-fluid rounded-start" alt="..." />
                                </Col>
                                <Col md={8}>
                                    <Card.Body>
                                        <Card.Title>Novedades</Card.Title>
                                        <Card.Text>Se suma casa en palermo para 17 personasFamilias/empresas.</Card.Text>
                                        <Card.Text><small className="text-body-secondary">Agosto 2023</small></Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col className="mb-5" lg={4}>
                        <Card className="text-bg-danger mb-3" style={{ maxWidth: '18rem' }}>
                            <Card.Header>Lo más codiciado</Card.Header>
                            <Card.Body>
                                <Card.Title>Depto</Card.Title>
                                <Card.Text>Tribunales, a unos pasos del obelisco y teatros con renombre de la Ciudad</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="form1" lg={8}>
                        <Form className="row g-3 needs-validation" noValidate>
                        <div className="col-md-4">
                            <label for="validationCustom01" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="validationCustom01" value="Facundo" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label for="validationCustom02" class="form-label">Apellido</label>
                            <input type="text" className="form-control" id="validationCustom02" value="Torres" required />
                            <div className="valid-feedback">Looks good!</div>
                        </div>
                        <div className="col-md-4">
                            <label for="validationCustomUsername" class="form-label">Usuario</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text" id="inputGroupPrepend">@</span>
                                <input type="text" className="form-control" id="validationCustomUsername"
                                    aria-describedby="inputGroupPrepend" required />
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label for="validationCustom03" className="form-label">Ciudad</label>
                            <input type="text" className="form-control" id="validationCustom03" required />
                            <div className="invalid-feedback">
                                Coloque en que Ciudad vive
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label for="validationCustom04" className="form-label">Estado</label>
                            <select class="form-select" id="validationCustom04" required>
                                <option selected disabled value="">Elija...</option>
                                <option>...</option>
                            </select>
                            <div className="invalid-feedback">Seleccionar Estado</div>
                        </div>
                        <div className="col-md-3">
                            <label for="validationCustom05" className="form-label">Zip</label>
                            <input type="text" className="form-control" id="validationCustom05" required />
                            <div className="invalid-feedback">Valide su codigo postal</div>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                <label className="form-check-label" for="invalidCheck">
                                    Estoy de acuerdo con las condiciones
                                </label>
                                <div className="invalid-feedback">
                                    Tienes que aceptar para continuar
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary" type="submit">Enviar</button>
                        </div>
                        </Form>
                    </Col>
                    <Col className="card2" lg={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Recoleta</Card.Title>
                                <Card.Text>El depto más alquilado, por</Card.Text>
                                <div className="mapa">
                                    <iframe title="Mapa"
                                        src={"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4644.691635877368!2d-58.38829110797576!3d-34.596752971622436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1692025450765!5m2!1ses-419!2sar"}
                                        width={"250"}
                                        height={"auto"}
                                        style={{ border: "0" }}
                                        loading={"lazy"}
                                        referrerPolicy={"no-referrer-when-downgrade"}
                                    ></iframe>
                                </div>
                                <Button href={'/'} className='btn btn-primary'>Listado completo</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default HomePage;
