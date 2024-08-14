import {useEffect, useRef} from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import * as Animatable from "react-native-animatable";
import Icon from "../Icon";
import { ColorsApp } from "../../Constant/Colors";
import { colorsApp } from "Constant/Theme";

const TabButton = (props: any) => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef<any>(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({
        0: {scale: 0.5, rotate: "0deg"}, // default
        1: {scale: 1.5, rotate: "360deg"}, // after
      });
    } else {
      viewRef.current.animate({
        0: {scale: 1.5, rotate: "360deg"},
        1: {scale: 1, rotate: "0deg"},
      });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}
    >
      <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
        <Icon
          type={item.type}
          name={focused ? item.activeIcon : item.inActiveIcon}
          color={focused ? colorsApp.blackAlpha : colorsApp.gray}
          size={24}
        />
      </Animatable.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // main x center vertikal
    alignItems: "center", // main x center horizontal
  },
});

export default TabButton;
