// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CloseIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M1 13L13 1m0 12L1 1"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CloseIcon;
/* prettier-ignore-end */
