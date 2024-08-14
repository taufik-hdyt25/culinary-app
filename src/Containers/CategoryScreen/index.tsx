/* eslint-disable prettier/prettier */
import Gap from "Components/Atoms/Gap";
import TextCustom from "Components/Atoms/TextCustom/TextCustom";
import Icon, {Icons} from "Components/Icon";
import SkeletonFood from "Components/Skelton/SkeletonFood";
import {colorsApp, fontsApp} from "Constant/Theme";
import {screenWidth} from "Constant/utils";
import getAdMobUnitId from "config/configAds";
import {getAllFoods} from "libraries/foods/food";
import React, {useEffect, useState} from "react";
import {FlatList, Image, Pressable, View} from "react-native";
import {BannerAd, BannerAdSize} from "react-native-google-mobile-ads";

type Props = {
  navigation: any;
};

const CategoryScreen: React.FC<Props> = ({navigation}): JSX.Element => {
  const {banner} = getAdMobUnitId();
  const [foods, setFoods] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const getFoods = async () => {
    try {
      setLoading(true);
      const resp = await getAllFoods();
      setLoading(false);
      setFoods(resp);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getFoods();
  }, []);
  return loading ? (
    <SkeletonFood />
  ) : (
    <View style={{position: "relative", height: "100%"}}>
      <TextCustom
        fontWeight={fontsApp.semiBold}
        fontSize={20}
        color={colorsApp.white}
        value="Daftar Menu"
        style={{
          paddingVertical: 10,
          backgroundColor: colorsApp.primary,
          textAlign: "center",
        }}
      />

      <View style={{paddingHorizontal: 15, height: "80%"}}>
        <FlatList
          data={foods?.data}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
            gap: 10,
          }}
          ItemSeparatorComponent={() => <View style={{height: 10}} />}
          ListHeaderComponent={() => <View style={{height: 15}} />}
          renderItem={({item, index}) => (
            <Pressable
              onPress={() => navigation?.push("DetailFood", {id: item?.id})}
            >
              <Image
                style={{
                  width: screenWidth / 2 - 20,
                  height: screenWidth / 2,
                  borderRadius: 10,
                }}
                source={{
                  uri: item?.image,
                }}
              />
              <TextCustom
                value={item.name}
                style={{textAlign: "center", marginTop: 10}}
                fontSize={14}
                fontWeight={fontsApp.semiBold}
                numLines={1}
              />
            </Pressable>
          )}
        />
      </View>
      <BannerAd size={BannerAdSize.FULL_BANNER} unitId={banner} />
      <View
        style={{
          backgroundColor: colorsApp.primary,
          //   marginBottom: 20,
          paddingVertical: 15,
          bottom: 0,
          position: "absolute",
          width: "100%",
        }}
      >
        <Pressable
          style={{
            alignSelf: "center",
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => navigation?.goBack()}
        >
          <Icon
            color={colorsApp.white}
            name="arrow-left-circle-outline"
            type={Icons.MaterialCommunityIcons}
          />
          <Gap width={5} />
          <TextCustom value="Back" color={colorsApp.white} />
        </Pressable>
      </View>
    </View>
  );
};

export default CategoryScreen;
