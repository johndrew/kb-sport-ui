import React, { Component, Fragment } from 'react';
import _ from 'lodash';
import './Dropdown.scss';

export default class Dropdown extends Component {
  renderOption(value) {
    // return <option
    //   key={value}
    //   className={`dropdown__option--${value}`}>
    //   {value}
    // </option>;

    return <li className="mdl-menu__item" data-val={value} key={value}>{value}</li>
  }

  render() {
    const options = this.props.options.map(this.renderOption);

    // return (
    //   <Fragment>
    //     <select
    //       className="select dropdown__select"
    //       onChange={this.handleChange.bind(this)}>
    //       {options}
    //     </select>
    //   </Fragment>
    // )

    return (
      <div className="mdl-textfield mdl-js-textfield getmdl-select dropdown__container">
        <input
          type="text"
          value=""
          className="mdl-textfield__input"
          id={this.props.label}
          readOnly
          onSelect={this.foo.bind(this)}/>
          <input
            type="hidden"
            value=""
            name={this.props.label}
            onSelect={this.bar.bind(this)} />
            <i className="mdl-icon-toggle__label material-icons">keyboard_arrow_down</i>
            <label
              htmlFor={this.props.label}
              className="mdl-textfield__label">
              {this.props.label}
            </label>
            <ul
              htmlFor={this.props.label}
              className="mdl-menu mdl-menu--bottom-left mdl-js-menu">
              {options}
            </ul>
      </div>
    );
  }

  foo() {
    console.log('foo');
  }

  bar() {
    console.log('bar');
  }
      
  handleChange(event) {
    // _.debounce(this.props.optionChanged(event.target.value), 300);
    this.props.optionChanged(event.target.value);
  }
}
