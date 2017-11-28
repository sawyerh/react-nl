import React, { Component } from "react";
import PropTypes from "prop-types";

class NLEntity extends Component {
  render() {
    return <strong className="nl-entity">{this.props.children}</strong>;
  }
}

NLEntity.propTypes = {
  children: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  salience: PropTypes.number.isRequired,
  sentiment: PropTypes.shape({
    magnitude: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired
  })
};

export default NLEntity;
