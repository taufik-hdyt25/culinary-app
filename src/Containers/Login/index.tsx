import ButtonCustom from "Components/Atoms/Button/ButtonCustom";
import Gap from "Components/Atoms/Gap";
import TextCustom from "Components/Atoms/TextCustom/TextCustom";
import {colorsApp, fontsApp} from "Constant/Theme";
import getAdMobUnitId from "config/configAds";
import {createUser} from "libraries/user/user";
import {useEffect, useState} from "react";
import {Image, SafeAreaView, ScrollView, View} from "react-native";
import DeviceInfo from "react-native-device-info";
import {useInterstitialAd} from "react-native-google-mobile-ads";

const LoginScreen: React.FC = ({navigation}: any): JSX.Element => {
  const {interstial} = getAdMobUnitId();
  // menggunakan hooks
  const {isLoaded, isClosed, load, show} = useInterstitialAd(interstial, {
    requestNonPersonalizedAdsOnly: true,
  });
  // untuk load iklan
  useEffect(() => {
    load();
  }, [load]);

  useEffect(() => {
    if (isClosed) {
      navigation?.replace("Home");
    }
  }, [isClosed, navigation]);

  const [deviceInfo, setDeviceInfo] = useState<any>(null);

  useEffect(() => {
    const fetchDeviceInfo = async () => {
      const model = DeviceInfo.getModel();
      const deviceName = await DeviceInfo.getDeviceName();

      setDeviceInfo({
        model,
        deviceName,
      });
    };

    fetchDeviceInfo();
  }, []);

  const handleNext = async () => {
    try {
      await createUser(deviceInfo);
      if (isLoaded) {
        show();
      }
      navigation?.replace("Home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        height: "100%",
        paddingVertical: 50,
        paddingHorizontal: 15,
        backgroundColor: "white",
      }}
    >
      <ScrollView>
        <View>
          <TextCustom
            value="Welcome to the Culinary World!"
            fontSize={24}
            style={{textAlign: "center"}}
            fontWeight={fontsApp.semiBold}
          />
          <TextCustom
            fontSize={24}
            fontWeight={fontsApp.bold}
            value="Culinary Companion"
            style={{textAlign: "center"}}
          />
        </View>

        <Image
          style={{height: 300, width: 300, alignSelf: "center"}}
          source={require("../../assets/CullinaryCompanion.png")}
        />

        <Gap height={200} />

        <ButtonCustom
          onPress={handleNext}
          color={colorsApp.primary}
          name="Lanjut"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
