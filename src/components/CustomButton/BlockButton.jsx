//@flow
import React from "react";

import { Block } from "../../components/SvgIcons/SvgIcons";
import { Button } from "../../components/Button/Button";

import type { ButtonProps } from "../Button/Button.types";

/**
 * The Block button.
 * Accepts all the props of a regular [Button Component](#button)
 *
 * @version 1.0.0
 * @author [Sandip Pal](https://github.com/sandippal7007)
 */
export const BlockButton = (props: ButtonProps) => {
  return (
    <Button theme="danger" size="small" icon={Block} text="Block" {...props} />
  );
};
