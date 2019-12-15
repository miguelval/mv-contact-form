import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import Routes from "./Routes";


class App extends Component {

  render() {
    return (
      <div>
        <AppBar color="primary" position="static">
          <Toolbar>
            <TypoGraphy variant="title"
              color="inherit"
            >
              MK Decision Challenge
           </TypoGraphy>
          </Toolbar>
        </AppBar>
        <Routes  />

      </div>
    );
  }
}
export default App;