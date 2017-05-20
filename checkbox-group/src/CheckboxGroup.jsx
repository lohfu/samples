import React from 'react';
import classNames from 'classnames';
import { omit } from 'lowline';

class CheckboxGroup extends React.Component {
  constructor(props, ...args) {
    super(props, ...args);

    this.name = props.name;

    this.state = {
      dirty: false,
      value: props.value,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    e.preventDefault();

    console.log(groupValue);
    if (document.activeElement !== e.target) return;

    let groupValue = this.state.value || [];
    let inputValue = +e.target.value || e.target.value;

    if (e.target.checked) {
      groupValue = groupValue.concat(inputValue);
    } else {
      groupValue = groupValue.filter((value) => value !== inputValue);
    }

    this.setState({
      value: groupValue.length ? groupValue : null,
    });
  }

  getChildContext() {
    return {
      checkboxGroup: {
        value: this.state.value,
        name: this.props.name,
        onChange: this.onChange,
      },
    };
  }

  render() {
    const { children } = this.props;

    const classes = Object.assign({
      'field-container': true,
      'checkbox-group': true,
      empty: !this.state.value,
      filled: this.state.value,
      invalid: this.state.error,
      touched: this.state.touched,
      valid: this.state.value && !this.state.error,
    });

    return (
      <div className={classNames(classes)}>
        {children}
        <label className="icon" />
        {this.state.error && <label className="error">{this.state.error}</label>}
      </div>
    );
  }
}


CheckboxGroup.childContextTypes = {
  checkboxGroup: React.PropTypes.object,
};

export default CheckboxGroup;
