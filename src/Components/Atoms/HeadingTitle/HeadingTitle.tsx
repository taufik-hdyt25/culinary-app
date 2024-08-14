/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import {Text, TextStyle, View} from "react-native";
import React from "react";
import { ColorsApp } from "Constant/Colors";

type Props = {
  name: string;
  fontSize?: number;
  color?: string;
  styles?: TextStyle;
};
const HeadingTitle: React.FC<Props> = ({
  color,
  fontSize,
  name,
  styles,
}): JSX.Element => {
  return (
    <View>
      <Text
        style={[
          {
            fontSize: fontSize ?? 16,
            color: color ?? ColorsApp.textPrimary,
            fontFamily: "Poppins-Bold",
          },
          styles,
        ]}
      >
        {name}
      </Text>
    </View>
  );
};

export default HeadingTitle;
