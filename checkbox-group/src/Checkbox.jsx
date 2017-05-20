import React from 'react';

class Checkbox extends React.Component {
  render() {
    const { onChange, name, value } = this.context.checkboxGroup;

    const checked = !!value && value.includes(this.props.value);

    console.log(`${this.props.label}: ${checked}`)
    return (
      <label className="checkbox">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          value={this.props.value}
          onChange={onChange}
        /><i /><span>{this.props.label}</span>
      </label>
    );
  }
}

Checkbox.contextTypes = {
  checkboxGroup: React.PropTypes.object,
};

export default Checkbox;
