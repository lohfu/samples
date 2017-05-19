import React from 'react';
import { connect } from 'react-redux';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import Navigation from './Navigation';

class App extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.location.name !== this.props.location.name;
  }

  render() {
    const { location } = this.props;

    return (
      <div id="app">
        <Navigation />

        <TransitionGroup component="main">
          {location && location.component && <location.component key={location.name}  />}
          {location && location.component && <location.component key={location.name + 'penis'}  />}
        </TransitionGroup>
      </div>
    );
  }
}

export default connect((state) => ({ location: state.location }))(App);

