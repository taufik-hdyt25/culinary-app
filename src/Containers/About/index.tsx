import ButtonCustom from "Components/Atoms/Button/ButtonCustom";
import Gap from "Components/Atoms/Gap";
import TextCustom from "Components/Atoms/TextCustom/TextCustom";
import {colorsApp} from "Constant/Theme";
import {screenHeight, screenWidth} from "Constant/utils";
import {Image, Linking, View} from "react-native";

const AboutScreen = ({navigation}: any) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        height: screenHeight,
        padding: 10,
      }}
    >
      <TextCustom value="Versi 1.3" style={{textAlign: "right"}} />
      <Image
        style={{height: 300, width: 300, alignSelf: "center"}}
        source={require("../../assets/CullinaryCompanion.png")}
      />

      <ButtonCustom
        name="Privacy Policy"
        color={colorsApp.primary}
        onPress={() => navigation?.navigate("Privacy")}
      />
      <Gap height={20} />
      <ButtonCustom
        name="Term & Conditions"
        color={colorsApp.primary}
        onPress={() => navigation?.navigate("Term")}
      />
      <Gap height={20} />
      <ButtonCustom
        name="Join Telegram"
        color={colorsApp.primary}
        onPress={() => {
          Linking.openURL("https://t.me/+w9VsAWU7yiUzMGFl");
        }}
      />
    </View>
  );
};

export default AboutScreen;
