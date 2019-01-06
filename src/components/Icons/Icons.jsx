import React from "react";

export class ArrowDown extends React.Component {
  /**
   * Render method
   * @return {Object}JSX
   */
    render() {
      const {color, height, width, viewBox} = this.props;
      return (
          <svg id="arrow" fill={color} height={height} viewBox={viewBox} width={width} xmlns="http://www.w3.org/2000/svg">
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/><path d="M0 0h24v24H0z" fill="none"/>
          </svg>
      );
    }
  }