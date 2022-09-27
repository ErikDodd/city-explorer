import React from 'react';
import Card from 'react-bootstrap/Card';

class CityCard extends React.Component {
    render() {
        return(
            <>
                <Card>
                    <Card.Img variant="top" src={this.props.cityMap} />
                    <Card.Body>
                        <Card.Title>{this.props.location.display_name}</Card.Title>
                        <Card.Text>
                            {this.props.location.lat}
                            {this.props.location.lon}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default CityCard;