import React,{ Component } from "react";
import PropTypes from 'prop-types';

class Headline extends Component {
    render() {
        const {title, description} = this.props;

        if(!title) {
            return null;
        }

        return (
            <div className="headline mt-5 container text-white" data-test="Headline Component">
                <h1 className="headline-head" data-test="Headline Title">
                    {title}
                </h1>
                <p className="headline-desc" data-test="Headline Description">
                    {description}
                </p>
            </div>
            )
    };
}

Headline.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    myArray: PropTypes.arrayOf(PropTypes.shape({
        money : PropTypes.object,
        present : PropTypes.bool,
        level : PropTypes.number,
        name : PropTypes.string,
    }))
};

export default Headline;