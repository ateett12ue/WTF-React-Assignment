import React, { Component } from "react";
import "../css/tags.css";

class Tag extends Component {
  constructor(props) {
    super(props);
  }
  tabs() {
    console.log("working");
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <button onClick={this.tabs.bind(this)} className="tabStyle">
            Dine
          </button>
          <button onClick={this.tabs.bind(this)} className="tabStyle">
            Dine
          </button>

          <button onClick={this.tabs.bind(this)} className="tabStyle">
            Dine
          </button>

          <button onClick={this.tabs.bind(this)} className="tabStyle">
            Dine
          </button>

          {/*{this.props.tabName}*/}
        </div>
      </React.Fragment>
    );
  }
}
export default Tag;
