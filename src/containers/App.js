import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router";

import styled from "styled-components";

const StyledContainer = styled.div`
  display: inline-block;
  position: absolute;
  left: 30%;
  top: 30%;
  width: 600px;
`;

const StyledBlock = styled.div`
  display: inline-block;
  align-items: flex-start
  margin: 5px;
  transform: ${props => props.isRotate && "rotate(90deg)"}
`;

const MAX_FONT_SIZE = 100;

const findMaxSentimentScore = initialData => {
  const arrSentimentScores = [];

  Object.keys(initialData).forEach(el => {
    arrSentimentScores.push(initialData[el].sentimentScore);
  });

  return Math.max.apply(null, [...arrSentimentScores]);
};

class App extends Component {
  render() {
    const { initialData } = this.props;
    const maxSentimentScore = findMaxSentimentScore(initialData);

    return (
      <StyledContainer>
        {Object.keys(initialData).map(id => {
          const { sentimentScore, label } = initialData[id];
          const isRotate = !!((Math.random() * 10).toFixed(0) % 2);
          const style = {
            fontSize: (sentimentScore * MAX_FONT_SIZE) / maxSentimentScore
          };

          return (
            <StyledBlock isRotate={isRotate} key={id}>
              <Link to={`/${id.replace("/", "**")}`} key={id} title={label}>
                <span style={style}>{label}</span>
              </Link>
            </StyledBlock>
          );
        })}
      </StyledContainer>
    );
  }
}

App.propTypes = {
  initialData: propTypes.object.isRequired
};

const mapStateToProps = store => {
  return {
    initialData: store.main
  };
};

export default connect(mapStateToProps)(App);
