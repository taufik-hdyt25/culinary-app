/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */

import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import {SafeAreaProvider} from "react-native-safe-area-context";
import StackNavigator from "./application";

const MainApp: React.FC = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <StackNavigator />
    </SafeAreaProvider>
  );
};

export default MainApp;
