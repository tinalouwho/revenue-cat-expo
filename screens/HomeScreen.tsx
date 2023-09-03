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
            <View style={{ width: 30, height: 30 }}>
              <Image
                source={require("../assets/ghost.png")}
                style={{ flex: 1, width: undefined, height: undefined }}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        </View>
        <View className="flex justify-center items-center py-6">
          <Text className="text-[#2D2D2D] dark:text-[#E5E1D5] font-black text-6xl text-">
            RUME
          </Text>
          <Text className=" font-bold text-red-600 text-lg">
            Go to your RUME where it&apos;s safe.
          </Text>
        </View>
        <View className="mx-5  flex-1 justify-center">
          <View className="flex-row justify-between">
            <ActionRow
              title="Unlock your RUME"
              screen="Demo"
              color="#222222"
              icon="key"
              vertical
            />
            <ActionRow
              title="Browse unlocked RUMEs"
              screen="Demo"
              color="#222222"
              icon="chatbubbles-sharp"
              vertical
            />
          </View>
          <ActionRow
            title="Share"
            screen="Demo"
            color="#222222"
            icon="share-social"
            vertical
          />
          <ActionRow
            title="Share"
            screen="Demo"
            color="#222222"
            icon="share-social"
            vertical
            requiresPro
          />
          <ActionRow
            title="Share"
            screen="Demo"
            color="#222222"
            icon="share-social"
            vertical
            requiresPro
          />
          <ActionRow
            title="Share"
            screen="Demo"
            color="#222222"
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
