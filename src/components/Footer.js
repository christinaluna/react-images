import './Footer.css';
import React from 'react';

const Footer = props => {
    return (
        <div className="footer">
            <p>Built with React and Unsplash Api</p>
            <a href="https://github.com/christinaluna/react-images" target="_blank" rel="noopener noreferrer"><i className="github alternate icon"></i></a>
        </div>
    );
}

export default Footer;