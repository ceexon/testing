import React, { Component } from "react";
import PropTypes from 'prop-types';

class Button extends Component {

    clickAction = () => {
        const {action} = this.props;
        action && action();
    }

    render() {
        return(
            <button onClick={this.clickAction} data-test="main-btn">
                {this.props.text}
            </button>
        )
    }
}

Button.propTypes = {
    text: PropTypes.string,
    action: PropTypes.func
}

export default Button;