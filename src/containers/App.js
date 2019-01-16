import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router";

class App extends Component {
  render() {
    const { initialData } = this.props;

    return (
      <div>
        {Object.keys(initialData).map(id => {
          const { sentimentScore, label } = initialData[id];

          return (
            <Link to={`/${id.replace("/", "**")}`} key={id} title={label}>
              <span style={{ fontSize: sentimentScore }}>{label}</span>
            </Link>
          );
        })}
      </div>
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
