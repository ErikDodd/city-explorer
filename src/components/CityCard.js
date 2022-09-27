import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

class CityCard extends React.Component {
    render() {
        return(
            <>
                <Container>
                    <Card className='my-4'>
                        <Card.Img variant="top" src={this.props.cityMap} />
                        <Card.Body>
                            <Card.Title>{this.props.location.display_name}</Card.Title>
                            <Card.Text>
                                {this.props.location.lat}
                                {this.props.location.lon}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
            </>
        )
    }
}

export default CityCard;