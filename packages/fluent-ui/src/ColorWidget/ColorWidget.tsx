import React from "react";
import {
  ColorPicker,
  IColorPickerProps,
  IColor,
  IColorPickerStyles,
  getColorFromString,
  Label,
} from "@fluentui/react";
import { WidgetProps } from "@rjsf/core";
import _pick from "lodash/pick";
import { useConstCallback } from "@uifabric/react-hooks";

const colorPickerStyles: Partial<IColorPickerStyles> = {
  panel: { padding: 12 },
  root: {
    maxWidth: 352,
    minWidth: 352,
  },
  colorRectangle: { height: 268 },
};

const styles_red = {
  // TODO: get this color from theme.
  color: "rgb(164, 38, 44)",
  fontSize: 12,
  fontWeight: "normal" as any,
  fontFamily: `"Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;`,
};

// Keys of IColorPickerProps from @fluentui/react
const allowedProps = [
  "componentRef",
  "color",
  "strings",
  "alphaType",
  "alphaSliderHidden",
  "hexLabel",
  "redLabel",
  "greenLabel",
  "blueLabel",
  "alphaLabel",
  "className",
  "theme",
  "styles",
];

const ColorWidget = ({
  id,
  schema,
  options,
  value,
  required,
  disabled,
  readonly,
  label,
  onChange,
  onBlur,
  onFocus,
}: WidgetProps) => {
  const { enumOptions, enumDisabled } = options;

  const white = getColorFromString("#ffffff")!;
  const [color, setColor] = React.useState(white);
  
  const updateColor = useConstCallback((ev: any, colorObj: IColor) => {
    setColor(colorObj);
    onChange(colorObj.hex);
  });

  const uiProps = _pick(options.props || {}, allowedProps);

  return (
    <>
      <Label>
        {label || schema.title}
        {required && <span style={styles_red}>&nbsp;*</span>}
      </Label>
      <ColorPicker
        color={color}
        onChange={updateColor}
        alphaType={"alpha"}
        showPreview={true}
        styles={colorPickerStyles}
        {...uiProps}
      />
    </>
  );
};
export default ColorWidget;
