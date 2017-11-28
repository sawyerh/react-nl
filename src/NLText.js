import React, { Component } from "react";
import PropTypes from "prop-types";

class NLText extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

NLText.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      confidence: PropTypes.number.isRequired
    })
  ),
  entities: PropTypes.arrayOf(
    PropTypes.shape({
      mentions: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.shape({
            content: PropTypes.string
          })
        })
      ),
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      sentiment: PropTypes.shape({
        magnitude: PropTypes.number,
        score: PropTypes.number
      })
    })
  )
};

export default NLText;
