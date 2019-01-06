//@flow
import React from "react";

import { Correct } from "../../components/SvgIcons/SvgIcons";
import { Button } from "../../components/Button/Button";

import type { ButtonProps } from "../Button/Button.types";

/**
 * The Approve button.
 * Accepts all the props of a regular [Button Component](#button)
 *
 * @version 1.0.0
 * @author [Sandip Pal](https://github.com/sandippal7007)
 */
export const ApproveButton = (props: ButtonProps) => {
  return <Button theme="primary" icon={Correct} text="Approve" {...props} />;
};
