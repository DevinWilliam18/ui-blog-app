import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ColorSchemesExample() {
  return (
    <>
      <header>
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Row>
              <Col xs={4}>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              </Col>
              <Col>
                  <Nav.Link href="#features">About</Nav.Link>              
                  <Form inline>
                    <InputGroup>
                      <Form.Control
                        placeholder="Search"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                      <InputGroup.Text id="basic-addon1">@</InputGroup.Text>                
                    </InputGroup>
                  </Form>                  
              </Col>
            </Row>
          </Container>
        </Navbar>
      </header>
      <main></main>
      <footer>

      </footer>
    </>
  );
}

export default ColorSchemesExample;