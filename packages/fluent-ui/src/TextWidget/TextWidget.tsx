import React from "react";
import { TextField } from "@fluentui/react";
import { WidgetProps } from "@rjsf/core";
import _pick from "lodash/pick";

// Keys of ITextFieldProps from @fluentui/react
const allowedProps = ["multiline", "resizable", "autoAdjustHeight", "underlined", "borderless", "label", "onRenderLabel", "description", "onRenderDescription", "prefix", "suffix", "onRenderPrefix", "onRenderSuffix", "iconProps", "defaultValue", "value", "disabled", "readOnly", "errorMessage", "onChange", "onNotifyValidationResult", "onGetErrorMessage", "deferredValidationTime", "className", "inputClassName", "ariaLabel", "validateOnFocusIn", "validateOnFocusOut", "validateOnLoad", "theme", "styles", "autoComplete", "mask", "maskChar", "maskFormat"];

const TextWidget = ({
  id,
  required,
  readonly,
  disabled,
  label,
  value,
  onChange,
  onBlur,
  onFocus,
  autofocus,
  options,
  schema,
}: WidgetProps) => {
  const _onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    onChange(value === "" ? options.emptyValue : value);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);
  const uiProps = _pick(options.props || {}, allowedProps);
  
  return (
    <div style={{marginTop: 10}} >
    <TextField
      id={id}
      label={label || schema.title}
      autoFocus={autofocus}
      required={required}
      disabled={disabled}
      readOnly={readonly}
      name={name}
      type={schema.type as string}
      value={value ? value : ""}
      onChange={_onChange as any}
      onBlur={_onBlur}
      onFocus={_onFocus}
      {...uiProps}
    />
    </div>
  );
};

export default TextWidget;
