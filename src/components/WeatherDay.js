import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

class WeatherDay extends React.Component {

  render() {
    return (
      <>
        <Container >
          <Card key={this.props.i} className='my-4'>
            <Container>
              <p>Date: {this.props.day.datetime}</p>
              <p>Temperature: {this.props.day.temp}</p>
            </Container>
          </Card>
        </Container>
      </>
    );
  }
}

export default WeatherDay;
