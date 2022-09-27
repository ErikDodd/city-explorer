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
                                        {/* {
                                            this.props.location.display_name &&
                                            <>
                                                <h2>The City is {this.props.location.display_name}</h2>
                                                <h2>The lat is {this.props.location.lat}</h2>
                                                <h2>The lon is {this.props.location.lon}</h2>
                                            </>
                                        }
                                        {
                                            this.props.error &&
                                            <h2>Oh no! {this.props.errorMessage} </h2>
                                        } */}
                                    </Form.Text>
                                </Form.Group>
                                <Button onClick={this.props.handleSearch} variant="primary" type="submit">
                                    Submit
                                </Button>
                        </Form>
                </Container>
            </>
        )
    }
}
export default CityForm;