import React, { Component } from "react";
import PropTypes from "prop-types";
import NLCategory from "./NLCategory";
import NLEntity from "./NLEntity";
import reactStringReplace from "react-string-replace";

class NLText extends Component {
  categories() {
    if (this.props.categories.length) {
      return this.props.categories.map(category => (
        <NLCategory key={category.name} {...category} />
      ));
    }
  }

  annotatedText(text) {
    let replacedText = text;

    this.props.entities.forEach(entity => {
      replacedText = reactStringReplace(replacedText, entity.name, match => (
        <NLEntity {...entity}>{match}</NLEntity>
      ));
    });

    return replacedText;
  }

  annotatedChildren() {
    return React.Children.map(this.props.children, child =>
      // TODO: Handle case where child is not a string (ie. a node with HTML tags within it)
      // We should be able to loop through it like we do here, maybe reusing this method
      this.annotatedText(child.props.children)
    );
  }

  render() {
    return (
      <div>
        {this.annotatedChildren()}
        {this.categories()}
      </div>
    );
  }
}

NLText.defaultProps = {
  categories: []
};

NLText.propTypes = {
  children: PropTypes.node.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape(NLCategory.propTypes)),
  entities: PropTypes.arrayOf(PropTypes.shape(NLEntity.propTypes))
};

export default NLText;
