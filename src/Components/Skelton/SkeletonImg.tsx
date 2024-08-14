import {Skeleton} from "@rneui/themed";
import {View} from "react-native";

const SkeletonImg = () => {
  return (
    <View
      style={{
        gap: 10,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {Array(5)
        .fill(0)
        .map((_, idx) => (
          <Skeleton
            style={{borderRadius: 8}}
            key={idx}
            animation="wave"
            width={140}
            height={121}
          />
        ))}
    </View>
  );
};

export default SkeletonImg;
