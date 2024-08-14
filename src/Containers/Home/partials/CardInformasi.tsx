import Gap from "Components/Atoms/Gap";
import TextCustom from "Components/Atoms/TextCustom/TextCustom";
import {fontsApp} from "Constant/Theme";
import {Image, Pressable, View} from "react-native";
import {Card} from "react-native-paper";

type Props = {
  data: {
    image: string;
    name: string;
    description: string;
  };
  onPress?: () => void;
};
const CardInformasi = ({data, onPress}: Props) => {
  return (
    <Pressable onPress={onPress}>
      <Card
        style={{
          height: 102,
          width: "100%",
          borderRadius: 10,
          padding: 0,
        }}
      >
        <Card.Content
          style={{
            paddingVertical: 0,
            paddingHorizontal: 0,
            flexDirection: "row",
            height: "100%",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              height: "100%",
              width: 111,
              borderRadius: 10,
            }}
            source={{
              uri: data.image,
            }}
          />
          <Gap width={20} />
          <View style={{flex: 1}}>
            <TextCustom
              value={data?.name}
              fontSize={16}
              fontWeight={fontsApp.semiBold}
              numLines={2}
            />
            <TextCustom numLines={2} value={data?.description} />
          </View>
        </Card.Content>
      </Card>
    </Pressable>
  );
};

export default CardInformasi;
