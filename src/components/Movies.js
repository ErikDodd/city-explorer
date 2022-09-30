import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

class Movies extends React.Component {

  render() {
    return (
      <>
        <Container>
          <Card key={this.props.i} className='my-4'>
            <Container>
              <p>Title: {this.props.movie.title}</p>
              <p>Overview: {this.props.movie.overview}</p>
              <p>Vote Average: {this.props.movie.vote_average}</p>
              <p>Vote Count: {this.props.movie.vote_count}</p>
              <p>Popularity: {this.props.movie.popularity}</p>
              <p>Release Date: {this.props.movie.release_date}</p>
            </Container>
          </Card>
        </Container>
      </>
    );
  }
}


export default Movies;
