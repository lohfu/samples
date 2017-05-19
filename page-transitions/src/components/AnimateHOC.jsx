import React from 'react';
import ReactDOM from 'react-dom';

import { show, hide} from 'enter-leave';

export default (Component) => {
  return class AnimateHOC extends React.Component {
    componentWillAppear(cb) {
      cb();
    }

    componentWillLeave(cb) {
      const el = ReactDOM.findDOMNode(this);

      hide(el, null, () => {
        cb();
      });
    }

    componentWillEnter(cb) {
      const el = ReactDOM.findDOMNode(this);

      show(el, null, () => {
        cb();
      });
    }

    render() {
      return <Component {...this.props} />
    }
  }
}
