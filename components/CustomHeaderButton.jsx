import * as React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import colors from "../constants/colors.jsx";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

// define IconComponent, color, sizes and OverflowIcon in one place
const CustomHeaderButton = (props) => (
  <HeaderButton
    IconComponent={Ionicons}
    iconSize={23}
    color={props.color ?? colors.blue}
    {...props}
  />
);
export default CustomHeaderButton;
