import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
  variant = "primary", // primary, secondary, accent, outline, ghost
  size = "default", // small, default, large
}) => {
  // Define button variants
  const getVariantStyles = () => {
    switch (variant) {
      case "secondary":
        return "bg-secondary-500 shadow-medium";
      case "accent":
        return "bg-accent-500 shadow-glow-accent";
      case "outline":
        return "bg-transparent border-2 border-secondary-500 shadow-soft";
      case "ghost":
        return "bg-dark-800/50 backdrop-blur-sm shadow-soft";
      case "danger":
        return "bg-danger-500 shadow-medium";
      default:
        return "bg-gradient-to-r from-secondary-600 to-secondary-500 shadow-glow";
    }
  };

  // Define size styles
  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return "min-h-[48px] px-4 rounded-xl";
      case "large":
        return "min-h-[72px] px-8 rounded-2xl";
      default:
        return "min-h-[62px] px-6 rounded-xl";
    }
  };

  // Define text styles based on variant and size
  const getTextStyles = () => {
    const baseTextStyle = variant === "outline" ? "text-secondary-500" : "text-white";
    const sizeTextStyle = size === "small" ? "text-base" : size === "large" ? "text-xl" : "text-lg";
    return `${baseTextStyle} font-psemibold ${sizeTextStyle}`;
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.8}
      className={`
        ${getVariantStyles()}
        ${getSizeStyles()}
        flex flex-row justify-center items-center
        transform transition-all duration-200
        ${isLoading ? "opacity-70 scale-95" : ""}
        ${containerStyles}
      `}
      disabled={isLoading}
      style={{
        elevation: 8, // Android shadow
      }}
    >
      <View className="flex flex-row items-center justify-center">
        <Text className={`${getTextStyles()} ${textStyles}`}>
          {title}
        </Text>

        {isLoading && (
          <ActivityIndicator
            animating={isLoading}
            color={variant === "outline" ? "#6366F1" : "#fff"}
            size="small"
            className="ml-3"
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
