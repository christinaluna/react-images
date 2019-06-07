import './App.css';
import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import Footer from './Footer';


class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        // get request
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });

        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="main-wrapper">
                <div className="ui container wrapper" style={{ marginTop: '20px' }}>
                    <SearchBar onSubmit={this.onSearchSubmit} />
                    <ImageList images={this.state.images} />
                </div>
                <div className="ui container" style={{ marginTop: '20px' }}>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;