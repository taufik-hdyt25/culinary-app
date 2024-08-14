import * as React from "react";
import {Dimensions, Image, View} from "react-native";
import Carousel from "react-native-reanimated-carousel";

function CarouselComponent({data}: any) {
  const width = Dimensions.get("window").width;
  const datas = [
    "https://img-global.cpcdn.com/recipes/4530f0a5e76d012a/1200x630cq70/photo.jpg",
    "https://cdn1-production-images-kly.akamaized.net/LDRjBxjUH3gyrzEAUFrCi_XisTs=/0x148:1920x1230/800x450/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3093328/original/069244600_1585909700-fried-2509089_1920.jpg",
    "https://www.dapurumami.com/backup/dapurumami-test/recepies/blob-ggjLzb1658636834.",
    "https://img-global.cpcdn.com/recipes/57757b9b5a64ab71/680x482cq70/nasi-telor-pontianak-foto-resep-utama.jpg",
  ];

  return (
    <View style={{height: width / 2}}>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        mode="parallax"
        data={datas}
        scrollAnimationDuration={5000}
        renderItem={({item, index}) => (
          <Image
            source={{
              uri: item,
            }}
            style={{
              height: "100%",
              borderRadius: 8,
            }}
          />
        )}
      />
    </View>
  );
}

CarouselComponent.displayName = "Carousel";
export default CarouselComponent;
