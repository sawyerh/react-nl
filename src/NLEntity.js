import React, { Component } from "react";
import PropTypes from "prop-types";

class NLEntity extends Component {
  contents() {
    let contents = this.props.children;

    if (this.props.metadata.wikipedia_url) {
      contents = (
        <a
          className="nl-entity__link"
          href={this.props.metadata.wikipedia_url}
          target="_blank"
        >
          {contents}
        </a>
      );
    }

    return contents;
  }

  render() {
    return <strong className="nl-entity">{this.contents()}</strong>;
  }
}

NLEntity.propTypes = {
  children: PropTypes.string,
  metadata: PropTypes.shape({
    mid: PropTypes.string,
    wikipedia_url: PropTypes.string
  }),
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  salience: PropTypes.number.isRequired,
  sentiment: PropTypes.shape({
    magnitude: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired
  })
};

export default NLEntity;
