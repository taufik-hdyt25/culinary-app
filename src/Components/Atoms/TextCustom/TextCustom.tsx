import {Text} from "@rneui/themed";
import {TextStyle} from "react-native";

type Props = {
  value: string;
  style?: TextStyle;
  fontSize?: number;
  fontWeight?: string;
  color?: string;
  numLines?: number;
};
const TextCustom: React.FC<Props> = ({
  value,
  style,
  fontSize,
  fontWeight,
  color,
  numLines,
}): JSX.Element => {
  return (
    <Text
      numberOfLines={numLines}
      style={[
        {
          fontSize: fontSize ?? 14,
          fontFamily: fontWeight ?? "Poppins-Regular",
          color: color ?? "black",
        },
        style,
      ]}
    >
      {value}
    </Text>
  );
};

export default TextCustom;
