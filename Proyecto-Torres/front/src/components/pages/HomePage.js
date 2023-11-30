import React from 'react';
import { Container, Row, Col, Card, Form, Button, FloatingLabel, ListGroup } from 'react-bootstrap';



const HomePage = (props) => {
  return (
    <main>
   
      <Container className="fs-3 mt-5">
        <p>Probando tamaño texto ....</p>
      </Container>
      <Container className="mb-5">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione debitis ipsum nostrum architecto.
          Harum pariatur provident nemo officiis ad inventore vitae, non reprehenderit sed consectetur nostrum
          eligendi, eos cumque laboriosam! Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ratione debitis ipsum nostrum architecto. Harum pariatur provident nemo officiis ad inventore vitae,
          non reprehenderit sed consectetur nostrum eligendi, eos cumque laboriosam! Lorem
        </p>
      </Container>
    
     
      <Container className="justify-content-md-center">
        <Row>
          <Col lg={8}>
            <Card className="mb-3">
              <Row className="g-0">
                <Col md={4}>
                  <Card.Img
                    src="https://facundo-torres.github.io/Diplomatura-Reactjs/Git-5-Proyecto-1/img/Casa.png"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </Col>
                <Col md={8} className="novedades">
                  <Card.Body>
                    <Card.Title>Novedades</Card.Title>
                    <Card.Text>
                      Se suma casa en palermo para 17 personas Familias/empresas.
                    </Card.Text>
                    <Card.Text>
                      <small className="text-body-secondary">Agosto 2023</small>
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col lg={4} className="mb-5">
            <Card className="text-danger mb-3" style={{ maxWidth: '18rem' }}>
              <Card.Header>Depto más alquilado</Card.Header>
              <Card.Body>
                <Card.Title>Tribunales</Card.Title>
                <Card.Text>
                  Cerca de puntos turisticos más emblematicos de la Ciudad Porteña:
                  Obelisco, Teatro Colón, Iglesias y catedrales, Edificios con valor arquitectónico, Centro Cultural Borges,Croque Madame en el Palacio Paz, Galerias Pacifico, Teatro Gran Rex.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8} className="card2">
            <Card>
              <Card.Header>Departamentos y casas</Card.Header>
              <Card.Body>
                <Card.Title>Zonas recomendadas</Card.Title>
                <Card.Text>
                  <ListGroup>
                    <ListGroup.Item>Barrio Norte</ListGroup.Item>
                    <ListGroup.Item>Palermo</ListGroup.Item>
                    <ListGroup.Item>Recoleta</ListGroup.Item>
                    <ListGroup.Item>Tribunales</ListGroup.Item>

                  </ListGroup>
                </Card.Text>
              
              </Card.Body>
            </Card>



          </Col>
          <Col xs={6} md={4} className="card2">

            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Recoleta</Card.Title>
                <Card.Text>El depto más valorado</Card.Text>
                <div className="mapa">
                  <iframe
                    title="Mapa"
                    src={
                      'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4644.691635877368!2d-58.38829110797576!3d-34.596752971622436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1692025450765!5m2!1ses-419!2sar'
                    }
                    width={'250'}
                    height={'auto'}
                    style={{ border: '0' }}
                    loading={'lazy'}
                    referrerPolicy={'no-referrer-when-downgrade'}
                  ></iframe>
                </div>
                <a
                  href="/Novedades" className="btn btn-primary" >
                  Departamentos
                </a>
              </Card.Body>
            </Card>
          </Col>

        </Row>

        <Row>
          <Container fluid>
            <Col className="form1">
              <Form className="row g-3" noValidate>


                <Row className="g-2">
                  <Row>
                    <div className="text-center" style={{ backgroundColor: '#dc3545 ', color: 'white', fontSize: '25px', padding: '15px' }}>
                      Haga aquí su consulta
                    </div>

                  </Row>


                  <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="Nombre">
                      <Form.Control type="name" placeholder="Nombre" />
                    </FloatingLabel>
                  </Col>
                  <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="Apellido">
                      <Form.Control type="name" placeholder="Apellido" />
                    </FloatingLabel>
                  </Col>
                </Row>


                <Row className="g-2">
                  <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="CABA">
                      <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                  </Col>
                  <Col md>
                    <FloatingLabel
                      controlId="floatingSelectGrid"
                      label="Seleccionar barrio a consultar"
                    >
                      <Form.Select aria-label="Floating label select example">
                        <option>Elija una opción</option>
                        <option value="1">Palermo</option>
                        <option value="2">Recoleta</option>
                        <option value="3">Barrio Norte</option>
                        <option value="4">Retiro</option>


                      </Form.Select>
                    </FloatingLabel>
                  </Col>

                </Row>
                <Row>

                  <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Escriba su consulta</Form.Label>
                      <Form.Control as="textarea" rows={4} />
                    </Form.Group>
                  </Col>
                </Row>

                <Col xs={6}>
                  <Form.Check
                    type="switch"
                    id="invalidCheck"
                    required
                    label="Estoy de acuerdo con las condiciones"
                  />
                  <Form.Control.Feedback type="invalid">
                    Tienes que aceptar para continuar
                  </Form.Control.Feedback>
                </Col>

                <Button type="submit">
                  Enviar
                </Button>





              </Form>

            </Col>
          </Container>







        </Row>
      </Container>
    </main>
  );
};

export default HomePage;
