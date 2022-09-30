import React from 'react';
import Movies from './Movies';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

class MovieCard extends React.Component {

  render() {
    return (
      <>
        <Container>
          {this.props.movieArray.map((element) => (
            <Movies key={element.id} movie={element} />
          )
          )};
        </Container>
      </>
    );
  }
}


export default MovieCard;
