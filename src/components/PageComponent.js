import React from "react";
import propTypes from "prop-types";

class PageComponent extends React.Component {
  renderPageTypes = pageType => (
    <ol>
      {Object.keys(pageType).map(el => {
        return (
          <li key={el}>
            {el}: {pageType[el]}
          </li>
        );
      })}
    </ol>
  );

  render() {
    const { tagData } = this.props;
    const { id: tagName, label, volume, sentiment, pageType } = tagData;

    return (
      <React.Fragment>
        <h2>Tag {tagName}</h2>
        <p>Label: {label}</p>
        <p>Total Mentions: {volume}</p>
        <p>Positive Mentions: {sentiment.positive}</p>
        <p>Neutral Mentions: {sentiment.neutral}</p>
        <p>Negative Mentions: {sentiment.positive}</p>
        <div>
          <p>List of page types: </p>
          {this.renderPageTypes(pageType)}
        </div>
      </React.Fragment>
    );
  }
}

PageComponent.propTypes = {
  tagData: propTypes.object.isRequired
};

export { PageComponent };
