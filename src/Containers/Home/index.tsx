import CardFood from "Components/Atoms/CardFood/CardFood";
import Empty from "Components/Empty/Empty";
import {SkeltonCard} from "Components/Skelton";
import SkeletonImg from "Components/Skelton/SkeletonImg";
import {getAllFoods} from "libraries/foods/food";
import React, {useEffect, useState} from "react";
import {FlatList, View} from "react-native";
import BarMenu from "./partials/BarMenu";
import CardInformasi from "./partials/CardInformasi";
import CarouselComponent from "./partials/Carousel";
import getAdMobUnitId from "config/configAds";
import {useInterstitialAd} from "react-native-google-mobile-ads";

const HomeScreen: React.FC = ({navigation}: any): JSX.Element => {
  const [foods, setFoods] = useState<any>(null);
  const [foodsRec, setFoodsRec] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [loadingRec, setLoadingRec] = useState(false);
  const {interstial} = getAdMobUnitId();

  const {isLoaded, isClosed, load, show} = useInterstitialAd(interstial, {
    requestNonPersonalizedAdsOnly: true,
  });
  const getFoods = async () => {
    try {
      setLoading(true);
      const resp = await getAllFoods("limit=5");
      setLoading(false);
      setFoods(resp);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getFoodsRekomendasi = async () => {
    try {
      setLoadingRec(true);
      const resp = await getAllFoods("limit=5");
      setLoadingRec(false);
      setFoodsRec(resp);
    } catch (error) {
      console.log(error);
      setLoadingRec(false);
    }
  };

  useEffect(() => {
    getFoods();
    getFoodsRekomendasi();
  }, []);

  return (
    <View style={{height: "100%"}}>
      <CarouselComponent />

      <View style={{padding: 10, height: 180}}>
        <BarMenu
          name="Rekomendasi"
          isMore
          navigation={navigation}
          onPressMore={() => {
            if (isLoaded) {
              show();
            }
            navigation?.push("Category");
          }}
        />
        {loading ? (
          <SkeletonImg />
        ) : (
          <FlatList
            data={foodsRec?.data}
            style={{flex: 1}}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1, gap: 10}}
            renderItem={({item, index}) => (
              <CardFood
                data={item}
                onPress={() => {
                  if (isLoaded) {
                    show();
                  }
                  navigation?.push("DetailFood", {id: item?.id});
                }}
              />
            )}
            ListEmptyComponent={<Empty />}
          />
        )}
      </View>
      <View style={{padding: 10, flexGrow: 1}}>
        <BarMenu name="Informasi Lain" />
        {loading ? (
          <SkeltonCard />
        ) : (
          <FlatList
            data={foods?.data}
            style={{flex: 1}}
            contentContainerStyle={{flexGrow: 1, gap: 10}}
            renderItem={({item, index}) => (
              <CardInformasi
                data={item}
                onPress={() => {
                  navigation?.push("DetailFood", {id: item?.id});
                }}
              />
            )}
            ListEmptyComponent={<Empty />}
          />
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
