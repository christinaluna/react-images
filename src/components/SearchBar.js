import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    margin-bottom: 2em;
`

const Heading = styled.h1`
    color: white;
`

const Input = styled.input`
    padding: 1em;
    margin: 0.5em 0;
    color: ${props => props.inputColor || "black"};
    background: white;
    border: none;
    border-radius: 3px;
    width: 100%;
`

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    render() {
        return  (
            <Form onSubmit={this.onFormSubmit}>
                <Heading>Image search</Heading>
                    <Input type="text" placeholder="Search Unsplash images" value={this.state.term} onChange={e => this.setState({ term : e.target.value })} />
            </Form>
        )
    }
}

export default SearchBar;