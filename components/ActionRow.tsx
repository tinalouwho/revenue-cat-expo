import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

type Props = {
  title: string;
  screen: any;
  color: string;
  requiresPro?: boolean;
  icon?: any;
  vertical?: boolean;
};

const ActionRow = ({
  title,
  screen,
  color,
  requiresPro,
  icon,
  vertical,
}: Props) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screen)}
      className={`flex flex-1 justify-center items-center py-2 rounded  m-1  ${
        vertical ? "flex-col" : "flex-row"
      }`}
      style={{ backgroundColor: color }}
    >
      <Ionicons name={icon} size={25} color="#E2DFD4" />
      <Text className="text-xs p-1 font-bold text-[#E2DFD4]">{title}</Text>
    </TouchableOpacity>
  );
};
export default ActionRow;
