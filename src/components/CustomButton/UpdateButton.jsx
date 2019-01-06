//@flow
import React from "react";

import { Button } from "../../components/Button/Button";

import type { ButtonProps } from "../Button/Button.types";
/**
 * The Update button.
 * Accepts all the props of a regular [Button Component](#button)
 *
 * @version 1.0.0
 * @author [Sandip Pal](https://github.com/sandippal7007)
 */
export const UpdateButton = (props: ButtonProps) => {
  return (
    <Button
      text="Update"
      look="rounded"
      size="small"
      theme="primary"
      {...props}
    />
  );
};
