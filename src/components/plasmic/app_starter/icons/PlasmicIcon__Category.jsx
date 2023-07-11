// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CategoryIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 17"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        clipRule={"evenodd"}
        d={
          "M1 3.917C1 1.729 1.023 1 3.917 1c2.893 0 2.916.729 2.916 2.917 0 2.187.01 2.916-2.916 2.916C.99 6.833 1 6.104 1 3.917zm9.164 0c0-2.188.024-2.917 2.917-2.917s2.916.729 2.916 2.917c0 2.187.01 2.916-2.916 2.916-2.926 0-2.917-.729-2.917-2.916zM1 13.08c0-2.187.023-2.916 2.917-2.916 2.893 0 2.916.73 2.916 2.917s.01 2.916-2.916 2.916C.99 15.997 1 15.268 1 13.081zm9.164 0c0-2.187.024-2.916 2.917-2.916s2.916.73 2.916 2.917.01 2.916-2.916 2.916c-2.926 0-2.917-.729-2.917-2.916z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CategoryIcon;
/* prettier-ignore-end */
