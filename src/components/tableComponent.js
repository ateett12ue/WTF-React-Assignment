import React, { Component } from "react";
import { Button } from "reactstrap";
import "../css/table.css";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBooked: false
    };
  }
  booked() {
    this.setState({
      isBooked: !this.state.isBooked
    });
  }
  render() {
    let booked = this.state.isBooked ? "tableBooked" : "tableUnBooked";
    return (
      <React.Fragment>
        <div>
          <Button onClick={this.booked.bind(this)} className={booked}>
            1
          </Button>{" "}
          {/*{this.props.TableNo}*/}
        </div>
      </React.Fragment>
    );
  }
}

export default Table;
