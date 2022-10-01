import React from 'react';
import Movies from './Movies';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';

import 'bootstrap/dist/css/bootstrap.min.css';

class MovieCard extends React.Component {

  render() {
    return (
      <>
        <Container>
          <Accordion defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Movies from the Region</Accordion.Header>
              <Accordion.Body>
                <Container>
                  {this.props.movieArray.map((element) => (
                    <Movies
                      key={element.id}
                      movie={element} />
                  )
                  )};
                </Container>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </>
    );
  }
}


export default MovieCard;
