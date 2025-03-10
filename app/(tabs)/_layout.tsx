import React from "react";
import { Tabs } from "expo-router";
import { Image, ImageBackground, Text, View } from "react-native";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";

const TabIcon = ({ focused, title, icon }: any) => {
  if (focused)
    return (
      <ImageBackground
        className="flex flex-row w-full flex-1  min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
        source={images.highlight}
      >
        <Image className="size-5" tintColor={"#151312"} source={icon} />
        <Text className="text-secondary text-base font-semibold ml-2">
          {title}
        </Text>
      </ImageBackground>
    );
  return (
    <View className="size-full mt-4 justify-center items-center rounded-full">
      <Image className="size-5" tintColor={"#A8B5DB"} source={icon} />
    </View>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0F0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0F0D23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} title="Search" />
          ),

          title: "Search",
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.save} title="Saved" />
          ),

          headerShown: false,
          title: "Saved",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} title="Profile" />
          ),

          title: "Profile",
        }}
      />
    </Tabs>
  );
}
