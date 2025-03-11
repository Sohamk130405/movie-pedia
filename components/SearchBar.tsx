import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

interface SearchProps {
  placeholder: string;
  onPress?: () => void;
  value?: string;
  onChangeText?: (text: string) => void;
  autoFocus?: boolean;
}

const SearchBar = ({
  value,
  placeholder,
  onPress,
  onChangeText,
  autoFocus,
}: SearchProps) => {
  return (
    <View className="flex-row items-center bg-secondary rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor={"#AB8BFF"}
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        autoFocus={autoFocus}
        onChangeText={onChangeText}
        placeholderTextColor="#AB8BFF"
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
