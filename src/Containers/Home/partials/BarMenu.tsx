import { useNavigation } from "@react-navigation/native";
import Gap from "Components/Atoms/Gap";
import TextCustom from "Components/Atoms/TextCustom/TextCustom";
import Icon, {Icons} from "Components/Icon";
import {colorsApp, fontsApp} from "Constant/Theme";
import {Pressable, View} from "react-native";

type Props = {
  name: string;
  isMore?: boolean;
  navigation?: any
  onPressMore?: ()=> void
};
const BarMenu = ({name, isMore,navigation,onPressMore}: Props) => {
  
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <TextCustom value={name} fontWeight={fontsApp.semiBold} fontSize={18} />

      {isMore && (
        <Pressable
        onPress={onPressMore}
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TextCustom
            value="Lebih Banyak"
            fontWeight={fontsApp.medium}
            fontSize={14}
          />
          <Gap width={5} />
          <Icon
            name="arrow-right-circle"
            type={Icons.Simple}
            color={colorsApp.black}
          />
        </Pressable>
      )}
    </View>
  );
};

export default BarMenu;
