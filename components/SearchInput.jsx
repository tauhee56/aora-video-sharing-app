import { useState } from "react";
import { router, usePathname } from "expo-router";
import { View, TouchableOpacity, Image, TextInput, Alert } from "react-native";

import { icons } from "../constants";

const SearchInput = ({ initialQuery, placeholder = "Search videos, creators, topics..." }) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = () => {
    if (query.trim() === "") {
      return Alert.alert(
        "Search Required",
        "Please enter something to search for videos and content"
      );
    }

    if (pathname.startsWith("/search")) {
      router.setParams({ query: query.trim() });
    } else {
      router.push(`/search/${query.trim()}`);
    }
  };

  return (
    <View
      className={`
        flex flex-row items-center w-full h-16 px-4 rounded-2xl border-2
        ${isFocused ? 'border-secondary-500 bg-dark-800/80' : 'border-dark-600 bg-dark-800/60'}
        backdrop-blur-sm shadow-soft transition-all duration-200
      `}
      style={{
        elevation: isFocused ? 4 : 2, // Android shadow
      }}
    >
      <Image
        source={icons.search}
        className="w-5 h-5 mr-3"
        resizeMode="contain"
        tintColor={isFocused ? "#6366F1" : "#9CA3AF"}
      />

      <TextInput
        className="flex-1 text-white font-pmedium text-base"
        value={query}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        onChangeText={setQuery}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onSubmitEditing={handleSearch}
        returnKeyType="search"
        style={{
          fontSize: 16,
          lineHeight: 20,
        }}
      />

      <TouchableOpacity
        onPress={handleSearch}
        className={`
          p-3 rounded-xl ml-2
          ${query.trim() ? 'bg-secondary-500 shadow-glow' : 'bg-dark-700'}
          transition-all duration-200
        `}
        activeOpacity={0.8}
        style={{
          elevation: query.trim() ? 6 : 2,
        }}
      >
        <Image
          source={icons.search}
          className="w-4 h-4"
          resizeMode="contain"
          tintColor={query.trim() ? "#FFFFFF" : "#9CA3AF"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
