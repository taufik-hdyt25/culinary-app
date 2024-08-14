import { View } from "react-native";
import { Input } from "@rneui/themed";
import HeadingTitle from "../HeadingTitle/HeadingTitle";
import React from "react";


type Props = {
  label?: string;
  placeholderText?: string;
};
const InputCustom: React.FC<Props> = ({
  label,
  placeholderText,
}): JSX.Element => {
  return (
    <View>
      {label && <HeadingTitle name={label} />}
      {/* <Input placeholder={placeholderText} /> */}
    </View>
  );
};
export default InputCustom;
