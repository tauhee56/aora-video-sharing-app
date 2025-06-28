import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  error,
  success,
  icon,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Determine border color based on state
  const getBorderColor = () => {
    if (error) return "border-danger-500";
    if (success) return "border-accent-500";
    if (isFocused) return "border-secondary-500";
    return "border-dark-600";
  };

  // Determine background color based on state
  const getBackgroundColor = () => {
    if (isFocused) return "bg-dark-800/80";
    return "bg-dark-800/60";
  };

  return (
    <View className={`space-y-3 ${otherStyles}`}>
      <Text className="text-base text-light-300 font-pmedium">{title}</Text>

      <View
        className={`
          w-full h-16 px-4 rounded-2xl border-2
          ${getBorderColor()}
          ${getBackgroundColor()}
          backdrop-blur-sm
          shadow-soft
          flex flex-row items-center
          transition-all duration-200
        `}
        style={{
          elevation: isFocused ? 4 : 2, // Android shadow
        }}
      >
        {icon && (
          <Image
            source={icon}
            className="w-5 h-5 mr-3 opacity-70"
            resizeMode="contain"
            tintColor={isFocused ? "#6366F1" : "#9CA3AF"}
          />
        )}

        <TextInput
          className="flex-1 text-white font-pmedium text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          onChangeText={handleChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={title === "Password" && !showPassword}
          style={{
            fontSize: 16,
            lineHeight: 20,
          }}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            className="p-2 rounded-lg"
            activeOpacity={0.7}
          >
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-5 h-5"
              resizeMode="contain"
              tintColor={isFocused ? "#6366F1" : "#9CA3AF"}
            />
          </TouchableOpacity>
        )}
      </View>

      {/* Error or Success Message */}
      {error && (
        <Text className="text-sm text-danger-500 font-pregular ml-1">
          {error}
        </Text>
      )}
      {success && (
        <Text className="text-sm text-accent-500 font-pregular ml-1">
          {success}
        </Text>
      )}
    </View>
  );
};

export default FormField;
