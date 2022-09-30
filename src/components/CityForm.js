import React from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


class CityForm extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Form onSubmit={this.props.handleSearch}>
            <Form.Group className="mb-3" controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control onChange={this.props.handleInput} type="text" placeholder="Search for a City" />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            <Button onClick={this.props.handleSearch} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </>
    );
  }
}

export default CityForm;
