import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import * as Icons from '../Icons/Icons';

import "./Tabs.css";

const tabShape = PropTypes.shape({
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  selected: PropTypes.bool
});

export class Tabs extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    classes: PropTypes.string,
    style: PropTypes.array,
    onTabClick: PropTypes.func.isRequired,
    tabList: PropTypes.arrayOf(tabShape).isRequired,
    tabContent: PropTypes.PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    theme: PropTypes.oneOf([
      "primary",
      "warning",
      "danger",
      "success",
      "transparent",
      "secondary"
    ]),
    direction: PropTypes.oneOf(["vertical", "horizontal"]),
    align: PropTypes.oneOf(["start", "end", "center"]),
    size: PropTypes.oneOf(["small", "regular", "large"]),
    iconAttached: PropTypes.bool,
    iconList: PropTypes.array
  };

  static defaultProps = {
    theme: "transparent",
    align: "start",
    direction: "horizontal",
    size: "regular",
    iconAttached: false
  };

  onTabClick = (tab, name) => {
    if (this.props.onTabClick) {
      this.props.onTabClick(tab, name);
    }
  };

  getCssClasses(props, state) {
    let classNames = classnames(
      "Tabs",
      `Tabs-${props.size}`,
      `Tabs-${props.align}`,
      `Tabs-${props.direction}`,
      `Theme-${props.theme}`,
      props.classes
    );

    if (props.styles) {
      classNames = props.styles.reduce(function(prevValue, currentValue, key) {
        return prevValue + ` Tabs-${currentValue}`;
      }, classNames);
    }

    return classNames;
  }

  renderTab = (props, tab, index) => {
    const classNames = classnames(
      "TabItem",
      { "TabItem-selected": tab.selected },
      props.tabItemClasses
    );

    return (
      <div
        onClick={(e) => this.onTabClick(tab, props.name)}
        className={classNames}
        key={index}
      >
       {
         props.iconAttached ? 
          <div className="Tab-icon-wrapper">
            <div className={tab.selected ? `Tab-icon-${props.iconList[index]}-selected` :`Tab-icon-${props.iconList[index]}`}/>{tab.text}
          </div>
          : tab.text
       }
      </div>
    );
  };

  renderTabList = (props) => {
    return (
      <div className="Tabs-list">
        <div className="Tabs-list-tabs">
          {props.tabList.map((tab, key) => this.renderTab(props, tab, key))}
        </div>
      </div>
    );
  };

  render() {
    const { props, state } = this;
    const classNames = this.getCssClasses(props, state);

    return (
      <div className={classNames}>
        {this.renderTabList(props)}
        <div className="Tab-content">{props.tabContent}</div>
      </div>
    );
  }
}

