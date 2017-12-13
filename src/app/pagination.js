import React, { Component } from 'react';
import apiHelper from '../helper/api.js';
export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liOne: 1,
      liTwo: 2,
      liThree: 3,
      enabled: 'page-item',
      disabled: 'page-item disabled',
      medData: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e.currentTarget.dataset.name);
    if (e.currentTarget.dataset.name === 'next') {
      this.state.liOne += 1;
      this.state.liTwo += 1;
      this.state.liThree += 1;
      this.setState({ disabled: 'page-item' });
      apiHelper.getAllMedicines(
        this.state.liOne,
        function(err, data) {
          this.setState({ medData: data });
          this.props.callbackFromTable(this.state.medData);
        }.bind(this)
      );
    } else if (e.currentTarget.dataset.name === 'prev') {
      if (this.state.liOne <= 1) {
      } else if (this.state.liOne === 2) {
        this.setState({ liOne: (this.state.liOne -= 1) });
        this.setState({ liTwo: (this.state.liTwo -= 1) });
        this.setState({ liThree: (this.state.liThree -= 1) });
        this.setState({ disabled: 'page-item disabled' });
        apiHelper.getAllMedicines(
          this.state.liOne,
          function(err, data) {
            this.setState({ medData: data });
            this.props.callbackFromTable(this.state.medData);
          }.bind(this)
        );
      } else {
        this.setState({ liOne: (this.state.liOne -= 1) });
        this.setState({ liTwo: (this.state.liTwo -= 1) });
        this.setState({ liThree: (this.state.liThree -= 1) });
        apiHelper.getAllMedicines(
          this.state.liOne,
          function(err, data) {
            this.setState({ medData: data });
            this.props.callbackFromTable(this.state.medData);
          }.bind(this)
        );
      }
    } else if (e.currentTarget.dataset.name === 'a') {
      apiHelper.getAllMedicines(
        this.state.liOne,
        function(err, data) {
          this.setState({ medData: data });
          this.props.callbackFromTable(this.state.medData);
        }.bind(this)
      );
    } else if (e.currentTarget.dataset.name === 'b') {
      apiHelper.getAllMedicines(
        this.state.liTwo,
        function(err, data) {
          this.setState({ medData: data });
          this.props.callbackFromTable(this.state.medData);
        }.bind(this)
      );
    } else if (e.currentTarget.dataset.name === 'c') {
      apiHelper.getAllMedicines(
        this.state.liThree,
        function(err, data) {
          this.setState({ medData: data });
          this.props.callbackFromTable(this.state.medData);
        }.bind(this)
      );
    }
  }
  render() {
    var divStyle = {
      display: 'flex',
      justifyContent: 'center',
    };
    return (
      <div style={divStyle}>
        <ul className="pagination pagination-lg">
          <li
            className={this.state.disabled}
            data-name="prev"
            onClick={this.handleClick}
          >
            <a className="page-link">Previous</a>
          </li>
          <li className="page-item" data-name="a" onClick={this.handleClick}>
            <a className="page-link">{this.state.liOne}</a>
          </li>
          <li className="page-item" data-name="b" onClick={this.handleClick}>
            <a className="page-link">{this.state.liTwo}</a>
          </li>
          <li className="page-item" data-name="c" onClick={this.handleClick}>
            <a className="page-link">{this.state.liThree}</a>
          </li>
          <li
            className={this.state.enabled}
            data-name="next"
            onClick={this.handleClick}
          >
            <a className="page-link">Next</a>
          </li>
        </ul>
      </div>
    );
  }
}
