import TextCustom from "Components/Atoms/TextCustom/TextCustom";
import {fontsApp} from "Constant/Theme";
import {View} from "react-native";

const Empty = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextCustom
        value="Data Empty"
        fontSize={18}
        fontWeight={fontsApp.semiBold}
      />
    </View>
  );
};

export default Empty;
