import React from 'react';
import axios from 'axios';
import CityForm from './CityForm';
import CityCard from './CityCard';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            location: {},
            error: false,
            errorMessage: '',
            cityMap: '',
        }
    }
    handleInput = (e) => {
        console.log(e.target);
        // e.preventDefault();
        this.setState({ searchQuery: e.target.value });
        console.log(this.state.searchQuery);
    }

    // async await
    handleSearch = async (e) => {
        // code runs in the try block
        e.preventDefault();
        try {
            const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.searchQuery}&format=json`
            const res = await axios.get(API);
            // you want res.data
            console.log(res.data[0]); // this represents the actual Seattle about we want
            this.setState({ 
                location: res.data[0],  
                cityMap: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${res.data[0].lat},${res.data[0].lon}&zoom=12`,

            });
    
        } catch (error) {
            console.log(error);
            this.setState({ error: true });
            this.setState({ errorMessage: error.message });
        }
    }
    render() {
        return (
           <main>
                <CityForm
                    handleInput={this.handleInput}
                    handleSearch={this.handleSearch}
                    location={this.state.location}
                    error={this.state.error}
                    errorMessage={this.state.errorMessage}

                />
                <CityCard
                    location={this.state.location}
                    cityMap={this.state.cityMap}
                />
           </main> 
        )

    }
}


export default Main;