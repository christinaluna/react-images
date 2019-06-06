import React from 'react';

class ImageCard extends React.Component {
    render() {
        const { description, urls, user } = this.props.image;

        return (
            <div className="item">
                <div className="author-overlay">
                    <div className="author-link">
                        <a href={user.links.html} target="_blank" className="ui mini horizontal divided list">
                            <div className="item">
                                <img className="ui avatar image" src={user.profile_image.medium} />
                                <div className="content"><p>{user.name}</p></div>
                            </div>
                        </a>
                    </div>
                </div>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        );
    }
}

export default ImageCard;