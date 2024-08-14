/* eslint-disable prettier/prettier */

/* eslint-disable react/react-in-jsx-scope */

import { colorsApp } from "Constant/Theme";
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

type Props = {
  name?: string;
  onPress?: (event: GestureResponderEvent) => void;
  styleBtn?: ViewStyle;
  height? : number,
  color?: string
};
const ButtonCustom: React.FC<Props> = ({
  name,
  onPress,
  styleBtn,
  height = 40,
  color
}): JSX.Element => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          height: height,
          backgroundColor: color ?? colorsApp.btnColor,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
        },
        styleBtn,
      ]}
    >
      {/* <LinearGradient
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
        }}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        colors={["#3550DC","#3550DC"]}
      > */}
        <Text
          style={{
            fontWeight: "600",
            color: "white",
            fontFamily: "Poppins-SemiBold",
          }}
        >
          {name}
        </Text>
      {/* </LinearGradient> */}
    </TouchableOpacity>
  );
};

export default ButtonCustom;
