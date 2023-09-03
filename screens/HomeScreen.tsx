import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import ActionRow from "../components/ActionRow";
import ThemeSwitch from "../components/ThemeSwitch";
import { RootStackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView className="w-full bg-[#E2DFD4] flex-1 justify-center dark:bg-[#171717] ">
      <ScrollView>
        <View className="flex flex-row justify-between items-center">
          <ThemeSwitch />
          <TouchableOpacity
            onPress={() => navigation.navigate("Paywall")}
            className="flex flex-col z-50  items-end justify-center fixed p-4"
          >
            <FontAwesome name="user-circle-o" size={30} color="#00AD92" />
          </TouchableOpacity>
        </View>
        <View className="flex justify-center items-center">
          <Image
            source={require("../assets/rumecircle.png")}
            className="w-32 h-32"
          />
        </View>
        <View className="mx-5  flex-1 justify-center">
          <View className="flex-row justify-between">
            <ActionRow
              title="Track Workout"
              screen="Demo"
              color="#EA162D"
              icon="fitness"
              vertical
            />
            <ActionRow
              title="Browse Workouts"
              screen="Demo"
              color="#C58E00"
              icon="library"
              vertical
            />
          </View>
          <ActionRow
            title="Track Workout"
            screen="Demo"
            color="#0A40D4"
            icon="share-social"
            vertical
          />
          <ActionRow
            title="Track Workout"
            screen="Demo"
            color="#06046A"
            icon="share-social"
            vertical
            requiresPro
          />
          <ActionRow
            title="Track Workout"
            screen="Demo"
            color="#AB3232"
            icon="share-social"
            vertical
            requiresPro
          />
          <ActionRow
            title="Track Workout"
            screen="Demo"
            color="#00AD92"
            icon="share-social"
            vertical
            requiresPro
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
