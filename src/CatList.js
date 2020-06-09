import React, { Component } from "react";

class CatList extends Component {
  render() {
    const catPic = this.props.catPics.map((pic, id) => (
      <img id={id} src={pic.url} alt={id} />
    ));
    return <div>{catPic}</div>;
  }
}

export default CatList;
