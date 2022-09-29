import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

class MovieCard extends React.Component {

  render() {
    return (
      <>
        <Container>
          {this.props.movieArray.map((e, i) => (
            <Card key={i} className='my-4'>
              <Container>
                <p>{e.title}</p>
                <p>{e.overview}</p>
                <p>{e.vote_average}</p>
                <p>{e.vote_count}</p>
                <p>{e.popularity}</p>
                <p>{e.release_date}</p>
              </Container>
            </Card>
          )
          )};
        </Container>
      </>
    );
  }
}


export default MovieCard;
