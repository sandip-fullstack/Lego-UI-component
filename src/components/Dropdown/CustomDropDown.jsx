import React, {Component} from 'react';
import './CustomDropDown.css';
import * as Icons from '../Icons/Icons';
import PropTypes from "prop-types";

/** * @summary Layout for DropDown component.
 */
export class CustomDropDown extends Component {
    /**
     * @param {object} props
     */
  constructor(props) {
    super(props);
    this.state = {
      dropDownShow: false,
      options: this.props.optionList,
      value: this.props.defaultText
    };
    this.dropDownShow = this.dropDownShow.bind(this);
  }

  static defaultProps = {
    searchable: false,
    withBorder: true
  }
    /**
     * Method to toggle dropdown menu
     */
  dropDownShow() {
    this.setState({
      dropDownShow: !this.state.dropDownShow,
    });
  }
    /**
     * React Method
     * @param {object} nextProps
     */
  componentWillReceiveProps(nextProps) {
    this.setState({
      options: nextProps.optionList,
    });
  }
  /**
   * Method for Search option
   * @param {event} e
   */
  filterFunction(e) {
    let val = e.target.value;
    let options = this.props.optionList;
    let modiefiedOptions = [];
    options.map((option, idx)=>{
      if(option.toUpperCase().indexOf(val.toUpperCase()) > -1) {
        modiefiedOptions.push(option);
      }
    });
    this.setState({
      options: modiefiedOptions,
    });
  }
  /**
   * Method to select a option
   * @param {string} label
   * @param {string} value
   * @param {object} e
   */
  handleChange(label, index, e) {
    document.getElementById('search-input').value = '';
    // this.props.dropDownSelect(label);
    console.log("label", label, index);
    this.setState({
      value: label,
      dropDownShow: false,
      options: this.props.optionList
    });
    // this.props.handleChange(label,value);
  }
  /**
 * Render method
 * @return {Object}JSX
 */
  render() {
    const {label, searchable, withBorder} = this.props;
    const {options, value} = this.state;
    const {dropDownShow} = this.state;
    return (
        <div>
            <div className={`${withBorder ? 'dropdown-header dropdown-border' : 'dropdown-header'}`} onClick={this.dropDownShow}>
              <span className='dropdown-label'>Sort By: {value}</span>
              <span><Icons.ArrowDown color='#000' width="24px" height="24px" viewBox='0 0 24 24'/></span>
            </div>
                <div className={`${dropDownShow ? 'drop-down-List-wrapper list-open' : 'drop-down-List-wrapper list-close'}`}>
                    {
                      searchable &&
                        <input id='search-input' className='search-text' type="text" placeholder='Search..'
                        onChange={this.filterFunction.bind(this)}/>
                    }
                    {options && options.map((option, index)=>{
                      return(
                      <div key={index} className='drop-down-list' onClick={this.handleChange.bind(this, option, index)}>
                          {
                            option
                          }
                      </div>
                      );
                    })}
                </div>
        </div>
    );
  }
}

CustomDropDown.propTypes = {
  label: PropTypes.string,
  searchable: PropTypes.string,
  optionList: PropTypes.array,
  defaultText: PropTypes.string,
  withBorder: PropTypes.bool
};
