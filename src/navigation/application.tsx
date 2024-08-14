import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Icon, {Icons} from "Components/Icon";
import {colorsApp, fontsApp} from "Constant/Theme";
import AboutScreen from "Containers/About";
import CategoryScreen from "Containers/CategoryScreen";
import DetailFoodScreen from "Containers/DetailFood/DetailFood";
import HomeScreen from "Containers/Home";
import LoginScreen from "Containers/Login";
import PrivacyPolicy from "Containers/PrivacyPolicy";
import TremsScreen from "Containers/Term";
import {Image, Pressable, StatusBar} from "react-native";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colorsApp.primary} />
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({navigation}) => ({
            headerShown: true,
            title: "Culinary Companion",
            headerTitleStyle: {
              fontFamily: fontsApp.semiBold,
              fontSize: 18,
            },
            headerRight: () => (
              <Pressable
                onPress={() => {
                  navigation?.push("InfoApp");
                  console.log("app");
                }}
              >
                <Icon name="info" type={Icons.Simple} size={24} color="black" />
              </Pressable>
            ),
            headerLeft: () => (
              <Image
                style={{
                  width: 50,
                  height: 50,
                  marginRight: 10,
                }}
                source={require("../assets/CullinaryCompanion.png")}
              />
            ),
          })}
        />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="Privacy" component={PrivacyPolicy} />
        <Stack.Screen name="Term" component={TremsScreen} />
        <Stack.Screen name="InfoApp" component={AboutScreen} />
        <Stack.Screen name="DetailFood" component={DetailFoodScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
