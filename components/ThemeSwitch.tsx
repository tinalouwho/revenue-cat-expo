import React from "react";
import { View, Switch } from "react-native";

import { useColorScheme } from "nativewind";

const ThemeSwitch = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <View className="flex flex-row justify-between items-center">
      <Switch
        trackColor={{ true: "#00AD92", false: "grey" }}
        value={colorScheme === "dark"}
        onChange={toggleColorScheme}
        className="ml-4"
      />
    </View>
  );
};

export default ThemeSwitch;
