/* eslint-disable prettier/prettier */
import {Icons} from "../Components/Icon";
import HomeScreen from "../Containers/Home";
import SettingScreen from "../Containers/CategoryScreen";

export const Tabs = [
  {
    route: "HomeScreen",
    label: "Home",
    type: Icons.MaterialCommunityIcons,
    activeIcon: "gamepad-circle",
    inActiveIcon: "gamepad-circle-down",
    component: HomeScreen,
  },
  {
    route: "SettingScreen",
    label: "Settings",
    type: Icons.Ionicons,
    activeIcon: "person-circle",
    inActiveIcon: "person-circle-outline",
    component: SettingScreen,
  },
];
