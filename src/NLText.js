import React, { Component } from "react";
import PropTypes from "prop-types";
import NLCategory from "./NLCategory";
import NLEntity from "./NLEntity";
import reactStringReplace from "react-string-replace";

let counter = 0;

class NLText extends Component {
  annotatedText(text) {
    let replacedText = text;

    this.props.entities.forEach(entity => {
      replacedText = reactStringReplace(replacedText, entity.name, match => {
        ++counter;
        return (
          <NLEntity {...entity} key={match + counter}>
            {match}
          </NLEntity>
        );
      });
    });

    return replacedText;
  }

  annotatedChildren() {
    return React.Children.map(this.props.children, (child, i) => {
      // TODO: Handle case where child is not a string (ie. a node with HTML tags within it)
      // We should be able to loop through it like we do here, maybe reusing this method
      const Component = child.type;
      return (
        <Component key={i}>
          {this.annotatedText(child.props.children)}
        </Component>
      );
    });
  }

  categories() {
    if (this.props.categories.length) {
      return this.props.categories.map(category => (
        <NLCategory key={category.name} {...category} />
      ));
    }
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
