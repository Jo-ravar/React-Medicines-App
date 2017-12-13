import React, { Component } from 'react';
import Pagination from './pagination';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Info from 'react-icons/lib/md/info';

export default class Table extends Component {
  constructor(props) {
    super();
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen = (i) => {
    this.setState({ selected: i });
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  myCallback = dataFromPage => {
    this.setState({ medInfo: dataFromPage });
  };



  render() {
    if (
      !this.state ||
      this.state.medInfo === undefined ||
      this.state.medInfo.length === 0
    ) {
      this.state = {
        medInfo: this.props.medData,
        open: false,
        selected: 0,
      };
    }
    var divStyle = {
      display: 'flex',
      justifyContent: 'center',
    };

    const actions = [
      <FlatButton label="OK" primary={true} onClick={this.handleClose} />,
    ];

    return (
      <MuiThemeProvider>
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>S.NO</th>
                <th>Name</th>
                <th>Package Form</th>
                <th>Price</th>
                <th>Info</th>
              </tr>
            </thead>
            <tbody>
              {this.state.medInfo.map((eachMedicine, key) => (
                <tr>
                  <th scope="row">{key + 1}</th>
                  <td>{eachMedicine.name}</td>
                  <td>{eachMedicine.packageForm}</td>
                  <td>Rs. {eachMedicine.price}</td>
                  <td>
                    <Info onClick={() => this.handleOpen(key)} />
                    <Dialog
                      ui_Loading={true}
                      title={this.state.medInfo[this.state.selected]['name']}
                      actions={actions}
                      open={this.state.open}
                      autoScrollBodyContent={true}
                      onRequestClose={this.handleClose}
                      contentStyle={{ width: '100%', maxHeight: '50%' }}
                    >
                      <div>
                        <p><b>Form:</b> {this.state.medInfo[this.state.selected]['form']}</p>
                        <p><b>Standard Units:</b> {this.state.medInfo[this.state.selected]['standardUnits']}</p>
                        <p><b>Package Form:</b> {this.state.medInfo[this.state.selected]['packageForm']}</p>
                        <p><b>Price:</b> {this.state.medInfo[this.state.selected]['price']}</p>
                        <p><b>Size:</b> {this.state.medInfo[this.state.selected]['size']}</p>
                        <p><b>Manufacturer:</b> {this.state.medInfo[this.state.selected]['manufacturer']}</p>
                        <p><b>Id:</b> {this.state.medInfo[this.state.selected]['medicine_id']}</p>
                        {/* {
                          Object.keys(this.state.medInfo[this.state.selected]).map((i) => {
                            console.log(this.state.medInfo[this.state.selected][i].to);
                            return (
                              <p>
                                {i}:  {this.state.medInfo[this.state.selected][i]}
                              </p>
                            );

                          })
                        } */}
                      </div>
                    </Dialog>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination callbackFromTable={this.myCallback} />
        </div>
      </MuiThemeProvider>
    );
  }
}
