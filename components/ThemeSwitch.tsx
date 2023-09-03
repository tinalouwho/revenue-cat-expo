import React from "react";
import { View, Switch } from "react-native";

import { useColorScheme } from "nativewind";

const ThemeSwitch = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Switch
        trackColor={{ true: "#00AD92", false: "grey" }}
        ios_backgroundColor="grey" // Background color for iOS
        value={colorScheme === "dark"}
        onValueChange={toggleColorScheme} // Use onValueChange instead of onChange
        style={{ transform: [{ scale: 0.7 }], marginLeft: 10 }} // Adjust size with transform and margin
      />
    </View>
  );
};

export default ThemeSwitch;
