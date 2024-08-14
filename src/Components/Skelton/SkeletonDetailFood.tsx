import {ScreenWidth} from "@rneui/base";
import {Skeleton} from "@rneui/themed";
import {screenWidth} from "Constant/utils";
import {View} from "react-native";

const SkeletonDetailFood = () => {
  return (
    <View
      style={{
        flex: 1,
        gap: 10,
      }}
    >
      <Skeleton animation="wave" width={ScreenWidth} height={screenWidth / 2} />
      <Skeleton
        animation="wave"
        width={ScreenWidth / 1.5}
        height={25}
        style={{
          marginHorizontal: 10,
        }}
      />
      <View style={{gap: 8, paddingHorizontal: 10}}>
        <Skeleton animation="wave" width={ScreenWidth - 20} height={20} />
        <Skeleton animation="wave" width={ScreenWidth - 20} height={20} />
        <Skeleton animation="wave" width={ScreenWidth - 20} height={20} />
      </View>
      <Skeleton
        animation="wave"
        width={ScreenWidth / 4}
        height={25}
        style={{
          marginHorizontal: 10,
          marginTop: 20,
        }}
      />
      <View style={{gap: 8, paddingHorizontal: 10}}>
        <Skeleton animation="wave" width={ScreenWidth - 20} height={20} />
        <Skeleton animation="wave" width={ScreenWidth - 20} height={20} />
        <Skeleton animation="wave" width={ScreenWidth - 20} height={20} />
        <Skeleton animation="wave" width={ScreenWidth - 20} height={20} />
        <Skeleton animation="wave" width={ScreenWidth - 20} height={20} />
        <Skeleton animation="wave" width={ScreenWidth - 20} height={20} />
        <Skeleton animation="wave" width={ScreenWidth - 20} height={20} />
      </View>
      <Skeleton
        animation="wave"
        width={ScreenWidth / 4}
        height={25}
        style={{
          marginHorizontal: 10,
          marginTop: 20,
        }}
      />
      <View style={{gap: 8, paddingHorizontal: 10}}>
        <Skeleton animation="wave" width={ScreenWidth - 20} height={20} />
        <Skeleton animation="wave" width={ScreenWidth - 20} height={20} />
        <Skeleton animation="wave" width={ScreenWidth - 20} height={20} />
        <Skeleton animation="wave" width={ScreenWidth - 20} height={20} />
        <Skeleton animation="wave" width={ScreenWidth - 20} height={20} />
        <Skeleton animation="wave" width={ScreenWidth - 20} height={20} />
        <Skeleton animation="wave" width={ScreenWidth - 20} height={20} />
      </View>
    </View>
  );
};

export default SkeletonDetailFood;
