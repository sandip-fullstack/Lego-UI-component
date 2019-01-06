//@flow
import React from "react";

import { Button } from "../../components/Button/Button";

import type { ButtonProps } from "../Button/Button.types";
/**
 * The Primary button.
 * Accepts all the props of a regular [Button Component](#button)
 *
 * @version 1.0.0
 * @author [Sandip Pal](https://github.com/sandippal7007)
 */
export const PrimaryButton = (props: ButtonProps) => {
  return (
    <Button
      text="Submit"
      look="rounded"
      size="small"
      theme="primary"
      {...props}
    />
  );
};
