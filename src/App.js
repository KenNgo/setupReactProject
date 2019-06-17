import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as counterAction from './actions/counterActions';
import Button from 'react-bootstrap/Button';
import './App.scss';

class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {data: 0};
    // }

    handleIncrease = () => {
      this.props.counterIncrease();
    };

    handleDecrease = () => {
        this.props.counterDecrease();
    };

    render() {
        console.log(this.props);
        return (
            <div className="container">
                {/* <Nav />
                <Switch>
                    <Route exact path='/' component={DisplayItem} />
                </Switch> */}
                <div className="counter">{this.props.data}</div>
                <Button variant="secondary" onClick={this.handleIncrease}>Increase
                </Button>
                <Button variant="secondary" onClick={this.handleDecrease}>Decrease</Button>
            </div>
            
        );
    }
}

function mapStateToProps(state) {
  return {
    data: state.counterReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    counterIncrease: function () {
      dispatch(counterAction.counterIncrease())
    },
    counterDecrease: function () {
      dispatch(counterAction.counterDecrease())
    }
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));