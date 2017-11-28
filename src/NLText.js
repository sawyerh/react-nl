import React, { Component } from "react";
import PropTypes from "prop-types";
import NLCategory from "./NLCategory";

class NLText extends Component {
  categories() {
    if (this.props.categories.length) {
      return this.props.categories.map(category => (
        <NLCategory {...category} />
      ));
    }
  }

  render() {
    return (
      <div>
        {this.props.children}
        {this.categories()}
      </div>
    );
  }
}

NLText.defaultProps = {
  categories: []
};

NLText.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape(NLCategory.propTypes)),
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
