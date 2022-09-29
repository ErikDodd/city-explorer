import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

class WeatherCard extends React.Component {

  render() {
    return (
      <>
        <Container >
          {this.props.weatherArr.map((e, i) => (
            <Card key={i} className='my-4'>
              <Container>
                <p>Date: {e.datetime}</p>
                <p>Temperature: {e.temp}</p>
              </Container>
            </Card>
          )
          )}
        </Container>
      </>
    );
  }
}

export default WeatherCard;
