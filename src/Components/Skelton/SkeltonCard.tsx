import {Skeleton} from "@rneui/themed";
import {View} from "react-native";

const SkeltonCard = () => {
  return (
    <View style={{gap: 10, flex: 1}}>
      {Array(5)
        .fill(0)
        .map((_, idx) => (
          <View key={idx} style={{flexDirection: "row", columnGap: 10}}>
            <Skeleton animation="wave" width={180} height={80} />
            <View style={{rowGap: 10}}>
              <Skeleton animation="wave" width={200} height={30} />
              <Skeleton animation="wave" width={150} height={25} />
            </View>
          </View>
        ))}
    </View>
  );
};

export default SkeltonCard;
