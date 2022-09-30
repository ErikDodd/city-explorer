import React from 'react';
import WeatherDay from './WeatherDay';
// import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
// import 'bootstrap/dist/css/bootstrap.min.css';

class WeatherCard extends React.Component {

  render() {
    return (
      <>
        <Container >
          {this.props.weatherArr.map((e,i) => (
            <WeatherDay i={i} day={e} />
            
          )
          )}
        </Container>
      </>
    );
  }
}

export default WeatherCard;
