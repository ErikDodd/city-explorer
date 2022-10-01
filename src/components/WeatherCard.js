import React from 'react';
import WeatherDay from './WeatherDay';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';


class WeatherCard extends React.Component {

  render() {
    return (
      <>
        <Container>
          <Accordion defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Weather Forecast</Accordion.Header>
              <Accordion.Body>
                <Container >
                  {this.props.weatherArr.map((e, i) => (
                    <WeatherDay i={i} day={e} />
                  )
                  )}
                </Container>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </>
    );
  }
}

export default WeatherCard;
