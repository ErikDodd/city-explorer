import React from 'react';
import Movies from './Movies';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

class MovieCard extends React.Component {

  render() {
    return (
      <>
        <Container>
          {this.props.movieArray.map((e, i) => (
            <Movies i={i} movie={e} />
          )
          )};
        </Container>
      </>
    );
  }
}


export default MovieCard;
