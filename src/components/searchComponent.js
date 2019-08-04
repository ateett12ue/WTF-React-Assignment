import React, { Component } from "react";
import { Form, Label, Input } from "reactstrap";
import "../css/tags.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }
  searchQuery(values) {
    console.log("working");
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Form onSubmit={this.searchQuery()}>
            <Input
              type="submit"
              className="search"
              placeholder="Search"
              value={this.state.search}
            />
          </Form>
        </div>
      </React.Fragment>
    );
  }
}
export default Search;
