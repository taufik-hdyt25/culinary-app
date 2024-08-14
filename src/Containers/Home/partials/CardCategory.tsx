import TextCustom from "Components/Atoms/TextCustom/TextCustom";
import Icon, { Icons } from "Components/Icon";
import { colorsApp } from "Constant/Theme";
import {Image, Pressable} from "react-native";
import {Card} from "react-native-paper";

type Props = {
    name: string,
    iconName: string,
    iconType: any
    onPress?: ()=> void
}
const CardCategory = ({iconName,iconType,name,onPress}:Props) => {
  return (
    <Pressable onPress={onPress}>
        <Card
        style={{
            width: 80,
            height: 63,
        }}
        >
        <Card.Content
            style={{
            paddingHorizontal: 0,
            paddingVertical: 0,
            justifyContent: "center",
            alignItems: "center",
            height:"100%"
            }}
        >
            <Icon name={iconName} type={iconType} color={colorsApp.blackAlpha} />
            <TextCustom fontSize={12} value={name} />
        </Card.Content>
        </Card>
    </Pressable>
  );
};

export default CardCategory;
