import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { PageComponent } from "../components/PageComponent";

class Page extends PureComponent {
  render() {
    const { tagData } = this.props;

    return <PageComponent tagData={tagData} />;
  }
}

const mapStateToProps = (store, ownProps) => {
  const { itemId } = ownProps.params;

  return {
    tagData: store.main[itemId.replace("**", "/")]
  };
};

export default connect(mapStateToProps)(Page);
