import {Skeleton} from "@rneui/themed";
import {screenWidth} from "Constant/utils";
import {View} from "react-native";

const SkeletonFood = () => {
  return (
    <View
      style={{
        gap: 10,
        flex: 1,
        margin: 10,
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {Array(10)
        .fill(0)
        .map((_, idx) => (
          <Skeleton
            style={{borderRadius: 8}}
            key={idx}
            animation="wave"
            width={screenWidth / 2 - 15}
            height={121}
          />
        ))}
    </View>
  );
};

export default SkeletonFood;
