import React, { Component } from "react";
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
          <button onClick={this.booked.bind(this)} className={booked}>
            1
          </button>
          {/*{this.props.TableNo}*/}
        </div>
      </React.Fragment>
    );
  }
}

export default Table;
