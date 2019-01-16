import React from "react";
import { shallow } from "enzyme";

import { PageComponent } from "./Page";

describe("Page", () => {
  const props = {
    year: 2010,
    photos: [],
    isFetching: false,
    getPhotos: () => {}
  };

  it("isFetching", () => {
    const nextProps = {
      ...props,
      isFetching: true
    };

    const newPageContainer = shallow(<PageComponent {...nextProps} />);

    expect(newPageContainer.find("p.loading").text()).toEqual("Загрузка...");
    expect(newPageContainer.find("User")).toHaveLength(1);
    expect(newPageContainer).toMatchSnapshot();
  });

  it("is not fetching", () => {
    const nextProps = {
      ...props
    };

    const newPageContainer = shallow(<PageComponent {...nextProps} />);

    expect(newPageContainer.find("p.loading").text()).not.toEqual(
      "Загрузка..."
    );
    expect(newPageContainer.find("User")).toHaveLength(1);
    expect(newPageContainer).toMatchSnapshot();
  });

  it("render", () => {
    const mock = jest.fn();
    const nextProps = {
      ...props,
      getPhotos: mock
    };

    shallow(<PageComponent {...nextProps} />);

    expect(mock).toHaveBeenCalledTimes(1);
  });
});
