import {IconNode} from "@rneui/base";
import {Input} from "@rneui/themed";
import Icon, {Icons} from "Components/Icon";
import { ColorsApp } from "Constant/Colors";
import {Text} from "react-native";

type Props = {
  label?: string;
  placeholder?: string;
  leftIcon?: IconNode;
  rightIcon?: IconNode;
  onChangeText?: () => void;
  value?: string;
  isPassword?: boolean
};
const InputCustom: React.FC<Props> = ({
  label,
  leftIcon,
  placeholder,
  rightIcon,
  isPassword = false,
  onChangeText,
  value,
}): JSX.Element => {
  return (
    <Input
      placeholder={placeholder}
      secureTextEntry={isPassword}
      label={
        <Text
          style={{
            fontFamily: "Poppins-SemiBold",
            color: ColorsApp.gray,
          }}
        >
          {label}
        </Text>
      }
      onChangeText={onChangeText}
      value={value}
      containerStyle={{
        paddingHorizontal: 0,
        height: 80,
      }}
      style={{
        paddingBottom: 0,
        marginBottom: 0,
        fontSize: 14,
        fontFamily: "Poppins-Regular",
      }}
      inputStyle={{
        borderBottomWidth: 0,
        textAlignVertical: "center",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 0,
      }}
      inputContainerStyle={{
        borderBottomColor: "black",
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 8,
        paddingHorizontal: 10,
      }}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
    />
  );
};

export default InputCustom;
