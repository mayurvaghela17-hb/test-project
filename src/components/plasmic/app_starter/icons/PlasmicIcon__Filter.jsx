// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function FilterIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.503 1.75h11c.916 0 1.666.75 1.666 1.667V5.25c0 .667-.416 1.5-.833 1.917l-3.583 3.166c-.5.417-.834 1.25-.834 1.917v3.583c0 .5-.333 1.167-.75 1.417l-1.166.75c-1.084.667-2.584-.083-2.584-1.417v-4.416c0-.584-.333-1.334-.666-1.75L3.586 7.083c-.417-.416-.75-1.166-.75-1.666V3.5c0-1 .75-1.75 1.667-1.75zm4.605 0L5 8.333"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FilterIcon;
/* prettier-ignore-end */
