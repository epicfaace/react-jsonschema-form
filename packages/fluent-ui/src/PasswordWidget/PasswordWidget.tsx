import React from "react";

import { WidgetProps, utils } from "@rjsf/core";

import TextWidget from "../TextWidget";

const PasswordWidget = (props: WidgetProps) => {
  const uiProps: any = props.options["props"] || {};

  const onChange = (value: any) => {
    props.onChange(value);
  };
  let options = {
    ...props.options,
    props: {
      type: "password",
      ...uiProps,
    },
  };
  // TODO: rows and columns.
  return (
    <TextWidget
      {...props}
      options={options}
      value={props.value}
      onChange={onChange}
      {...uiProps}
    />
  );
};

export default PasswordWidget;
