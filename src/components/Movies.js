import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

class Movies extends React.Component {

  render() {
    return (
      <>
        <Container>
          <Card key={this.props.key} className='my-4'>
            <Container>
              <Card.Body>
                <Card.Img variant='top' src={'https://image.tmdb.org/t/p/original/' + this.props.movie.poster_path} />
                <h5>Title: {this.props.movie.title}</h5>
                <p>Overview: {this.props.movie.overview}</p>
                <p>Vote Average: {this.props.movie.vote_average}</p>
                <p>Vote Count: {this.props.movie.vote_count}</p>
                <p>Popularity: {this.props.movie.popularity}</p>
                <p>Release Date: {this.props.movie.release_date}</p>
              </Card.Body>
            </Container>
          </Card>
        </Container>
      </>
    );
  }
}


export default Movies;
