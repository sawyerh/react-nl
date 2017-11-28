import React, { Component } from "react";
import PropTypes from "prop-types";

class NLCategory extends Component {
  percent() {
    return Math.round(this.props.confidence * 100) + "%";
  }

  render() {
    return (
      <p className="nl-category">
        {this.props.name} ({this.percent()} confident)
      </p>
    );
  }
}

NLCategory.propTypes = {
  name: PropTypes.string.isRequired,
  confidence: PropTypes.number.isRequired
};

export default NLCategory;
