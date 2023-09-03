import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { RootStackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import ThemeSwitch from "../components/ThemeSwitch";

import { useColorScheme } from "nativewind";

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Demo"
>;

export default function DemoScreen() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView className="bg-[#E2DFD4] dark:bg-[#171717] flex-1 ">
      <ThemeSwitch />
      <TouchableOpacity
        onPress={navigation.goBack}
        className="flex-row items-center m-4"
      >
        <Ionicons name="arrow-back" size={30} color="#00AD92" />
        <Text className="dark:text-[#c3c3c3]  font-bold">Go Back</Text>
      </TouchableOpacity>
      <Text className="text-[#2D2D2D] dark:text-[#E5E1D5] text-3xl font-bold p-8">
        DemoScreen
      </Text>
    </SafeAreaView>
  );
}
