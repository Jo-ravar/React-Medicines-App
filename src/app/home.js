import React, { Component } from 'react';
import Link from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import './css/home.css';
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#673AB7',
    backgroundColor: '#F44336',
  },
  appBar: {
    height: 50,
  },
});
export default class Home extends Component {
  onClickNavigate() {
    <Link to={'/medicine'} />;
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <div>
            <AppBar title="DASHBOARD" />
          </div>
          <div className="divAlign">
            <RaisedButton
              className="belowBar"
              backgroundColor="#7986CB"
              label="Medicines"
              href="/medicine"
            />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
