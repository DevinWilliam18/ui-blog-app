import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "/src/App.css";

function ColorSchemesExample() {
  return (
    <>
      <header>
        <Navbar bg="light" data-bs-theme="light">
          <Container fluid  style={{display: 'inline'}}>
            <Row style={{
                justifyContent: 'space-between'
            }}>
              <Col lg={8}>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              </Col>
              <Col lg={4} style={{display: 'flex', justifyContent: 'flex-end'}}>
                  <Nav.Link className='col-lg-2' style={{marginTop: '.375rem', marginBottom: '.375rem'}} href="#features">About</Nav.Link>              
                  <Form className='col-lg-5' inline>
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