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
  "Paywall"
>;

export default function PaywallScreen() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView className="bg-[#E2DFD4] dark:bg-[#171717] flex-1 ">
      <ThemeSwitch />
      <TouchableOpacity
        onPress={navigation.goBack}
        className="flex-row items-center m-4"
      >
        <Ionicons name="arrow-back" size={40} color="#00AD92" />
        <Text className="dark:text-[#c3c3c3] text-xl font-bold">Go Back</Text>
      </TouchableOpacity>
      <View className="flex space-y-2 flex-col justify-center items-center">
        <Text className="text-3xl font-bold">Upgrade</Text>
        <Text className="font-semibold ">
          Upgrade to Pro for access all content!
        </Text>
      </View>
    </SafeAreaView>
  );
}
