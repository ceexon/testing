import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Post extends Component {
    render() {
        const {title, body} = this.props;

        if(!title) {
            return null;
        }

        return (
            <div data-test="Post Component" className="text-white mb-5 col-12">
                <h2 data-test="Post Title" className="mb-3">{title}</h2>
                <p data-test="Post Body">{body}</p>
            </div>
        );
    }
}

Post.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string
}

export default Post;