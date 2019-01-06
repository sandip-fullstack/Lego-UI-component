//@flow
import React from "react";

import { Restore } from "../../components/SvgIcons/SvgIcons";
import { Button } from "../../components/Button/Button";

import type { ButtonProps } from "../Button/Button.types";

/**
 * The Restore button.
 * Accepts all the props of a regular [Button Component](#button)
 *
 * @version 1.0.0
 * @author [Sandip Pal](https://github.com/sandippal7007)
 */
export const RestoreButton = (props: ButtonProps) => {
  return (
    <Button
      theme="success"
      size="small"
      icon={Restore}
      text="Unblock"
      {...props}
    />
  );
};
