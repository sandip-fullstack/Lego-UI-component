import React from "react";
import PropTypes from "prop-types";

import "./ArticleCard.css";
import { SquareBox } from "../../components/SvgIcons/SvgIcons";

const approvalClassList = {
  pending: "danger",
  approved: "secondary"
};

export const ArticleCard = (props) => {
  let styles = {};
  if (props.imageUrl) {
    styles = { backgroundImage: `url(${props.imageUrl})` };
  }

  return (
    <div
      className={`ArticleCard-wrapper ${props.classes}`}
      onClick={props.onClick}
    >
      <div className="ArticleCard-image" style={styles} />
      <div className="ArticleCard-content">
        <div className="ArticleCard-title-block">
          <div className="ArticleCard-title Utils-text-ellipse">
            {props.title}
          </div>
        </div>
        <div className="ArticleCard-sub-title Utils-text-ellipse">
          {props.brand}
        </div>
        {props.displayStatus && (
          <SquareBox
            theme={approvalClassList[props.status]}
            styles={["filled"]}
            viewBox="0 -3 24 24"
          />
        )}{" "}
        {props.totalPending}
        <div className="ArticleCard-sub-title Utils-text-ellipse Utils-flex-horizontal Utils-space-between">
          <div>{props.publishedDate || ""}</div>
          <div> BY {props.author || ""}</div>
        </div>
      </div>
    </div>
  );
};

ArticleCard.defaultProps = {
  displayStatus: false
};
ArticleCard.propTypes = {
  title: PropTypes.string,
  brand: PropTypes.string,
  displayStatus: PropTypes.bool,
  status: PropTypes.string,
  publishedDate: PropTypes.string,
  author: PropTypes.string,
  classes: PropTypes.string,
  imageUrl: PropTypes.string
};
