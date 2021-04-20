import React, { Component } from "react";

class Select extends Component {
  handleChange(e) {
    let value;

    if (this.isMultiSelect()) {
      value = toArray(e.target.options)
        .filter((option) => option.selected)
        .map((option) => option.value);
    } else {
      value = e.target.value;
    }

    this.props.onChange(value);
  }

  isMultiSelect() {
    const { value } = this.props;

    return Array.isArray(value);
  }

  renderChildren() {
    const { options, placeholder } = this.props;

    const children = options.map((item) => {
      let child;

      if (item.options) {
        child = (
          <optgroup label={item.title} key={item.id}>
            {item.options.map(renderOption)}
          </optgroup>
        );
      } else {
        child = renderOption(item);
      }

      return child;
    });

    if (placeholder) {
      children.unshift(
        renderOption({ label: placeholder, value: "", disabled: true })
      );
    }

    return children;
  }

  render() {
    return (
      <select
        {...filterProps(this.props)}
        onChange={(e) => this.handleChange(e)}
        multiple={this.isMultiSelect()}
      >
        {this.renderChildren()}
      </select>
    );
  }
}

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
