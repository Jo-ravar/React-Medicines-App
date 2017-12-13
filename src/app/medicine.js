import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from './table.js';
import apiHelper from '../helper/api.js';
import loadMedicine from '../app/actions/medicine.js';

function CheckData(props) {
  if (props.medData.length > 0) {
    return <Table medData={props.medData} />;
  }
  return <h1>Fetching data...</h1>;
}

class Medicine extends Component {
  constructor(props) {
    super();
    this.state = {
      medData: [],
    };
  }
  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    console.log('-------Error-----');
    console.log(error);
    console.log('-------Info-----');
    console.log(info);
  }

  componentWillUpdate(nextProps) {
    if (this.props.medicineData.length === 0) {
      this.setState({ medData: nextProps.medicineData });
    }
  }

  render() {
    return (
      <div>
        <p className="h3">This is our medicine page</p>
        <Table medData={this.state.medData} />;,
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    medicineData: state.medicineData,
  };
};

export default connect(mapStateToProps, loadMedicine)(Medicine);
