import { router } from "expo-router";
import { View, Text, Image } from "react-native";

import { images } from "../constants";
import CustomButton from "./CustomButton";

const EmptyState = ({
  title,
  subtitle,
  buttonText = "Back to Explore",
  onButtonPress,
  showButton = true,
  icon
}) => {
  const handleButtonPress = () => {
    if (onButtonPress) {
      onButtonPress();
    } else {
      router.push("/home");
    }
  };

  return (
    <View className="flex justify-center items-center px-6 py-12">
      {/* Background decoration */}
      <View className="absolute inset-0 flex justify-center items-center opacity-5">
        <View className="w-96 h-96 rounded-full bg-gradient-to-br from-secondary-500 to-accent-500" />
      </View>

      {/* Main content */}
      <View className="relative z-10 flex items-center">
        {/* Icon or Image */}
        {icon ? (
          <View className="mb-8 p-6 bg-dark-800/60 backdrop-blur-sm rounded-3xl shadow-soft border border-dark-700/50">
            {icon}
          </View>
        ) : (
          <View className="mb-8 p-4 bg-dark-800/60 backdrop-blur-sm rounded-3xl shadow-soft border border-dark-700/50">
            <Image
              source={images.empty}
              resizeMode="contain"
              className="w-[200px] h-[160px] opacity-80"
            />
          </View>
        )}

        {/* Text content */}
        <View className="items-center space-y-3 mb-8">
          <Text className="text-lg font-pmedium text-light-300 text-center">
            {title}
          </Text>
          <Text className="text-2xl text-center font-psemibold text-white max-w-xs leading-relaxed">
            {subtitle}
          </Text>
        </View>

        {/* Action button */}
        {showButton && (
          <CustomButton
            title={buttonText}
            handlePress={handleButtonPress}
            containerStyles="w-full max-w-xs"
            variant="secondary"
            size="large"
          />
        )}
      </View>
    </View>
  );
};

export default EmptyState;
