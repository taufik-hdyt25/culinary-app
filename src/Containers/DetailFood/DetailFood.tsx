import Gap from "Components/Atoms/Gap";
import TextCustom from "Components/Atoms/TextCustom/TextCustom";
import Icon, {Icons} from "Components/Icon";
import SkeletonDetailFood from "Components/Skelton/SkeletonDetailFood";
import {colorsApp, fontsApp} from "Constant/Theme";
import {getFoodById} from "libraries/foods/food";
import {useEffect, useState} from "react";
import {Image, Pressable, ScrollView, View} from "react-native";

const DetailFoodScreen = ({navigation, route}: any) => {
  const id = route?.params?.id;

  const [datas, setDatas] = useState<any>(null);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const resp = await getFoodById(id);
      setDatas(resp.food);
      setIsLoading(false);
    };
    if (id) {
      getData();
    }
  }, [id]);

  return loading ? (
    <SkeletonDetailFood />
  ) : (
    <View style={{flex: 1}}>
      <ScrollView
        style={{
          marginBottom: 50,
        }}
      >
        {datas?.image && (
          <Image
            style={{
              height: 200,
              width: "100%",
            }}
            source={{
              uri: datas?.image,
            }}
          />
        )}

        <TextCustom
          fontSize={18}
          fontWeight={fontsApp.semiBold}
          value={datas?.name}
          style={{
            paddingHorizontal: 10,
            marginTop: 10,
          }}
        />

        <TextCustom
          fontSize={14}
          fontWeight={fontsApp.medium}
          value={datas?.description}
          style={{
            paddingHorizontal: 10,
            marginVertical: 10,
          }}
        />

        <View
          style={{
            paddingHorizontal: 10,
            marginVertical: 10,
          }}
        >
          <TextCustom
            fontSize={14}
            value="Ingredients : "
            fontWeight={fontsApp.bold}
          />

          {datas?.ingredients
            ?.filter((item: any) => item.trim() !== "") // Filter untuk menghapus string kosong
            .map((item: any, index: number) => (
              <View key={index} style={{flexDirection: "row", flex: 1}}>
                <TextCustom
                  value={index + 1 + "."}
                  fontWeight={fontsApp.semiBold}
                />
                <Gap width={10} />
                <TextCustom value={item} style={{flex: 1}} />
              </View>
            ))}
        </View>
        <View
          style={{
            paddingHorizontal: 10,
            marginVertical: 10,
          }}
        >
          <TextCustom
            fontSize={18}
            value="Steps : "
            fontWeight={fontsApp.bold}
          />
          {datas?.steps
            ?.filter((item: any) => item.trim() !== "") // Filter untuk menghapus string kosong
            .map((item: any, index: number) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  columnGap: 10,
                  flex: 1,
                }}
              >
                <TextCustom
                  value={index + 1 + "."}
                  fontWeight={fontsApp.semiBold}
                />
                <TextCustom value={item} style={{flex: 1}} />
              </View>
            ))}
        </View>
      </ScrollView>
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
export default DetailFoodScreen;
