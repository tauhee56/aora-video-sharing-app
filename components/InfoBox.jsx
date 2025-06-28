import { View, Text } from "react-native";

const InfoBox = ({
  title,
  subtitle,
  containerStyles,
  titleStyles,
  variant = "default", // default, card, highlight
  icon
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "card":
        return "bg-dark-800/60 backdrop-blur-sm rounded-2xl p-4 shadow-soft border border-dark-700/50";
      case "highlight":
        return "bg-gradient-to-br from-secondary-600/20 to-accent-600/20 backdrop-blur-sm rounded-2xl p-4 shadow-glow border border-secondary-500/30";
      default:
        return "";
    }
  };

  const getTitleStyles = () => {
    const baseStyles = "text-white text-center font-psemibold";
    const variantStyles = variant === "highlight" ? "text-secondary-300" : "";
    return `${baseStyles} ${variantStyles} ${titleStyles}`;
  };

  const getSubtitleStyles = () => {
    const baseStyles = "text-center font-pmedium mt-1";
    const variantStyles = variant === "highlight" ? "text-accent-300" : "text-light-400";
    return `${baseStyles} ${variantStyles}`;
  };

  return (
    <View className={`${getVariantStyles()} ${containerStyles}`}>
      {icon && (
        <View className="flex items-center mb-2">
          {icon}
        </View>
      )}

      <Text className={getTitleStyles()}>
        {title}
      </Text>

      {subtitle && (
        <Text className={`text-sm ${getSubtitleStyles()}`}>
          {subtitle}
        </Text>
      )}
    </View>
  );
};

export default InfoBox;
