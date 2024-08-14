import {screenWidth} from "Constant/utils";
import {ImageBackground, Pressable} from "react-native";

type Props = {
  onPress?: () => void;
  data?: any;
};
const CardFood: React.FC<Props> = ({data, onPress}): JSX.Element => {
  return (
    <Pressable onPress={onPress}>
      <ImageBackground
        style={{
          height: 121,
          width: 150, // 45% dari lebar layar
          padding: 4,
          alignItems: "flex-end",
        }}
        borderRadius={10}
        source={{
          uri: data?.image,
        }}
      >
        {/* <Icon color={colorsApp.primary} name="hearto" type={Icons.AntDesign} /> */}
      </ImageBackground>
    </Pressable>
  );
};

export default CardFood;
